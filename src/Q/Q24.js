export const Q24 = (val) => {
  const arr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (val[0] > 1e5) return "INVALID INPUT";
  if (val[0] === 0) return "INVALID INPUT";
  for (let i = 1; i < val.length; i++) {
    if (val[i] > 1e9) return "INVALID INPUT";
  }

  let answer = "";
  for (let i = 1; i < val.length; i++) {
    answer += arr[val[i] % 62];
  }
  return answer;
};

/* const boolAnswer = CheckIsIntegerArray(val);
      if (boolAnswer !== null) setAnswer(Q24(boolAnswer));
      else setAnswer(IP);
*/

/*
setInput(
        "A single line containing n+1 space-separated integers, first integer will be size of the array A followed by array A of length n. "
      );
setOutput("Print a single string containing alphanumeric characters.");
setConstraint("1 ≤ n ≤ 1e5 \n 0 ≤ A[i] ≤ 1e9, for all i ");
*/
