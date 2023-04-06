import { CheckIsInteger } from "./CheckIsInteger";
export const CheckIsThreeInteger = (val) => {
  val = val.trim();
  val = val.split(" ");
  const val1 = [];
  for (let i = 0; i < val.length; i++) {
    if (val[i] !== "") {
      val1.push(val[i]);
    }
  }
  val = val1;
  if (val.length !== 3) {
    return null;
  }

  // console.log(val);
  //   console.log(val);
  let ok = 1;
  let num1 = val[0];
  let num2 = val[1];
  let num3 = val[2];
  let num = [];
  if (
    CheckIsInteger(num1) !== null &&
    CheckIsInteger(num2) !== null &&
    CheckIsInteger(num3) !== null
  ) {
    // console.log(num1, num2);
    num = [Number(num1), Number(num2), Number(num3)];
    ok = 1;
  } else {
    ok = 0;
  }
  if (ok === 1) {
    return num;
  } else {
    return null;
  }
};
