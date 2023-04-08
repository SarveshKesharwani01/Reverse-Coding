export const Q3 = (val) => {
  // Toggle all bits of string and reverse the string and output. Like, input: 110, output: 100
  if (val.length > 100000) return "INVALID INPUT";
  let output = "";
  for (let i = 0; i < val.length; i++) {
    if (val[i] === "1") output += "0";
    else output += "1";
  }
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  output = reverseString(output);
  return output;
};
/*
 const boolAnswer = CheckIsBinaryString(val);
 if (boolAnswer !== null) setAnswer(Q3(boolAnswer));
 else setAnswer(IP);
*/
/*
setInput(
        "A single string S consisting of '0's and '1's"
      );
      setOutput("Print a single string consisting '0's and '1's");
      setConstraint("1 ≤ |S| ≤ 1e5");
*/
