export const Q2 = (val) => {
  // Given a string, check if count of letters is in incremental form. Abbccc -> yes, aabbcc->no, baaccc->yes
  let freq = {};
  if (val.length > 100000) return "INVALID INPUT";  
  for (let i = 0; i < val.length; i++) {
    let char = val.charAt(i);
    if (freq[char]) freq[char]++;
    else freq[char] = 1;
  }

  let check = Object.values(freq);
  check.sort((a, b) => {
    return a - b;
  });
  // console.log(check);
  let ok = true;
  for (let i = 0; i < check.length; i++) {
    if (check[i] !== i + 1) {
      ok = false;
    }
  }
  if (ok) return "YES";
  else return "NO";
};

/*
      const boolAnswer = CheckIsString(val);
       if (boolAnswer !== null) setAnswer(Q2(boolAnswer));
       else setAnswer(IP);
*/
/*
      setInput(
        "A single string S consisting of lowercase letter of English Alphabets."
      );
      setOutput("Print 'YES' OR 'NO' ");
      setConstraint("1 ≤ |S| ≤ 1e5");

*/
