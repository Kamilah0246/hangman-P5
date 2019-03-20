// GLOBAL VARABLES (accessible ny all functions)
// ---------------------------------------------
// Array of word options (all lowercase)
var wordList = ["Spiderman", "Captain Marvel", "Black Panther"]

// Solution will be held here 
var chosenWord = "";

// This wil break the solution into individual letters to be stored in an array
var letterIn0Chosenword = [];

// This will be the number of blanks we show based on the solution
var numBlanks = 0;

// Holds a mix of blank and solvesd letters (ex: a_ple)
var blankAndSuccesses = [];


// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


// FUNCTIONS
//--------------------

// Notes: The startGame() function is not run here. It's just being made for future use.
function startGame(){
    //Resets the guesses to specified amount 
    numGuesses = 9;


    // Solution is chosen randomly from wordList
    chosenWord = wordList[Math.floor(Math.random()*wordList.length)]; 

    // The word is broken into individual letters
    letterInChosenWord = chosenWord.split("");

    // We count the number of letters in the word
    numBlanks = letterIn0Chosenword.length;

    // We print the solution in console (for testing)
    console.log(chosenWord);

    // CRITICAL LINE: Here we reset the guess and success array at each round
    blankAndSuccesses = [];
    // CRITICAL LINE: Here we reset the wrong guesses from the previous round
    wrongGusses = [];

    //Fill up the blankAndSuccesses list with the appropriate number of balnks which is based on the number of letters in the solution
    for (var i = 0; i < numBlanks; i++){
        blankAndSuccesses.push("_");
    }

    // Print the initial blanks in the console
    console.log(blankAndSuccesses);

    // Reprints the guessesLeft to 9
    document.getElementById("guesses-left").innerHTML = numGuesses;

    // It prints the blanks in the beginning of each round in the Html
    document.getElementById("word-blank").innerHTML = blankAndSuccesses.join(" ");
}
