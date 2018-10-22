const bigNumber = function (firstNumber,secondNumber) {
  return Math.min(firstNumber,secondNumber);
}

const findLowestNumber = function (array) {
  return array.reduce(bigNumber);
}
exports.findLowest = findLowestNumber;
