const leapYears = function(year) {

  return ((year % 4 === 0) && (year % 100 != 0) || (year % 400 == 0)) 
  // "year variable modified by 4 is equal to 0 (strict equality operator" && 
  // "year variable modified by 100 and converted by an !=(inequality operator to convert)" ||(or)
  // "year variable modified by 400 and converted by an !=(equality operator to convert)"
};

console.log(leapYears())
  

// Do not edit below this line
module.exports = leapYears;
