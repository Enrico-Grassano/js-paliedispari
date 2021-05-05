//Functions
function oddOrEven (num) {
    if (nume % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }
}
function isEven (num) {
    return num % 2 == 0;
}
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var scelta = "";
do {
    scelta = prompt("Pari o dispari?");
} while (scelta ! = "pari" && scelta ! = "dispari");
console.log("Scelta:", scelta);
var numeroUtente = parseInt(prompt("Scegli un numero compreso tra 1 e 5."));
console.log("Numero Utente:", numeroUtente);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
var numeroPC = getRandomNumber(1, 5);
console.log("Numero PC:", numeroPC);
//Sommiamo i due numeri.
var somma = numeroPC + numeroUtente;
console.log("Somma:", somma);
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
var controllo = OddOrEven(somma);
console.log("Controllo:", controllo);
//Dichiariamo chi ha vinto.
if (scelta == controllo) {
    console.log("Utente vince.");
} else {
    console.log("PC vince.");
}