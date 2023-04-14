export const Q5 = (val) => {
  // Given an array of even length with minimum count of 4, xor consecutive pair, and add them. Like 1 2 3 4-> 1^2+3^4=3+7=10
  const IP = "INVALID INPUT";
  if(val[0] > 1e5)return IP; 
  for(let i=0;i<val.length;i++){
    if(val[i] > 1e9)return IP;
  }
  if (val[0] % 2) return IP;
  if (val[0] < 4) return IP;
  let sum = 0;
  for (let i = 1; i < val.length; i += 2) {
    sum += val[i] ^ val[i + 1];
  }
  return sum;
};

/*
const boolAnswer = CheckIsIntegerArray(val);
      if (boolAnswer !== null) setAnswer(Q5(boolAnswer));
      else setAnswer(IP);
      */

/*
setInput(
        "A single line containing n+1 integers, first integer will be size of the array A followed by array A of length n. "
      );
setOutput("Print a single integer");
setConstraint("4 ≤ n ≤ 1e5 \n n % 2 == 0 \n0 ≤ A[i] ≤ 1e9, for all i ");
*/