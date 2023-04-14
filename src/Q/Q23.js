export const Q23 = (val) => {
  const [a, b, c, d] = val;
  if (a > 1e7 || b > 1e7 || c > 1e7 || d > 1e7) return "INVALID INPUT";
  if (a < 1 || b < 1 || c < 1 || d < 1) return "INVALID INPUT";
  return a - b * c + d;
};


/*
setInput("A single line consisting of four space-separated integers A, B, C, D");
setOutput("Print a single integer");
setConstraint("1 ≤ A, B, C, D≤ 1e7");
*/