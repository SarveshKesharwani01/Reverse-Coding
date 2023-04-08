export const Q1 = (val) => {
  //Convert number to trinary
  let curr = "";
  if (val > 1000000000) return "INVALID INPUT";
  if (val === 0) curr = "0";
  while (val > 0) {
    curr = curr + String(val % 3);
    val = Math.floor(val / 3);
  }
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  curr = reverseString(curr);
  return curr;
};
/*
      const boolAnswer = CheckIsInteger(val);
       if (boolAnswer !== null) setAnswer(Q1(boolAnswer));
       else setAnswer(IP);
*/

/* 
      setInput("A single line consists one integer N")
      setOutput("Print a single string with characters ranging between '0' to '9'")
      setConstraint("0 ≤ N ≤ 1e9");
*/
