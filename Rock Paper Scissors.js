const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
    }
  }
  
  function getComputerChoice() {
    switch (Math.floor(Math.random()*3)) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'scissors';
        break;
      case 2:
        return 'paper';
        break;
        };
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'bomb') {
        return 'You won, you cheater'
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    let computerChoice = getComputerChoice();
    console.log('You threw:' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
  };
  
  
  
  playGame();