const ftoc = function(temperature) {
  temperature=(temperature-32)*5/9
  const roundedConvert=Math.round(temperature*10)/10;
  return roundedConvert
};

const ctof = function(temperature) {
  temperature=(temperature*9/5+32)
  const roundedConvert=Math.round(temperature*10)/10;
  return roundedConvert
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
