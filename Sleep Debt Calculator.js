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
  
  const getActualSleepHours = () => 
      getSleepHours('monday') +
      getSleepHours('tuesday') +
      getSleepHours('wednesday') +
      getSleepHours('thursday') +
      getSleepHours('friday') +
      getSleepHours('saturday') +
      getSleepHours('sunday')
  ;
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  