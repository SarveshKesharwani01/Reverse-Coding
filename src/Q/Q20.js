export const Q20 = (val) => {
    const [a, b, c] = val;
    if (a > 1e6 || b > 1e6 || c > 1e6) return "INVALID INPUT";
    if (b * b - a * c === 0) return "YES";
    else return "NO";
  };
  
  /* 
  const boolAnswer = CheckIsThreeInteger(val);
  if(boolAnswer !== null)setAnswer(Q20(boolAnswer)); 
  else setAnswer(IP); 
  */
  
  /*
        setInput("A single line consists of three space-separated integers A, B, C");
        setOutput("Print 'YES' OR 'NO'");
        setConstraint("0 ≤ A, B, C ≤ 1e6");
  */