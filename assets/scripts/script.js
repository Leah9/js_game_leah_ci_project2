// Create an array of easy level words
const dictEasy = ['CAT', 'DOG', 'BALL', 'FOOT', 'HAND', 'HEAD', 'RAT', 'BAG', 'SAD', 'PAT', 'LEG', 'ARM', 'CAR', 'BUS', 'TRAIN'];
// Create an array to contain our alphabet
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

let difficulty = 'Easy'; // Difficulty level
let lettersTried = []; // Array of letters that have been tried
let attemptsRemaining = 15; // Guesses remaining
let lettersCorrect = 0; // How manu letters have been guessed correctly
let wordDisplay = []; // Array for the guessed letters progress display
let word = [];

function resetGameVariables() {
    lettersTried = []; // Array of letters that have been tried
    attemptsRemaining = 15; // Guesses remaining
    lettersCorrect = 0; // How manu letters have been guessed correctly
    wordDisplay = [];
}

function chooseWord() {
    // Choose a random word from the dictEasy array
    word = dictEasy[Math.floor(Math.random() * dictEasy.length)];
    console.log(word); // Check that a word is chosen
    // Create correct number of underscores in display
    for (let i = 0; i < word.length; i++) {
        wordDisplay.push('_')
    }
}

function updateWordDisplay() { // Updates the on screen display with the guessed letters
    $('#word-display').text('');
    for (letter in wordDisplay) {
        $('#word-display').append(wordDisplay[letter]);
    }
    lettersCorrect++;
}

function checkLetterAgainstWord(guessedLetter) {
    for (letter in word) {
        // Check if the letter is in the word
        if (word[letter] == guessedLetter) {
            console.log('CORRECT')
            $('#' + guessedLetter).addClass('green');
            wordDisplay[letter] = guessedLetter;
            updateWordDisplay();
        } else {
            $('#' + guessedLetter).addClass('red');
        }
    }
    lettersTried.push(this.id);
    attemptsRemaining--;
    $('#guesses-remaining').text("Attempts remaining = " + attemptsRemaining);
    if (lettersCorrect === word.length) {
        alert("Well done!")
    } else if (attemptsRemaining === 0) {
        alert("Game over");
    }
}

chooseWord();
console.log(wordDisplay);
$('#word-display').text(wordDisplay); // Update display
$('#guesses-remaining').text("Attempts remaining = " + attemptsRemaining);
// Create on screen keyboard
for (let i = 0; i < alphabet.length; i++) {
    $('#keyboard').append(`<div id="${alphabet[i]}" class="keyboard">${alphabet[i]}</div>`);
}


// Called when the on screen keyboard is pressed
$('.keyboard').click(function () {
    checkLetterAgainstWord(this.id);
});

