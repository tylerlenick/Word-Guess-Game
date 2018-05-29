// Declare global variables.

var numWins = 0;
var numGuess = 12;

// Declare arrays

var lettersGuessed = [];
var words = ['cat', 'dog', 'fish'];

//Choose word from array randomly

var randomNum = Math.floor(Math.random() * words.length);
var randomWord = words[randomNum];
var underScore = [];

var selectedWord = randomWord.split("");

console.log(selectedWord);

//Function used to determine length of word

function wordLength() {
    
    for (var i = 0; i < randomWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
}


//Event handler on key press.

document.onkeyup = function(event) {

    var letter = event.key.toLowerCase();
    
    // console.log(randomWord);
    // console.log(letter.indexOf(randomWord));
    //if letter = indexof word selected, show that letter as guessed correctly

    if (letter.indexOf(selectedWord) > -1) {
        console.log(true);
    } else {
        console.log(false);
    }

    //else subtract 1 from numGuess, add letter to letters guessed array.
}




//If numGuess = 0, reset game

//If all letters guessed correctly reset game, + 1 numWins. 