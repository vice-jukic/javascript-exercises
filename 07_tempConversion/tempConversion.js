const convertToCelsius = function(cel) {
  let feh = (cel - 32) * (5/9);
  return parseFloat(feh.toFixed(1));
};

const convertToFahrenheit = function(feh) {
  let cel = feh * (9/5) + 32;
  return parseFloat(cel.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
