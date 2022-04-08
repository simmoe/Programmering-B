//model - lokal kopi af databasen
let model = {}
//view - den visning VI NU har vakgt at lave af data
let htmlWords
//other html elements 
let saveButton 

function setup(){
    //opret reference til html view
    htmlWords = select('#words')
    //opret reference til andre html elementer 
    saveButton = select('#saveButton')
    //vi vil ikke have noget p5 canvas
    noCanvas()
    //controller
    db.collection('diary-model').doc('diary-id')
        .onSnapshot( doc => {
            console.log(doc.id, doc.data())
            //opdater model
            model = doc.data()
            //opdater view
            htmlWords.html('')
            model.days.map( (day, index) => updateView( day, index ) )
            //når der kommer input fra slutbrugeren, opdateres MODELLEN
        })
    //update database with model on save    
    saveButton.mousePressed( ()=>{
        console.log('updating database with model')
        db.collection('diary-model').doc('diary-id').update(model)
    })
}

function updateView( day, index ){
    let newDay = createDiv()
        .addClass('day')
    let newDate = createElement('h3', day.date )
        .addClass('date')
    let newInput = createElement( 'textArea', day.words )
        .addClass('words')
        //update model with view
        .input( () => model.days[index].words = newInput.value())
    newDay.child(newDate)
    newDay.child(newInput)
    htmlWords.child(newDay)
}

function draw(){
    //console.log(htmlWords.elt.scrollTop, htmlWords.elt.scrollHeight)
}