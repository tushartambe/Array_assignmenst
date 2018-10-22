let numbers = [2,5,7,1,4,6,8,2,7];

const bigNumber = function (firstNumber,secondNumber) {
  return Math.max(firstNumber,secondNumber);
}

const findGreatestNumber = function (array) {
  return array.reduce(bigNumber);
}

console.log(findGreatestNumber(numbers));
