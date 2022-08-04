const palindromes = function (text) {
  const ltrs = /[a-z]/g;  
  text = text.toLowerCase().match(ltrs); 
  return text.join('') === text.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
