export const CheckIsAlphaNumeric = (val) => {
  val = val.trim();
  let s = "";
  let ok = 1;
  for (let i = 0; i < val.length; i++) {
    
    if (!((val[i] >= "a" && val[i] <= "z") || (val[i] >= "0" && val[i] <= "9"))) {
      ok = 0;
      break;
    } else {
      s = s + val[i];
    }
  }
  console.log(s);
  if (ok === 1) return s;
  else return null;
};
