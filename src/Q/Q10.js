export const Q10 = (val) => {
  if (val.length > 1e5) return "INVALID INPUT";
  let sum = val.charCodeAt(0) - 96;
  for (let i = 1; i < val.length; i++) {
    if (i % 2) {
      sum += val.charCodeAt(i) - 96;
    } else {
      sum -= val.charCodeAt(i) - 96;
    }
  }
  return sum;
};

/*
const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q10(boolAnswer));
      else setAnswer(IP);
      */

/*
      setInput(
        "A single string S consisting of lowercase letter of English Alphabets."
      );
      setOutput("Print a single integer");
      setConstraint("1 ≤ |S| ≤ 1e5");
      */
