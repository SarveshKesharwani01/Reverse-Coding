export const Q9 = (val) => {
  if (val[0] < 2) return "INVALID INPUT";
  function gcd(a, b) {
    if (a === 0) return b;
    else if (b === 0) return a;

    if (a > b) return gcd(a % b, b);
    else return gcd(a, b % a);
  }
  let sum = 0;
  for (let i = 1; i < val.length; i++) {
    sum = gcd(sum, val[i]);
  }
  if (sum % 2 === 0) {
    return sum - 1;
  } else {
    return sum + 1;
  }
};
