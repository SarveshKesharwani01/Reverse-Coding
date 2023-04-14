export const Q9 = (val) => {
  if (val[0] < 2) return "INVALID INPUT";
  if (val[0] > 1e5) return "INVALID INPUT";
  for (let i = 0; i < val.length; i++) {
    if (val[i] > 1e9) return "INVALID INPUT";
  }
  function gcd(a, b) {
    if (a === 0) return b;
    else if (b === 0) return a;

    if (a > b) return gcd(a % b, b);
    else return gcd(a, b % a);
  }
  let sum = 0;
  for (let i = 1; i < val.length; i++) {
    sum = gcd(sum, val[i]);
  }
  if (sum % 2 === 0) {
    return sum - 1;
  } else {
    return sum + 1;
  }
};

/*
const boolAnswer = CheckIsIntegerArray(val);
      if (boolAnswer !== null) setAnswer(Q9(boolAnswer));
      else setAnswer(IP);
      */

/*
      setInput(
        "A single line containing n+1 space-separated integers, first integer will be size of the array A followed by array A of length n. "
      );
      setOutput("Print a single integer");
      setConstraint("2 ≤ n ≤ 1e5 \n0 ≤ A[i] ≤ 1e9, for all i");
*/
