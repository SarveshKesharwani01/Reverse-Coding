export const Q13 = (val) => {
  val.sort((a, b) => {
    return a - b;
  });
  //   console.log(val);
  return val[0] + val[2] - val[1];
};

/*
const boolAnswer = CheckIsThreeInteger(val);
      if (boolAnswer !== null) setAnswer(Q13(boolAnswer));
      else setAnswer(IP);
      */
/*
setConstraint(
        "Enter three non-negative integers 'A', 'B', 'C' \n 0<=A,B,C<=1e9"
      );
*/