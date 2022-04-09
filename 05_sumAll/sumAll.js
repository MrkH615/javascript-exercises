const sumAll = function(firstInteger, lastInteger) {
 
  if (firstInteger < 0 || lastInteger < 0) return 'ERROR';

  let total = 0;

 if (firstInteger > lastInteger) {
   let temp = firstInteger;
   firstInteger = lastInteger;
   lastInteger = temp;
 }

 for (let i=firstInteger; i <= lastInteger; i++) {
   total += i;
 }
 return total;
};

// Do not edit below this line
module.exports = sumAll;
