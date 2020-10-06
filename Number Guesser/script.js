let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random()* 8 + 1);
}

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
 if (Math.abs(humanGuess - secretTarget) <= Math.abs(computerGuess - secretTarget)) {
   return true;
 } else if(Math.abs(humanGuess - secretTarget) > Math.abs(computerGuess - secretTarget)) {
   return false;
 }
}

console.log(compareGuesses(1, 2, 1));

console.log(generateTarget());
