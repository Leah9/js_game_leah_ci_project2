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

// Create correct number of underscores in display
for (let i = 0; i < word.length; i++) {
    wordDisplay.push('_')
}
console.log(wordDisplay);

$('#word-display').text(wordDisplay); // Update display

// Create on screen keyboard
for (let i = 0; i < alphabet.length; i++) {
    $('#keyboard').append(`<div id="${alphabet[i]}" class="keyboard">${alphabet[i]}</div>`);
}

// Called when the on screen keyboard is pressed
$('.keyboard').click(function () {
    console.log(this.id);
    for (letter in word) {
        // Check if the letter is in the word
        if (word[letter] == this.id) {
            console.log('CORRECT')
            $(this).addClass('green');
        } else {
            $(this).addClass('red');
        }
    }
    lettersTried.push(this.id)
    console.log(lettersTried);
});

