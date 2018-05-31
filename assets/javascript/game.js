// Declare global variables.

var numWins = 0;
var numGuess = 12;
var gameOn = false;
var randomWord = "";

// Declare arrays

var words = ['cat', 'dog', 'fish'];
var correctLetter = [];
var wrongLetter = [];
var selectedWord = [];



//Function used when user clicks start the game button to reset all needed variables.
function newGame() {
 
    gameOn = true;
    numGuess = 12;
    correctLetter = [];
    wrongLetter = [];
    randomWord = words[Math.floor(Math.random() * words.length)];
    selectedWord = randomWord.split("");
    document.getElementById("word-area").innerHTML = correctLetter;
    for (var i = 0; i < randomWord.length; i++) {
        correctLetter.push("_");
    }
    console.log("New game");
    console.log(randomWord);
    
}

//Function used to determine if all letters in the selected word have been changed to "" meaning the user wins.
function testWin(win) {
    return win === "";
}


//Event handler on key press.
document.onkeyup = function(event) {

    //If the game is running, run through the event.
    if (gameOn) {
        
        var letter = event.key.toLowerCase();
        console.log(letter.charCodeAt(0))
        if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {

            //if letter = indexof word selected, show that letter as guessed correctly
            if (selectedWord.indexOf(letter) > -1) {
                
                correctLetter[selectedWord.indexOf(letter)] = letter;
                selectedWord[selectedWord.indexOf(letter)] = "";
                
                
            } else if (wrongLetter.indexOf(letter) === -1) {
                //add to the wrongLetter array and decrement numGuess
                wrongLetter.push(letter);
                numGuess--;
                console.log(numGuess);
            }


            //Check if the selectedWord array has been emptied, meaning the user has guessed everything correctly.
            if (selectedWord.every(testWin)) {
                numWins++;
                console.log("you win!!");
                console.log(numWins)
                newGame();
                
            
            //If numGuess = 0, reset game
            } else if (numGuess === 0) {
                newGame();
                console.log("You lose!!!!!!");
            }
                
        } else {
            console.log("Enter valid key");
        }

    }
    console.log(correctLetter);
    console.log(wrongLetter);

}
      
    






