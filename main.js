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

// It's where we'll do all the comparisons for matches
function checkLetter(Letter) {

    //This boolean will be toggled based on whether or not a user letter is found in the word
    var letterInWord = false
    
    // check if the letter exists inside the array at all
    for (var i = 0; i < numBlanks; i++) {

        if (chosenWord[i] == letter){

            //If the letter exists then toggle this boolean to be true. This will be used in the next step
            letterInWord = true
            
        }

    }

    //If the letter exists somewhere in the word, then figure out exactly where
    if (letterInWord) {

        //Loop through the word
        for (var j = 0; j < numBlanks; j++) {

            //Populate the blanksAndSuccesses with every instance of the letter
            if (chosenWord[j] == letter) {

                //Here we set the specific space in blanks and letter equal to the letter when it takes 
                blankAndSuccesses[j] = letter;
            }
            
        }

        //Logging for testing
        console.log(blankAndSuccesses)
    }

    //If the letter doesn't exist at all....
else {

    //..then we add the letter to the list of wrong letters, and we subtract one of the guesses
    wrongGusses.push(letter);
    numGuesses--;

    }
}

//Here we will have all of the code that need to be run after each guess is made
function roundComplete() {

    // First, log an initial status update to the console telling us how many wins, losses, and guesses are logged
    console.log(`WinCount: ${winCounter} | LossCount: ${lossCounter} | NumGuesses: ${numGuesses}`);

    //Update the HTML to reflect the new number of guesses. Also update the correct guesses
    document.getElementById("guesses-left").innerHTML = numGuesses;

    //This will print the array of guesses and blanks onto the page
    document.getElementById("word-blanks").innerHTML = blankAndSuccesses.join(" ");

    //This will print the wrong guesses onto the page 
    document.getElementById("wrong-guesses").innerHTML = wrongGusses.join(" ");

    //If we have gotten all the letters to match the solution...
    if(letterInChosenWord.toString() === blankAndSuccesses.toString()) {

        //...add to the win counter and give user an alert 
        winCounter++;
        alert("You win!");

        //Update the win counter in the HTML and restart the game 
        document.getElementById("win-counter").innerHTML = winCounter;
        startGame();
    }

    //If we run out of guesses...
    else if (numGuesses === 0) {

        //Add the the loss counter
        lossCounter++;

        //Give the user an alert
        alert("You Lose");

        //Update the loss counter in the HTML 
        document.getElementById("loss-counter").innerHTML = lossCounter;

        //Restart the game 
        startGame();
    }

    
} 







