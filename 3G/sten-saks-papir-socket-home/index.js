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
    //ellers tilføj spillere til players array
    //og send join, true
    
    //modtag spillernavne
    socket.on('name', name => {
        console.log('Fik navn ', players, gotName)        
        //indsæt navnet i players array 
        //registrer at vi har modtaget et navn til - læg 1 til navnetæller
        //hvis vi har modtaget BEGGE navne, start spil 
    })

    //modtag spillernes valg 
    socket.on('choice', choice => {
        console.log('Fik valg ', players, gotChoice)
        //indsæt valget i players array
        //registrer at vi har modtaget et valg til - læg en til valgtæller 
        //hvis vi har modtaget begge valg, beregn vinder
            //sæt winner = den første spiller
            //tjek om spillerne har samme valg - sæt winner = draw
            //tjek om spiller 1 har saks og den anden sten - sæt winner = players[1]
            //tjek om spiller 1 har papir og den anden saks - sæt winner = players[1]
            //tjek om spiller 1 har sten og den anden papir - sæt winner = players[1]
        //send resultat 
    })

    //håndter disconnect - hvis en spiller lukker sin side
    socket.on('disconnect', ()=>{
        console.log('Player disconnected, updating arrays ')
        //fjern spilleren fra players array
        //find ud af om der er flere spillere tilbage, og sæt navnetælleren
        //set valgtælleren til nul
        //send eventuel spiller tilbage til start 
    })

    //håndter 'nyt spil' knap
    socket.on('restart', ()=>{
        console.log('Restarting game, same players ')
        //sæt valgtæller til 0 (vi har begge spilleres navn) 
        //start spil
    })
})
