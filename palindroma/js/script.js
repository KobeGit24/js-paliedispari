//PALINDROMA
var word = prompt('inserisci una parola:');
reverse(word);

// for (var i = userWord.length -1; i >= 0; i--) {
//   wordReverse+=userWord[i];   
// }
// console.log(wordReverse);

// if (userWord == wordReverse) {
//     console.log('la parola e palindroma');  
// } else {
//     console.log('la parola non e palindroma');   
// }

function reverse(userWord) {
    var wordReverse = "";
    for (var i = userWord.length -1; i >= 0; i--) {
        wordReverse+=userWord[i];   
    } 
    if (userWord == wordReverse) {
        console.log('la parola e palindroma');  
    } else {
        console.log('la parola non e palindroma');   
    }
    return;
}
