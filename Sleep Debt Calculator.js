//This can also be done with an if/else statement for each day. e.g. if (day === 'monday'){ return 8;} else if...
const getSleepHours = day => {
    switch(day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 8;
        break;
      case 'wednesday':
        return 9;
        break;
      case 'thursday':
        return 9;
        break;
      case 'friday':
        return 7;
        break;
      case 'saturday':
        return 10;
        break;
      case 'sunday':
        return 9;
        break;
     }    
    };
  //Adding the sleep hours together! Note it is adding the getSleepHours function with each day perameter in place. Note the lack of curly braces. This is an "implicit return"
  const getActualSleepHours = () => 
      getSleepHours('monday') +
      getSleepHours('tuesday') +
      getSleepHours('wednesday') +
      getSleepHours('thursday') +
      getSleepHours('friday') +
      getSleepHours('saturday') +
      getSleepHours('sunday')
  ;

  //What I want my sleep to be
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('Good job!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('Lazy bones!');
    }else {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hour(s) less sleep than you needed this week. Get some sleep!');
    }
  };

  //These are the tests
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  