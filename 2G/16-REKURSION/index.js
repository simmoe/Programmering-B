//Dette program viser hvordan man løser en opgave med rekursion eller iteration 


//Lad os sige vi har en opgave hvor vi skal tælle fra 1 til 10

//Iteration
//Iteration betyder egentlig bare, at der bruges et for loop til at gøre noget indtil en betingelse er opfyldt
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Rekursion
//Rekursion betyder bare, at der bruges en funktion som kalder sig selv med en betingelse, der skal opfyldes for at stoppe
function countToTen(i) {  
    if (i <= 10) {
        console.log(i);
        //Her kalder funktionen sig selv med i + 1, så den tæller op
        countToTen(i + 1);
    }
    //Og når i er større end 10, så stopper den
} 

//Her kalder vi funktionen med 1, så den starter med at tælle fra 1
countToTen(1);

//Lad os prøve rekursion med et lidt mere komplekst eksempel
//Vi har en liste med tal, og vi skal finde det største tal i listen

let list = [1, 2, 3, 4, 5, 6, 16, 16, 7, 8, 9, 13, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//Vi starter med at sætte en global variabel max til det første tal i listen
  let max = list[0];

  //Vi laver en funktion, der tager en liste og et tal som argumenter
  function findMaxInList(list, i) {
      //Hvis tallet er større end max, så sætter vi max til det tal
      if (list[i] > max) {
          max = list[i];
      }
      //Hvis i er mindre end længden af listen, så kalder vi funktionen igen med i + 1
      if (i < list.length) {
          findMaxInList(list, i + 1);
      }
  }

  //Vi kalder funktionen med listen og 1, så den starter med at tjekke det andet tal i listen
  findMaxInList(list, 1);

  //Til sidst returnerer vi max
  console.log(max + ' er det største tal i listen');
