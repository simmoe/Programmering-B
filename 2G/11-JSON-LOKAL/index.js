//Dette program henter data fra en lokal JSON fil og viser det på en hjemmeside
//Funktionen filterData() tager en string som parameter og returnerer et array med de elementer som indeholder den string

//Dette er en global variabel som skal indeholde data fra JSON filen
let data

//ASYNKRON FUNKTION som henter data fra en lokal JSON fil
fetch('./data/birds.json')
    //modtag response fra serveren og konverter til JSON 
    .then( res => res.json() )
    //når data er konverteret til JSON, så kan vi arbejde med det 
    .then( json => {
        //vi starter lige med at udskrive json i konsollen
        console.log(json)
        //så gemmer vi json i en global variabel, så vi kan bruge den senere
        data = json.birds
        //vi indsætter "description" fra json i h1 tagget med id: title
        document.querySelector('#title').innerHTML = json.description
        //vi laver et loop, der kører igennem alle elementer i json.birds
        json.birds.map( bird => {
            //og for hvert element i json.birds kalder vi funktionen newCard() og sender elementet med som parameter
            newCard(bird)
        } )

    })



    //dette er en funktion som tager en string og et array som parameter, og returnerer et array med de elementer som indeholder den string
    function filterArray(str, arr){
        //filter() er en indbygget funktion i JavaScript, der filtrerer et array
        let resultArray = arr.filter(
            //filter() tager en funktion som parameter, og denne funktion sammenligner om hvert element i arrayet indeholder den string som er sendt med som parameter
            function (bird)  {
                if(bird.family.includes(str)){
                    return true
                }                
            }
        )      
        return resultArray  
    }

    document.querySelector('#input').addEventListener('input', function(){
        let q = document.querySelector('#input').value
        let filterBirds = filterArray(q, data)
        document.querySelector('main').innerHTML = ''
        filterBirds.map( bird => newCard(bird) )
    })




    document.querySelector('#searchicon').addEventListener('click', ()=>{
        document.querySelector('#searchbar').classList.add('show')
    })

    document.querySelector('#close').addEventListener('click', ()=>{
        document.querySelector('#searchbar').classList.remove('show')
    })


    const newCard = (bird) => {
        let card = document.createElement('div')
        let heading = document.createElement('h2')
        let members = document.createElement('div')
        card.classList.add('card')
        members.classList.add('members')
        card.append(heading)
        card.append(members)
        heading.innerHTML = bird.family
        let list = ''
        bird.members.map( member => list += '<li>' + member + '</li>')
        members.innerHTML = list
        document.querySelector('main').append(card)
    }