export const Q21 = (val) => {
  if (val.length > 1e5) return "INVALID INPUT";
  let answer = "";
  for (let i = 0; i < val.length; i++) {
    answer +=
      (val.charCodeAt(i) - 48) | (val.charCodeAt(val.length - 1 - i) - 48);
    //   console.log(val.charCodeAt(i));
  }
  return answer;
};

/*
 const boolAnswer = CheckIsBinaryString(val);
 if (boolAnswer !== null) setAnswer(Q21(boolAnswer));
 else setAnswer(IP);
*/
/*
setInput(
        "A single string S consisting of '0's and '1's"
      );
      setOutput("Print a single string consisting '0's and '1's");
      setConstraint("1 ≤ |S| ≤ 1e5");
*/
