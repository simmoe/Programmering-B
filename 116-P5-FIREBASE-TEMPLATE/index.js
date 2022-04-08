//model - lokal kopi af databasen
let model = {}
//view - den visning VI NU har vakgt at lave af data
let htmlWords
//other html elements 

function setup(){
    //opret reference til html view
    //opret reference til andre html elementer 
    //vi vil ikke have noget p5 canvas
    noCanvas()
    //controller
    db.collection('collection-name').doc('doc-id')
        .onSnapshot( doc => {
            //opdater model
            //opdater view
            //når der kommer input fra slutbrugeren, opdateres MODELLEN
        })
    //update database with model on input    
}

function draw(){
    //console.log(htmlWords.elt.scrollTop, htmlWords.elt.scrollHeight)
}