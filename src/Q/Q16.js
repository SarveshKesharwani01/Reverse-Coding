export const Q16 = (val) => {
  let mp = {};
  while (val % 2 === 0) {
    val /= 2;
    if (mp[2]) mp[2]++;
    else mp[2] = 1;
  }
  for (let i = 3; i * i <= val; i++) {
    while (val % i === 0) {
      val /= i;
      if (mp[i]) mp[i]++;
      else mp[i] = 1;
    }
  }
  if (val > 2) {
    if (mp[val]) mp[val]++;
    else mp[val] = 1;
  }
  const arr = Object.keys(mp);
  //   console.log(arr);
  let mp2 = {};
  for (let i = 0; i < arr.length; i++)
    mp2[arr[i]] = String.fromCharCode(97 + i);
  let answer = "";
  for (let i = 0; i < arr.length; i++) {
    const cnt1 = mp[arr[i]];
    for (let j = 0; j < cnt1; j++) {
      answer += mp2[arr[i]];
    }
  }
  return answer;
};

/*
const boolAnswer = CheckIsInteger(val);
      if (boolAnswer !== null) setAnswer(Q16(boolAnswer));
      else setAnswer(IP);
      */

/*
setConstraint("Enter a non-negative integer 'N' \n 0<=N<=1e9 ");
*/