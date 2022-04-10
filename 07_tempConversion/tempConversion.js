const ftoc = function(temp) {
  let degC = (temp - 32) * 5/9;
  return Math.round(degC * 10) / 10;
};

const ctof = function(temp) {
  let degF = temp * 9/5 + 32;
  return Math.round(degF * 10 ) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
