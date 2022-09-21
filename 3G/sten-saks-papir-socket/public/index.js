let clientSocket
let currentPage = '#lobby'

function setup(){
  noCanvas()
  //log på serveren 
  clientSocket = io.connect()
  //få besked om du er med eller om du må vente
  clientSocket.on('join', ok => {
    if(ok){
      console.log('got ok to join, showing namepage')
      shiftPage('#name')
    }else{
      shiftPage('#reject')
    }
  })
  select('#nameButton').mousePressed(()=>{
    if(select('#nameInput').value() != ''){
      clientSocket.emit('name', select('#nameInput').value())
      shiftPage('#lobby')
    }else{
      confirm('indtast et navn')
    }
    clientSocket.on('play', ()=>{
      shiftPage('#play')
    })
  })
}

function shiftPage(pageId){
  select(currentPage).removeClass('show')
  select(pageId).addClass('show')
  currentPage = pageId
}

