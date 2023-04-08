export const Q7 = (val) => {
  let sum = 0;
  for (let i = 0; i < val.length; i++) {
    if (i % 2 === 0) {
      sum += (val.charCodeAt(i) - 97) % 10;
    } else {
      sum -= (val.charCodeAt(i) - 97) % 10;
    }
  }
  return sum;
};

/*
const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q7(boolAnswer));
      else setAnswer(IP);
      */

/*
setConstraint("Enter a string 'S' \n 0<=|S|<=1e6");
*/