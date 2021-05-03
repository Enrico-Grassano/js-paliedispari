//Chiedere all'utente di inserire una parola.
var parola =  prompt("Inserisci una parola");
//Creare una funzione per capire se la parola inserita è palindroma
function invertiParola(str){
  var strInversa = str.split('').reverse().join('');  
  return strInversa;
}

var parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  