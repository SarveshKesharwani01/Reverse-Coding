export const Q14 = (val) => {
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
setConstraint(
        "Enter a string of digits 'S' \n 1<=|S|<=1e5 \n '0'<=S[i]<='9'"
      );
*/