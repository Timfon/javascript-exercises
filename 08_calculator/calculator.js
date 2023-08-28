const add = function(num1, num2) {
  return num1 + num2
	
};

const subtract = function(num1, num2) {
  return num1 - num2

	
};

const sum = function(array) {
  output = 0
  for (let i = 0; i < array.length; i++) {
    output += array[i]
  }
  return output

	
};

const multiply = function(array) {

  output = 1
  for (let i = 0; i < array.length; i++) {
    output *= array[i]
  }
  return output
};

const power = function(num1, num2) {
  return num1 ** num2
};

const factorial = function(num) {
  output = 1

  for (let i = 1; i <= num; i++){
    output *= i
  }
  return output

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
