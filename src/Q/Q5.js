export const Q5 = (val) => {
  // Given an array of even length with minimum count of 4, xor consecutive pair, and add them. Like 1 2 3 4-> 1^2+3^4=3+7=10
  const IP = "INVALID INPUT";
  if (val[0] % 2) return IP;
  if (val[0] < 4) return IP;
  let sum = 0;
  for (let i = 0; i < val.length; i += 2) {
    sum += val[i] ^ val[i + 1];
  }
  return sum;
};
