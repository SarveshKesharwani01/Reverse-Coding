export const Q12 = (val) => {
  if (val.length > 1e5) return "INVALID INPUT";
  let ans = "";
  for (let j = 0; j < 5; j++) {
    for (let i = j; i < val.length; i += 5) ans += val[i];
  }
  return ans;
};

/*
const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q12(boolAnswer));
      else setAnswer(IP);
      */

/*
      setInput(
        "A single string S consisting of lowercase letter of English Alphabets."
      );
      setOutput("Print a single string");
      setConstraint("1 ≤ |S| ≤ 1e5");
*/
