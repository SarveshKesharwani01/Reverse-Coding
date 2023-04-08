export const Q14 = (val) => {
  if (val.length > 1e5) return "INVALID INPUT";
  let sum = 100000000000;
  while (sum >= 10) {
    let cnt = 0;
    for (let i = 0; i < val.length; i++) {
      cnt += val.charCodeAt(i) - 48;
    }
    val = cnt.toString();
    sum = cnt;
  }
  return sum;
};
/*
const boolAnswer = CheckIsNumberString(val);
      if (boolAnswer !== null) setAnswer(Q14(boolAnswer));
      else setAnswer(IP);
      */

/*
      setInput("A string S consisting of digits '0' to '9' ");
      setOutput("Print a single integer");
      setConstraint("1 ≤ |S| ≤ 1e5");
*/
