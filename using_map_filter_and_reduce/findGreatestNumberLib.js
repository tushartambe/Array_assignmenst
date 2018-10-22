const bigNumber = function (firstNumber,secondNumber) {
  return Math.max(firstNumber,secondNumber);
}

const findGreatestNumber = function (array) {
  return array.reduce(bigNumber);
}
exports.findGreatest = findGreatestNumber;
