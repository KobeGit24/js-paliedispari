// PARI E DISPARI
do {
    var choice = prompt('scegli tra pari e dispari');
} while ( choice!='pari' && choice!='dispari')
var userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
var computer = random(1,5);
var result = computer + userNumber;
EvenOdd(choice,result);

// Funzioni
function EvenOdd(user, sum) {
    if (user == 'pari' && sum%2==0 || user == 'dispari' && sum%2) {
        console.log('vince utente');
    } else {
        console.log('vince computer');
    }
    return;
}

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}