let clientSocket
let chatHistory 
let myName = 'Simon'

function setup(){
    //spørg serveren om en socket forbindelse
    clientSocket = io.connect()
    //modtag array med chat historik
    clientSocket.on('history', history => {
        console.log('modtog chathistorik: ', history)
        select('#chatBox').html(history)
    })
    //modtag array med chat historik
    clientSocket.on('chatMessage', chatMessage => {
        console.log('modtog chatbesked: ', chatMessage)
        let p = createElement('p', chatMessage).addClass('chatMessage')
        select('#chatBox').child(p)
    })

    select('#okButton').mousePressed(()=>{
        if(select('#nameInput').value() !=''){
            select('#namePage').addClass('hidden')
            select('#chatPage').removeClass('hidden')
            myName = select('#nameInput').value()
        }
    })



    select('#sendButton').mousePressed(()=>{
        if(select('#chatMessage').value() !=''){
            let p = createElement('p', myName + ': ' + select('#chatMessage').value())
                .addClass('me')
            select('#chatBox').child(p)
            clientSocket.emit('chatMessage', myName + ': ' + select('#chatMessage').value())
            select('#chatMessage').value('')
        }
    })

}