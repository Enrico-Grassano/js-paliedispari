//L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(numeroUtente);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var numeroPc = Math.floor(Math.random() * 5) + 1;    
console.log(numeroPc);
//Sommiamo i due numeri.
var somma = numeroUtente + numeroPc;
console.log(somma);
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
if (somma % 2) {
    alert("Il numero è dispari");
    console.log("Il numero è dispari");
} else {
    alert("Il numero è pari");
    console.log("Il numero è pari");
}
//Dichiariamo chi ha vinto.