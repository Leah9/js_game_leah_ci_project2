// Create an array of easy level words
let dictEasy = ['CAT', 'DOG', 'BALL', 'FOOT', 'HAND', 'HEAD', 'RAT', 'BAG', 'SAD', 'PAT', 'LEG', 'ARM', 'CAR', 'BUS', 'TRAIN'];

// Create an array to contain our alphabet
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

let difficulty = 'Easy'; // Difficulty level
let lettersTried = []; // Array of letters that have been tried
let attemptsRemaining = 15; // Guesses remaining
let lettersCorrect = 0; // How manu letters have been guessed correctly
let wordDisplay = []; // Array for the guessed letters progress display

// Choose a random word from the dictEasy array
let word = dictEasy[Math.floor(Math.random() * dictEasy.length)];
console.log(word); // Check that a word is chosen

// Updates the on screen display with the guessed letters
function updateWordDisplay() {
    $('#word-display').text('');
    for (letter in wordDisplay) {
        $('#word-display').append(wordDisplay[letter]);
    }
    lettersCorrect++;
}

// Create correct number of underscores in display
for (let i = 0; i < word.length; i++) {
    wordDisplay.push('_')
}
console.log(wordDisplay);

$('#word-display').text(wordDisplay); // Update display
$('#guesses-remaining').text("Attempts remaining = " + attemptsRemaining);

// Create on screen keyboard
for (let i = 0; i < alphabet.length; i++) {
    $('#keyboard').append(`<div id="${alphabet[i]}" class="keyboard">${alphabet[i]}</div>`);
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
        lettersTried.push(this.id);
        attemptsRemaining--;
        $('#guesses-remaining').text("Attempts remaining = " + attemptsRemaining);
        if (lettersCorrect === word.length) {
            alert("Well done!")
        } else if (attemptsRemaining === 0) {
            alert("Game over");
        }
    }

}

// Called when the on screen keyboard is pressed
$('.keyboard').click(function () {
    checkLetterAgainstWord(this.id);
});

