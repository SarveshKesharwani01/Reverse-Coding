export const Q11 = (val) => {
  let alpha = "abcdefghijklmnopqrstquvxyz";
  let ans = "";
  for (let i = 0; i < val.length; i++) {
    const idx = val.charCodeAt(i) - 97;
    // console.log(idx);
    if (idx % 2 === 0) {
      ans += alpha[(idx + 25) % 26];
    } else {
      ans += alpha[(idx + 1) % 26];
    }
  }
  return ans;
};

/*
const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q11(boolAnswer));
      else setAnswer(IP);
      */
/*
setConstraint("Enter a string 'S' \n 0<=|S|<=1e6");
*/