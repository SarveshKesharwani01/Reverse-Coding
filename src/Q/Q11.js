export const Q11 = (val) => {
  if (val.length > 1e5) return "INVALID INPUT";
  let alpha = "abcdefghijklmnopqrstquvxyz";
  let ans = "";
  for (let i = 0; i < val.length; i++) {
    const idx = val.charCodeAt(i) - 97;
    // console.log(idx);
    if (idx % 2 === 0) {
      ans += alpha[(idx + 25) % 26];
    } else {
      ans += alpha[(idx + 1) % 26];
    }
  }
  return ans;
};

/*
const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q11(boolAnswer));
      else setAnswer(IP);
      */
/*
      setInput(
        "A single string S consisting of lowercase letter of English Alphabets."
      );
      setOutput("Print a single integer");
      setConstraint("1 ≤ |S| ≤ 1e5");
*/
