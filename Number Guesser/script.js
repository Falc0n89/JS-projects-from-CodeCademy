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

const updateScore = (winner) => {
  if  (winner === 'human') {
    humanScore++
    } else {
      computerScore++
     } 
};

const advanceRound = () => {
   return currentRoundNumber ++ 
}

console.log(compareGuesses(1, 5, 4));
console.log(updateScore('human'));
console.log(generateTarget());



