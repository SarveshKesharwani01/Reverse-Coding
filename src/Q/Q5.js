export const Q5 = (val) => {
  // Given an array of even length with minimum count of 4, xor consecutive pair, and add them. Like 1 2 3 4-> 1^2+3^4=3+7=10
  const IP = "INVALID INPUT";
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
setConstraint(
        "Enter an non-negative even integer array 'A' \n 4<=|A|<=1e6 \n |A| % 2 = 0 \n 0<=A[i]<=1e9 "
      );
      */