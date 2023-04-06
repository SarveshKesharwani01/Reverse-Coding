export const Calculate1 = (val) => {
  val = Number(val);
  let curr = "";
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
