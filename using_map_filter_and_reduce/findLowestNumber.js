let numbers = [2,5,7,1,4,6,8,2,7];

const bigNumber = function (firstNumber,secondNumber) {
  return Math.min(firstNumber,secondNumber);
}

const findLowestNumber = function (array) {
  return array.reduce(bigNumber);
}

console.log(findLowestNumber(numbers));
