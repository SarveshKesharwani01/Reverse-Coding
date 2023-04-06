import { CheckIsInteger } from "./CheckIsInteger";

export const CheckIsIntegerArray = (val) => {
  val = val.trim();
  val = val.split(" ");
  //   console.log(val);
  const val1 = [];
  for (let i = 0; i < val.length; i++) {
    if (val[i] !== "") {
      val1.push(val[i]);
    }
  }
  val = val1;
  //   console.log(val);
  let n = val[0];
  if (CheckIsInteger(n) !== null) {
    // console.log(val);
    if (val.length !== Number(n) + 1) {
      return null;
    } else {
      for (let i = 1; i < val.length; i++) {
        if (CheckIsInteger(val[i]) === null) {
          return null;
        }
      }
      for (let i = 0; i < val.length; i++) val[i] = Number(val[i]);
      return val;
    }
  } else {
    return null;
  }
};
