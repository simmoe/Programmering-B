//Dette program tjekker om brugeren skriver og vælger de rigtige ord i en tekst
//Vi løser først opgaven med Vanilla javascript og derefter med p5.js


//Vi starter med at lave nogle globale variabler som skal indeholde det brugere indtaster

let insertWord = ''
let dropWord = ''

//Vi laver en vanilla javascriptfunktion som skal tjekke om brugeren har skrevet og valgt de rigtige ord
function checkWords() {
    insertWord = document.getElementById('insertWord').value
    dropWord = document.getElementById('dropWord').value
    console.log(insertWord, dropWord)
    //Vi tjekker om brugeren har skrevet det rigtige ord i inputfeltet
    if (insertWord == 'børn' && dropWord == 'så') {
        //Hvis begge ord er rigtige, så viser vi en besked i konsollen
        document.getElementById('resultat').innerHTML = 'Du har skrevet og valgt de rigtige ord'
    } else {
        //Ellers viser vi en fejlbesked
        document.getElementById('resultat').innerHTML = 'Du har skrevet og valgt de forkerte ord'
    }
}

//Vi laver en eventlistener som kalder checkWords funktionen når brugeren klikker på knappen
document.getElementById('checkWords').addEventListener('click', checkWords);

