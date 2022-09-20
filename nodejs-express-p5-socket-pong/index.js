const express = require('express')
const app = express()
const port = 3333
app.use('/', express.static('public'))
const server = app.listen(port, () => {
  console.log('App listening on http://localhost:' + port)
})

let players = []

const io = require("socket.io")
const serverSocket = io(server)

serverSocket.on('connection', socket => {
  console.log('a user connected ' + socket.id)
  if(players.length < 2){
    players.push(socket.id)
  }else{
    socket.disconnect()
    serverSocket.emit('begin')
    serverSocket.to()
  }
})