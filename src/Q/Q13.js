export const Q13 = (val) => {
  for (let i = 0; i < val.length; i++) {
    if (val[i] > 1e9) return "INVALID INPUT";
  }
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
      setInput("A single line consists of three space-separated integers A,B,C");
      setOutput("Print a single integer");
      setConstraint("0 ≤ A, B, C ≤ 1e9");
*/
