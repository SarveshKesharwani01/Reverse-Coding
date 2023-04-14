export const Q4 = (val) => {
  // Check if input array is a mountain with one peak. Like, 1 2 1->yes, 1 2 2 ->no
  if (val[0] > 100000) return "INVALID INPUT";
  for (let i = 0; i < val.length; i++) {
    if (val[i] > 1e9) return "INVALID INPUT";
  }
  if (val[0] < 3) {
    return "NO";
  }
  let i1 = -1,
    j1 = -1;
  for (let i = 2; i < val.length; i++) {
    if (val[i] < val[i - 1]) {
      i1 = i - 1;
      break;
    }
  }
  for (let i = val.length - 1; i >= 2; i--) {
    if (val[i] > val[i - 1]) {
      j1 = i;
      break;
    }
  }
  if (i1 === j1) {
    return "YES";
  } else {
    return "NO";
  }
};

/* const boolAnswer = CheckIsIntegerArray(val);
      if (boolAnswer !== null) setAnswer(Q4(boolAnswer));
      else setAnswer(IP);
*/

/*
setInput(
        "A single line containing n+1 space-separated integers, first integer will be size of the array A followed by array A of length n. "
      );
setOutput("Print 'YES' OR 'NO'");
setConstraint("1 ≤ n ≤ 1e5 \n 0 ≤ A[i] ≤ 1e9, for all i ");
*/
