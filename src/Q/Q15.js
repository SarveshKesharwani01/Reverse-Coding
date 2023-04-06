export const Q15 = (val) => {
  const num1 = val[0].toString(2),
    num2 = val[1].toString(2);
  let cnt1 = 0,
    cnt2 = 0;
  for (let i = 0; i < num1.length; i++) if (num1[i] === "0") cnt1++;
  for (let i = 0; i < num2.length; i++) if (num2[i] === "0") cnt2++;
  if (cnt1 === cnt2) {
    return "YES";
  } else {
    return "NO";
  }
};
