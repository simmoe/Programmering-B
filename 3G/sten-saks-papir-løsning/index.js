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
        console.log('ny spiller: ' + socket.id)
        console.log('Der er nu ' + players.length + ' spillere')
        console.log('Hvoraf ' + players.filter(p=>p.name).length + ' har indtastet deres navn')    
    }
    
    //modtag spillernavne
    socket.on('name', name => {
        let thisPlayer = players.find( p => p.id == socket.id )
        //indsæt navnet i objektet i players array 
        thisPlayer.name = name
        //registrer at vi har modtaget et navn til - læg 1 til navnetæller
        gotName ++
        console.log('Fik navn: ' + name, ' Vi har nu ' + gotName + ' navn(e)')        
        //hvis vi har modtaget BEGGE navne, start spil 
        if(gotName == 2){
            console.log('got both names, ready to play')
            serverSocket.emit('play', true)
        } 
    })

    //modtag spillernes valg 
    socket.on('choice', choice => {
        //indsæt valget i players array
        let thisPlayer = players.find( p => p.id == socket.id )
        thisPlayer.choice = choice
        //registrer at vi har modtaget et valg til - læg en til valgtæller 
        gotChoice ++
        console.log(thisPlayer.name + ' valgte ' + thisPlayer.choice)
        console.log('Vi har nu ' + gotChoice + ' valg')
        //hvis vi har modtaget begge valg, beregn vinder 
        if(gotChoice == 2){
            let winner = players[0].name
            if(players[0].choice == players[1].choice) winner = 'draw'
            if(players[0].choice == 'scissor' && players[1].choice == 'stone') winner = players[1].name
            if(players[0].choice == 'stone' && players[1].choice == 'paper') winner = players[1].name
            if(players[0].choice == 'paper' && players[1].choice == 'scissor') winner = players[1].name
            console.log('Sender resultat, vinder er ', winner)
            serverSocket.emit('result', winner)
            gotChoice = 0
        } 
    })

    //håndter disconnect - hvis en spiller lukker sin side
    socket.on('disconnect', ()=>{
        console.log('Player disconnected opdaterer array ')
        //fjern spilleren fra players array
        players = players.filter( p => p.id != socket.id)
        //find ud af om der er flere spillere tilbage, og sæt navnetælleren
        gotName = players.filter(p => p.name).length 
        //set valgtælleren til nul
        gotChoice = 0
        //send eventuel spiller tilbage til start 
        serverSocket.emit('join', true)
        console.log('Har fjernet spiller', players, 'Der er ' + gotName + ' spillere tilbage, som har indtastet navn')
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
