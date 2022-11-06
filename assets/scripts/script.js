// Create an array of easy level words
const dictEasy = ['CAT', 'DOG', 'BALL', 'CAR', 'BUS', 'TRAIN'];
const dictMedium = ['BRIDGE', 'VIADUCT', 'MOTORWAY', 'LANDSCAPE', 'PORTRAIT', 'JACKET', 'PICTURE'];
const dictHard = ['BIOSPHERE', 'ADVENTURE', 'ENVIRONMENT', 'CONTINENT'];
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
    switch (difficulty) {
        case 'easy':
            word = dictEasy[Math.floor(Math.random() * dictEasy.length)];
            attemptsRemaining = 20;
            break;
        case 'medium':
            word = dictMedium[Math.floor(Math.random() * dictEasy.length)];
            attemptsRemaining = 15;
            break;
        case 'hard':
            word = dictHard[Math.floor(Math.random() * dictEasy.length)];
            attemptsRemaining = 15;
            break;
    }
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
            // Colour the keyboard green
            $('#' + guessedLetter).addClass('green');
            wordDisplay[letter] = guessedLetter;
            updateWordDisplay();
        } else {
            // Colour the keyboard red
            $('#' + guessedLetter).addClass('red');
        }
    }
    lettersTried.push(this.id);
    attemptsRemaining--;
    $('#guesses-remaining').text("Attempts remaining = " + attemptsRemaining);
    if (lettersCorrect === word.length) {
        // alert("Well done!")
        $('#main-game').hide();
        $('#conclusion').show();
        $('#win-lose').text('Congratulations you win !');
    } else if (attemptsRemaining === 0) {
        // alert("Game over");
        $('#main-game').hide();
        $('#conclusion').show();
        $('#win-lose').text('Sorry you lose better luck next time!');
    }
}

console.log(wordDisplay);
// Hide the divs that are not being used
$('#main-game').hide();
$('#conclusion').hide();
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

// Called when the on screen keyboard is pressed
$('.button').click(function () {
    difficulty = (this.id);
    console.log(difficulty);
    chooseWord();
    $('#select-difficulty').hide(1000);
    $('#conclusion').hide();
    $('#main-game').show();
});
