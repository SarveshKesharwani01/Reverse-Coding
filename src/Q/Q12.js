export const Q12 = (val) => {
  let ans = "";
  for (let j = 0; j < 5; j++) {
    for (let i = j; i < val.length; i += 5) ans += val[i];
  }
  return ans;
};
