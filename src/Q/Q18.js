export const Q18 = (val) => {
  if (val.length > 1e5) return "INVALID INPUT";
  const freq = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let i = 0; i < val.length; i++) {
    if (freq[val[i]] >= 0) {
      freq[val[i]]++;
    }
  }
  //   console.log(freq);
  if (
    freq["a"] % 2 === 1 &&
    freq["e"] % 2 === 0 &&
    freq["i"] % 2 === 1 &&
    freq["o"] % 2 === 0 &&
    freq["u"] % 2 === 1
  )
    return "YES";
  else return "NO";
};

/*
const boolAnswer = checkIsString(val); 
if(boolAnswer !== null)setAnswer(Q18(boolAnswer));
else setAnswer(IP); 
*/

/*
 setInput(
        "A string S consisting of lowercase letter of English alphabet."
      );
      setOutput("Print 'YES' OR 'NO'");
      setConstraint("1 ≤ |S| ≤ 1e5");
*/
