// PARI E DISPARI
var choice = prompt('scegli tra pari e dispari');
var userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
var computer = random(1,5);
EvenOdd(choice);

// Funzioni
function EvenOdd(user) {
    var sum = computer + userNumber;
    if (user == 'pari' && sum%2==0) {
        console.log('vince utente');
    } else if (user == 'pari' && sum%2) {
        console.log('vince computer');
    } else if (user == 'dispari' && sum%2==0) {
        console.log('vince computer');
    } else if (user == 'dispari' && sum%2) {
        console.log('vince utente');
    } 
    return;
}

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}