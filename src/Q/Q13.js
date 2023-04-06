export const Q13 = (val) => {
  val.sort((a, b) => {
    return a - b;
  });
  //   console.log(val);
  return val[0] + val[2] - val[1];
};
