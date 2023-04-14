export const Q19 = (val) => {
  if (val[0] < 2) return "INVALID INPUT";
  if (val[0] > 1e5) return "INVALID INPUT";
  for (let i = 0; i < val.length; i++) {
    if (val[i] > 1e9) return "INVALID INPUT";
  }
  const diff = [];
  for (let i = 2; i < val.length; i++) {
    diff.push(Math.abs(val[i] - val[i - 1]));
  }
  let answer = "";
  for (let i = 0; i < diff.length; i++) {
    answer += String.fromCharCode(97 + (diff[i] % 26));
  }
  return answer;
};

/* 
const boolAnswer = CheckIsIntegerArray(val);
if(boolAnswer !== null)setAnswer(Q19(boolAnswer)); 
else setAnswer(IP); 
*/

/*
      setInput(
        "A single line containing n+1 integers, first integer will be size of the array A followed by array A of length n. "
      );
      setOutput("Print a single string consisting of lowercase letter of English Alphabets.");
      setConstraint("1 ≤ n ≤ 1e5 \n 0 ≤ A[i] ≤ 1e9, for all i ");
*/
