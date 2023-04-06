export const Q4 = (val) => {
  // Check if input array is a mountain with one peak. Like, 1 2 1->yes, 1 2 2 ->no
  if (val[0] < 3) {
    return "INVALID INPUT";
  }
  let peak = 1;
  let idx = -1;
  for (let i = 1; i < val.length - 1; i++) {
    if (val[i] < val[i - 1]) {
      idx = i;
      break;
    }
  }
  for (let i = idx; i < val.length; i++) {
    if (val[i] > val[i - 1]) peak = 10;
  }
  if (peak === 1) return "YES";
  else return "NO";
};
