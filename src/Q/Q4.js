export const Q4 = (val) => {
  // Check if input array is a mountain with one peak. Like, 1 2 1->yes, 1 2 2 ->no
  if (val[0] < 3) {
    return "INVALID INPUT";
  }
  let peak = 0;
  for (let i = 2; i < val.length - 1; i++) {
    if (val[i] > val[i - 1] && val[i] > val[i + 1]) peak++;
  }
  if (peak === 1) return "YES";
  else return "NO";
};
