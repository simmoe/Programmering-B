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

let gotName = 0, gotChoice = 0

let players = []

//al snak med klienterne sker på connection
serverSocket.on('connection', socket => {
    console.log('ny spiller: ' + socket.id)

    //tjek om der er plads til flere spillere 
    //hvis ikke, send join, false
    if(players.length >= 2){
        console.log('der var ikke plads til: ' + socket.id)
        socket.emit('join', false)
        socket.disconnect()
    }else{
        //ellers tilføj spillere til players array
        players.push({ 'id':socket.id})
        //og send join, true
        socket.emit('join', true)        
    }
    
    //modtag spillernavne
    socket.on('name', name => {
        console.log('Fik navn ', players, gotName)        
        //indsæt navnet i players array 
        players.find( p => p.id == socket.id ).name = name
        //registrer at vi har modtaget et navn til - læg 1 til navnetæller
        gotName ++
        //hvis vi har modtaget BEGGE navne, start spil 
        if(gotName == 2){
            serverSocket.emit('play', true)
        } 
    })

    //modtag spillernes valg 
    socket.on('choice', choice => {
        console.log('Fik valg ', players, gotChoice)
        //indsæt valget i players array
        players.find( p => p.id == socket.id ).choice = choice
        //registrer at vi har modtaget et valg til - læg en til valgtæller 
        gotChoice ++
        //hvis vi har modtaget begge valg, beregn vinder 
        if(gotChoice == 2){
            let winner = players[0].name
            if(players[0].choice == players[1].choice) winner = 'draw'
            if(players[0].choice == 'scissor' && players[1].choice == 'stone') winner = players[1].name
            if(players[0].choice == 'stone' && players[1].choice == 'paper') winner = players[1].name
            if(players[0].choice == 'paper' && players[1].choice == 'scissor') winner = players[1].name
            console.log('Sender resultat, vinder er ', winner)
            serverSocket.emit('result', winner)
        } 
    })

    //håndter disconnect - hvis en spiller lukker sin side
    socket.on('disconnect', ()=>{
        console.log('Player disconnected, updating arrays ')
        //fjern spilleren fra players array
        players = players.filter( p => p.id != socket.id)
        //find ud af om der er flere spillere tilbage, og sæt navnetælleren
        gotName = players.filter(p => p.name).length 
        //set valgtælleren til nul
        gotChoice = 0
        //send eventuel spiller tilbage til start 
        serverSocket.emit('join', true)
    })

    //håndter 'nyt spil' knap
    socket.on('restart', ()=>{
        console.log('Restarting game, same players ')
        //sæt valgtæller til 0 (vi har begge spilleres navn) 
        gotChoice = 0
        //start spil
        serverSocket.emit('play', true)
    })
})
