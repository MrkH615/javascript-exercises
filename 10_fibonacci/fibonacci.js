const fibonacci = function(num) {
  if (num === 1) return 0;
  let prev = 0; //F1
  let curr = 1;//F2
  let result;                                        ;
  for (let i = 1; i < num; i++) { 
    result = prev + curr;
    prev = curr;
    curr = result;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
