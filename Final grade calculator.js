const finalGrade = (midterm, final, homework) => {

    //This figures out the average of the parameters
    let average = (midterm + final + homework) /3;

    //This checks to see if there are valid numbers in use
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
      return 'You have entered an invalid grade.'
    }

    //if else statements to check which grade each parameter gets
    if (average < 60){
      return 'F'
    } else if (average < 70) {
      return 'D'
    } else if (average < 80) {
      return 'C'
    } else if (average < 90) {
      return 'B'
    } else {
      return 'A'
    }
  };
  //This runs the test
  console.log(finalGrade(99, 92, 95));