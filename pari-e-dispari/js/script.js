//L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("Hai scelto il numero:", numeroUtente);

if (numeroUtente % 2) {
    console.log("Hai scelto un numero dispari")
} else {
    console.log("Hai scelto un numero pari");
}
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var numeroPc = Math.floor(Math.random() * 5) + 1;    
console.log("Il pc ha scelto il numero:", numeroPc);
//Sommiamo i due numeri.
var somma = numeroUtente + numeroPc;
console.log("La somma tra i due numeri è:", somma);
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
if (somma % 2) {
    console.log("La somma è: dispari");
} else {
    console.log("La somma è: pari");
}
//Dichiariamo chi ha vinto.