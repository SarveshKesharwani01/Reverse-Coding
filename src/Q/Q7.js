export const Q7 = (val) => {
  let sum = 0;
  if (val.length > 100000) return "INVALID INPUT";
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
      setInput("A single string S consisting of lowercase letter of English Alphabets.");
      setOutput("Print a single integer");
      setConstraint("0 ≤ |S| ≤ 1e5");
*/
