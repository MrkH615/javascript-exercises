const findTheOldest = function(people) {
  let sortedAges = people.sort((a,b) => (b.yearOfDeath-b.yearOfBirth)-(a.yearOfDeath-a.yearOfBirth));
  return sortedAges[0];
};

// Do not edit below this line
module.exports = findTheOldest;
