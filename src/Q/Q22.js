export const Q22 = (val) => {
  let [a, b] = val;
  if (a > 1e6 || b > 1e6) return "INVALID INPUT";
  if (a < 1 || b < 1) return "INVALID INPUT";
  if (a % 2 === 0 && b % 2 === 0) {
    return a & b;
  } else if (a % 2 === 1 && b % 2 === 1) {
    return a ^ b;
  } else {
    return a | b;
  }
};

/*
      const boolAnswer = CheckIsTwoInteger(val);
      if (boolAnswer !== null) setAnswer(Q22(boolAnswer));
      else setAnswer(IP);
*/

/*
setInput("A single line consisting of two space-separated integers A and B")
setOutput("Print a single integer")
setConstraint("1 ≤ A, B ≤ 1e6")
*/
