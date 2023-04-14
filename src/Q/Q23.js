export const Q23 = (val) => {
  const [a, b] = val;
  if (a > 1e9 || b > 1e9) return "INVALILD INPUT";
  const c = a * b;
  return c.toString().length;
};

/*
setInput("A single line consisting of two space-separated integers A and B");
setOutput("Print a single integer");
setConstraint("1 ≤ A, B ≤ 1e9");
*/

/*
const boolAnswer = CheckIsTwoInteger(val);
if (boolAnswer !== null) setAnswer(Q23(boolAnswer));
else setAnswer(IP);
*/
