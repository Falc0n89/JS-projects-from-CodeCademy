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
 };
}
//not sure if this works yet. Getting undefined
function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

console.log(compareGuesses(1, 5, 4));
console.log(updateScore('human'));
console.log(generateTarget());

