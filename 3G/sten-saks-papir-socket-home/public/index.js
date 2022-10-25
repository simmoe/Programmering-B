let clientSocket
//første side er lobbyen
let currentPage = '#lobby'
//alle html id'erne gøres klar
let nameInput, nameButton, myName, rejectButton, lobbyText, timer, stone, scissor, paper, player1, player1Choice, player2, player2Choice, winner, restartButton

function setup(){
  noCanvas()
  //log på serveren 
  clientSocket = io.connect()
  //initialiser alle HTML variable
  initVars()

  //få besked om du er med eller om du må vente
  clientSocket.on('join', ok => {
    //hvis vi er med, skift til navneside 
    //ellers skift til afslag side 
  })

  //håndter reject
  rejectButton.mousePressed(()=>{
    //hvis der trykkes på reject, reload siden (og forsøg at lave en ny socket på serveren)
    window.location.reload()
  })

  //håndter navn
  nameButton.mousePressed(()=>{
    //tjek om navn er indtastet 
    if(nameInput.value() != ''){
      //send navn til serveren
      //sæt navn i HTML
      //sæt lobby teksten til 'venter på spillere'
      //skift side til lobbyen
    }else{
      confirm('indtast et navn')
    }
    
    //start spil
    clientSocket.on('play', () => {
      console.log('got play, starting game')
      //skift til play side 
    })
    
    //håndter valg
    stone.mousePressed(()=>choice('stone'))
    scissor.mousePressed(()=>choice('scissor'))
    paper.mousePressed(()=>choice('paper'))
    
    function choice(choice) {
      //send klientens valg til serveren  
      //Skift lobby teksten til 'Lad os se'
      //skift side til lobbyen
    }
    
    //Vis resultat
    clientSocket.on('result', w => {
      console.log('got result, winner is ', w)
      //Sæt HTML vindernavn
      //skift til result side 
      //Håndter tryk på reset knap
    })
  })
}

//funktion der bytter klasser på varirablen currentPage 
function shiftPage(pageId){
  //vælg side med currentPage id og fjern klassen 'show'  
  //vælg siden med det nye id og addClass 'show'
  //sæt currentPage variabel til den nye side  
}

function initVars(){
  nameInput = select('#nameInput')
  nameButton = select('#nameButton')
  myName = select('#myName')
  rejectButton = select('#rejectButton')
  lobbyText = select('#lobbyText')
  timer = select('#timer')
  stone = select('#stone')
  scissor = select('#scissor')
  paper = select('#paper')
  player1 = select('#player1')
  player1Choice = select('#player1Choice')
  player2 = select('#player2')
  player2Choice = select('#player2Choice')
  winner = select('#winner')
  restartButton = select('#restartButton')
}

