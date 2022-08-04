const palindromes = function (text) {//doesn't work for single words, punctuation
  const ltrs = /[a-z]/g;  
  text = text.toLowerCase().match(ltrs); //array
  return text.join('') === text.reverse().join('');//string
};

// Do not edit below this line
module.exports = palindromes;
