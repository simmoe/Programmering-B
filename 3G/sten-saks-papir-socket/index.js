//opret server med express
const express = require('express')
const app = express()
const port = 4444
app.use('/', express.static('public'))
const server = app.listen(port, ()=>{
    console.log('server lytter på adressen: http://localhost:' + port)
})
//opret en socket 
const io = require('socket.io')
const serverSocket = io(server)


let players = []
let readyPlayers = 0

//al snak med klienterne sker på connection
serverSocket.on('connection', socket => {
    console.log('ny spiller: ' + socket.id)

    //add players on connection
    if(players.length >= 2){
        console.log('der var ikke plads til: ' + socket.id)
        socket.emit('join', false)
    }else{
        players.push({'id': socket.id})
        socket.emit('join', true)        
    }
    socket.on('name', name => {
        let thisPlayer = players.find( p => p.id == socket.id )
        thisPlayer.name = name
        console.log('denne spiller', thisPlayer)
        readyPlayers++
        console.log('ReadyPlayers', readyPlayers)
        if(readyPlayers == 2){
            //start spil
            let player1 = players[0]
            let player2 = players[1]
            serverSocket.emit('play')
        }
    })

    socket.on('disconnect', ()=>{
        players = players.filter( p => p.id != socket.id)
        if(readyPlayers == 2) readyPlayers = 1
        serverSocket.emit('join', true)
    })
})
