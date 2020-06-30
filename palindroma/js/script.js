//PALINDROMA
var word = prompt('inserisci una parola:');
reverse(word);

if (reverse(word)) {
    console.log('la parola e palindroma');   
} else {
    console.log('la parola non e palindroma');  
}

// for (var i = userWord.length -1; i >= 0; i--) {
//   wordReverse+=userWord[i];   
// }
// console.log(wordReverse);

// if (userWord == wordReverse) {
//     console.log('la parola e palindroma');  
// } else {
//     console.log('la parola non e palindroma');   
// }

// SECONDA SOLUZIONE
// var wordReverse = "";
// for (var i = 0; i < word.length; i++) {
//     wordReverse = word[i] + wordReverse; 
// }

// console.log(wordreverse);


function reverse(userWord) {
    var wordReverse = "";
    for (var i = userWord.length -1; i >= 0; i--) {
        wordReverse+=userWord[i];   
    } 
    if (userWord == wordReverse) {
        return true;
    } else {
        return false;
    }
    return;
}