export const Q17 = (val) => {
  const [a, b, c] = val;
//   console.log(b * b, 4 * a * c);
  if (b * b < 4 * a * c) return "NO";
  else {
    const val = Math.sqrt(b * b - 4 * a * c);
    const root1 = (-b + val) / (2 * a);
    const root2 = (-b - val) / (2 * a);
    console.log(root1, root2);
    if (Number.isInteger(root1) && Number.isInteger(root2)) {
      return "YES";
    } else {
      return "NO";
    }
  }
};

/* 
const boolAnswer = checkIsThreeInteger(val);
if(boolAnswer !== null)setAnswer(Q17(boolAnswer)); 
else setAnswer(IP); 
*/
