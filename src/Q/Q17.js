export const Q17 = (val) => {
  const [a, b, c] = val;
  if (a > 1e6 || b > 1e6 || c > 1e6) return "INVALID INPUT";
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

/*
      setInput("A single line consists of three space-separated integers A,B,C");
      setOutput("Print 'YES' OR 'NO'");
      setConstraint("0 ≤ A, B, C ≤ 1e6");
*/


/*
hint
*/  