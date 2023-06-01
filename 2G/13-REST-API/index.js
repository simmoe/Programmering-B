//dette er et lille program, der henter data fra en API og viser det på en hjemmeside

function getActivity () {
    //dette er API'ens URL og endpoint er /activity
    //Vi indsætter desuden en query parameter, som er en værdi, der sendes med i URL'en
    //Brugeren kan vælge tre forskellige værdier i en dropdown menu med id: type-select
    let url = 'http://www.boredapi.com/api/activity?type=' + document.querySelector('#type-select').value    
    //fetch er en indbygget funktion i JavaScript, der henter data fra en URL
    fetch(url)
        //når data er hentet får vi et repsonse fra serveren, så skal vi have det konverteret til JSON
        .then( response => response.json() )
        //når data er konverteret til JSON, så kan vi arbejde med det
        .then( json => {
            console.log(json)
            //Vi kan enten udskrive noget data direkte i konsollen
            console.log(json.activity)
            console.log(json.type)
            console.log(json.participants)
            //eller kalde en funktion som vi selv har lavet, der kan udskrive data på hjemmesiden
            createCard(json)
        })
}

//Funktionen createCard() tager et JSON objekt som parameter 
function createCard(obj) {
    document.querySelector('#title').innerHTML = obj.activity
    document.querySelector('#participants').innerHTML = obj.participants
    document.querySelector('#acc').innerHTML = obj.accessibility
    document.querySelector('#price').innerHTML = obj.price
    document.querySelector('#cat').innerHTML = obj.type
}

//vi kalder funktionen getActivity() for at hente data første gang, når siden er loadet
getActivity()

//vi tilføjer en eventlistener til knappen med id: fetch
//når brugeren klikker på knappen, så skal funktionen getActivity() kaldes 
document.querySelector('#fetch').addEventListener('click', getActivity)