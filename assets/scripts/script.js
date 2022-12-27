// Create an array of easy level words
const dictEasy = ['CAT', 'DOG', 'BALL', 'CAR', 'BUS', 'TRAIN'];
const dictMedium = ['BRIDGE', 'VIADUCT', 'MOTORWAY', 'LANDSCAPE', 'PORTRAIT', 'JACKET', 'PICTURE'];
const dictHard = ['BIOSPHERE', 'ADVENTURE', 'ENVIRONMENT', 'CONTINENT'];
// Create an array to contain our alphabet
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

let lettersTried = []; // Array of letters that have been tried
let attemptsRemaining = 15; // Guesses remaining
let lettersCorrect = 0; // How manu letters have been guessed correctly
let wordDisplay = []; // Array for the guessed letters progress display
let word = [];

function resetGameVariables() {
    lettersTried = []; // Array of letters that have been tried
    attemptsRemaining = 15; // Guesses remaining
    lettersCorrect = 0; // How manu letters have been guessed correctly
    lettersTried = [];
    for (let letter in alphabet) {
        $('#' + alphabet[letter]).removeClass('green');
        $('#' + alphabet[letter]).removeClass('red');
        console.log(letter);
    }
    $('#bomb').css("background-image", "url(assets/images/Bunny-bomb.png)");
}

function chooseWord(difficulty) {
    // Choose a random word from the dictEasy array
    wordDisplay = [];
    switch (difficulty) {
        case 'easy':
            word = dictEasy[Math.floor(Math.random() * dictEasy.length)];
            attemptsRemaining = 20;
            break;
        case 'medium':
            word = dictMedium[Math.floor(Math.random() * dictMedium.length)];
            attemptsRemaining = 15;
            break;
        case 'hard':
            word = dictHard[Math.floor(Math.random() * dictHard.length)];
            attemptsRemaining = 15;
            break;
    }
    console.log(word);
    console.log(word.length); // Check that a word is chosen
    // Create correct number of underscores in display
    for (i = 0; i < word.length; i++) {
        wordDisplay.push('_')
    }
}

// Updates the on screen display with the guessed letters
function updateWordDisplay() {
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
    lettersTried.push(guessedLetter);
    console.log(lettersTried);
    console.log('word length = ' + word.length);
    console.log('letters correct = ' + lettersCorrect);
    attemptsRemaining--;
    $('#guesses-remaining').text('Attempts remaining = ' + attemptsRemaining);
    if (lettersCorrect === word.length + 1) {
        // alert('Well done!')
        //$('#main-game').hide();
        $('#keyboard').hide();
        $('#conclusion').show();
        $('#select-difficulty').show(10);
        $('#win-lose').text('Congratulations you win !');
        $('#win-lose-message').text('To play again select a difficulty');
        
    } else if (attemptsRemaining === 0) {
        // alert('Game over');
        //$('#main-game').hide();
        $('#keyboard').hide();
        $('#conclusion').show();
        $('#select-difficulty').show(10);
        $('#win-lose').text('Sorry you lose better luck next time!');
        $('#win-lose-message').text('To play again select a difficulty');
        $('#bomb').css("background-image", "url(assets/images/cross.png)");
    }
}

console.log(wordDisplay);
// Hide the divs that are not being used
$('#main-game').show();
$('#conclusion').hide();
$('#word-display').text(wordDisplay); // Update display
$('#guesses-remaining').text('Attempts remaining = ' + attemptsRemaining);
$('#word-display').hide();
$('#guesses-remaining').hide();
$('#keyboard').hide();
$('#bomb').hide();

// Create on screen keyboard
for (let i = 0; i < alphabet.length; i++) {
    $('#keyboard').append(`<div id='${alphabet[i]}' class='keyboard'>${alphabet[i]}</div>`);
}

// Called when the on screen keyboard is pressed
$('.keyboard').click(function () {
    checkLetterAgainstWord(this.id);
});

// Called when the difficulty is pressed
$('.button').click(function () {
    resetGameVariables();
    chooseWord(this.id); // Choose new word this.id is difficulty
    updateWordDisplay();
    $('#select-difficulty').hide(10);
    $('#conclusion').hide(10);
    $('#main-game').show();
    $('#word-display').show();
    $('#guesses-remaining').show();
    $('#keyboard').show();
    $('#title-text').hide();
    $('#bomb').show();
});
