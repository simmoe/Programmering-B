let client 
let info 

function setup(){
    info = select('#info')
    client = mqtt.connect('wss://mqtt.nextservices.dk')
    client.on('connect', () => {
        info.html('connected to nextservices.dk')
        
        client.subscribe('programmering')

        client.on('message', (topic, message) => {
            info.html('Modtog besked: ' + message + ' på emnet: ' + topic)
        })
    })
}

