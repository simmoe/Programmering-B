const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send('Jeg ser dig så meget, jeg anerkender du er her')
})
app.get('/itadmin/*', (req, res)=>{
    const obj = {
        'name': 'hans',
        'occupation':'it-admin'
    }
    res.send(obj)
})

app.listen(port, ()=>{
    console.log('Express server is now running on port: ' + port)
})


