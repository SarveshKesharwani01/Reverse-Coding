export const Q7 = (val) => {
  let sum = 0;
  for (let i = 0; i < val.length; i++) {
    if (i % 2 === 0) {
      sum += (val.charCodeAt(i) - 97) % 10;
    } else {
      sum -= (val.charCodeAt(i) - 97) % 10;
    }
  }
  return sum;
};
