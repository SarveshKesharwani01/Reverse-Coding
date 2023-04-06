export const Q10 = (val) => {
  let sum = val.charCodeAt(0)-96;
  for (let i = 1; i < val.length; i++) {
    if (i % 2) {
      sum += val.charCodeAt(i)-96;
    } else {
      sum -= val.charCodeAt(i)-96;
    }
  }
  return sum;
};
