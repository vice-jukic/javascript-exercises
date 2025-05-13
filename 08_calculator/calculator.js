const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let sum = 0;
  for (let i=0; i<=arr.length-1; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let prod = 1;
  for (let i=0; i<=arr.length-1; i++) {
    prod *= arr[i];
  }
  return prod;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let num = 1;
  for (let i=2; i<=a; i++) {
    num *= i;
  }
  return num
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
