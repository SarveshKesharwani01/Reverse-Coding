export const Q4 = (val) => {
  // Check if input array is a mountain with one peak. Like, 1 2 1->yes, 1 2 2 ->no
  if (val[0] < 3) {
    return "INVALID INPUT";
  }
  let peak = 10;
  for (let i = 2; i < val.length - 1; i++) {
    let ok = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (val[j] >= val[j + 1]) ok = 0;
    }
    for (let j = i + 1; j < val.length; j++) {
      if (val[j - 1] <= val[j]) ok = 0;
    }
    if (ok === 1) {
      peak = 1;
      break;
    }
  }
  if (peak === 1) return "YES";
  else return "NO";
};
