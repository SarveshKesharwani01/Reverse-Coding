export const Q3 = (val) => {
  // Toggle all bits of string and reverse the string and output. Like, input: 110, output: 100
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
