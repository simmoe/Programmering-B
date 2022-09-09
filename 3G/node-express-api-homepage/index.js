//hent biblioteket IP 
const ip = require('ip')
console.log(ip.address())
//hent biblioteket express og gem objektet i en konstant
const express = require('express')
//opret en variabel til express serveren
const app = express()
//definer en port
const port = 4040
//vi laver en meget simpel database 
const weekDays = {
    'mandag': 'Jeg har det... mandag.. det er sådan.. nedadgående',
    'tirsdag': 'Jeg har det godt, det er tirsdag',
    'onsdag': 'Jeg har det... onsdag, den kan god være svær',
    'torsdag': 'Torsdag - det er en dejlig dag. Jeg har det fedt',
    'fredag': 'Ubeskrivelig glad, er jeg',
    'lørdag': 'Jeg har det roligt, trækker vejret, fuld af LOVE',
    'søndag': 'Jeg har det okay, det er søndag. Jeg er veludhvilet. Eller.',
}

//serve en statisk mappe i roden 
app.use('/', express.static('public'))


//start en webserver på port 3000
app.get('/api/*', (req, res)=>{
    console.log('Serveren fik besøg i roden')
    if(req.params[0]){
        console.log('WOW nogen vil bruge vores api: ' + req.params[0])
        if(weekDays[req.params[0]]){
            res.send(weekDays[req.params[0]])
        }else{
            res.send(req.params[0] + 'is NOT an api endpoint')
        }
    }else{
        res.send('Du besøgte mig da - i min rod')
    }
})
app.listen(port, ()=>{
    console.log('Server lytter på port: ' + port)
}) 