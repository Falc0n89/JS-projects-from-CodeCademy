let userName = 'Chad';

//Question the user asks
let userQuestion = 'Will I survive my stay at Camp Crystal Lake?';

//Generates a number for the eightballs answer
const randomNumber = Math.floor(Math.random() *8);

let eightBall = '';

userName ? console.log(`Hello, ${userName}`):
console.log('Hello!');

userQuestion ? console.log(`${userName} asked ${userQuestion}`):
console.log('Ask a question.');

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break; 
  case 1:
    eightBall = 't is decidedly so';
    break; 
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

//EightBalls answer
console.log(eightBall);
