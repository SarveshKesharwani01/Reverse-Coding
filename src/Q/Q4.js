export const Q4 = (val) => {
  // Check if input array is a mountain with one peak. Like, 1 2 1->yes, 1 2 2 ->no
  if (val[0] < 3) {
    return "NO";
  }
  let peak = 10;
  for (let i = 2; i < val.length - 1; i++) {
    let ok = 1;
    let curr_val = val[i];
    for (let j = i - 1; j > 0; j--) {
      if (val[j] < curr_val) {
        curr_val = val[j];
      } else {
        ok = 0;
      }
    }
    curr_val = val[i];
    for (let j = i + 1; j < val.length; j++) {
      if (curr_val > val[j]) {
        curr_val = val[j];
      } else {
        ok = 0;
      }
    }
    if (ok === 1) {
      peak = 1;
      break;
    }
  }

  if (peak === 1) return "YES";
  else return "NO";
};

/* const boolAnswer = CheckIsIntegerArray(val);
      if (boolAnswer !== null) setAnswer(Q4(boolAnswer));
      else setAnswer(IP);
*/

/*
setConstraint(
        "Enter an integer 'N' which is size of the array and an non-negative integer array 'A' \n 1<=N<=1e5 \n 0<=A[i]<=1e9"
      );
      */
