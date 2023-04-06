import { CheckIsInteger } from "./CheckIsInteger";
import { CheckIsString } from "./CheckIsString";

export const CheckIsStringArray = (val) => {
  val = val.trim();
  val = val.split(" ");
  const val1 = [];
  for (let i = 0; i < val.length; i++) {
    if (val[i] !== "") {
      val1.push(val[i]);
    }
  }
  val = val1;
  let n = val[0]; 
  if (CheckIsInteger(n) !== null) {
    if (val.length !== Number(n)+1) {
      return null;
    } else {
      for (let i = 1; i < val.length; i++) {
        if (CheckIsString(val[i]) === null) {
          return null;
        }
      }
      return val;
    }
  } else {
    return null;
  }
};
