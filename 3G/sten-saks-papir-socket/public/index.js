let clientSocket

function setup(){
  noCanvas()
  //log på serveren 
  clientSocket = io.connect()
  //få besked om du er med eller om du må vente
  clientSocket.on('join', ok => {
    if(ok){
      select('#name').addClass('show')
    }else{
      select('#reject').addClass('show')
    }
  })
  select('#nameButton').mousePressed(()=>{
    if(select('#nameInput').value() != ''){
      clientSocket.emit('name', select('#nameInput').value())
      select('#name').removeClass('show')
      select('#lobby').addClass('show')
      
    }else{
      confirm('indtast et navn')
    }
    clientSocket.on('play', ()=>{
      select('#lobby').removeClass('show')
      select('#play').addClass('show')
    })
  })
}

