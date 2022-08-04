const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current, 1);

};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(num) {
	 if (num <=1 ) return 1;
  //add integer to all integers smaller than it down to 1
  let result = 1;
  for (let i = 1; i <= num; i++) { //fails num = 5, gave 15, expected 120
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
