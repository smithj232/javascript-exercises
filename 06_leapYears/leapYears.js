const leapYears = function (year) {
  let remainder = year % 4
  let hundred = year % 100
  let fourHundred = year % 400

  if (remainder == 0) {
    if (fourHundred == 0) {
      return true
    } else if (hundred == 0) {
      return false
    } else{
      return true
    }
  } else {
    return false
  }
};


// Do not edit below this line
module.exports = leapYears;