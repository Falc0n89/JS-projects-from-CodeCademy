//Basic program to calculate when registered runners will race and what their number will be based on age and time of registration

let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

let runnerAge = 18;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
  }

if (runnerAge > 18 && registeredEarly) {
  console.log(`Your race number is ${raceNumber} and you will be racing at 9:30am!`);
} else if (runnerAge >18 && !registeredEarly) {
  console.log(`Your number is ${raceNumber} and you will race at 11:00am!`);
} else if (runnerAge < 18) {
  console.log(`Your number is ${raceNumber} and you will race at 12:30pm!`);
} else {
  console.log(`See the registration desk`);
}
