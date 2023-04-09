export const Q6 = (val) => {
  // Given two numbers n and m, toggle the bits of n and then print the value n OR m.
  if (val[0] > 1e9 || val[1] > 1e9) return "INVALID INPUT";
  let num = "";
  if (val[0] === 0) {
    return val[1];
  }
  for (let i = 0; i < val[0].toString(2).length; i++) {
    if (val[0].toString(2)[i] === "0") num += "1";
    else num += "0";
  }
  val[0] = parseInt(num, 2);
  return val[0] | val[1];
};
/*
const boolAnswer = CheckIsTwoInteger(val);
      if (boolAnswer !== null) setAnswer(Q6(boolAnswer));
      else setAnswer(IP);
*/

/*
      setInput("A single line consists of 2 integers A and B ");
      setOutput("Print a single integer");
      setConstraint("0 ≤ A, B ≤ 1e9");
*/
