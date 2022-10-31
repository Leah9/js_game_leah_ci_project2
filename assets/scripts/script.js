// Create an array of easy level words
let dictEasy = ['CAT', 'DOG', 'BALL', 'FOOT', 'HAND', 'HEAD', 'RAT', 'BAG', 'SAD', 'PAT', 'LEG', 'ARM', 'CAR', 'BUS', 'TRAIN'];

// Create an array to contain our alphabet
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

let difficulty = 'Easy'; // Difficulty level
let lettersTried = []; // Array of letters that have been tried
let attemptsRemaining = 15; // Guesses remaining
let lettersCorrect = 0; // How manu letters have been guessed correctly

// Choose a random word from the dictEasy array
let word = dictEasy[Math.floor(Math.random() * dictEasy.length)];
console.log(word); // Check that a word is chosen