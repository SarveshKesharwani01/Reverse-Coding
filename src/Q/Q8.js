export const Q8 = (val) => {
  if (val > 9000) {
    return "INVALID INPUT";
  }
  const N = 1e5 + 5;
  const prime = new Array(N).fill(1);
  const prime2 = [];
  prime[0] = prime[1] = 0;
  for (let i = 2; i * i <= N; i++) {
    for (let j = i * i; j < N; j += i) {
      prime[j] = 0;
    }
  }
  for (let i = 0; i < N; i++) {
    if (prime[i]) prime2.push(i);
  }
  let sum = 0;
  for (let i = 0; i < val; i++) {
    sum += prime2[i];
  }
  return sum;
};

/*
const boolAnswer = CheckIsInteger(val);
      if (boolAnswer !== null) setAnswer(Q8(boolAnswer));
      else setAnswer(IP);
      */

/*
      setInput("A single line consists of an integer N");
      setOutput("Print a single integer");
      setConstraint("1 ≤ N ≤ 9000");
*/
