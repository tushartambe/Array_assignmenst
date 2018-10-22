const calculateSum = function (firstNumber,secondNumber) {
  return firstNumber+secondNumber;
}
const calculateAverage = function (numbersArray) {
  return (numbersArray.reduce(calculateSum,0))/numbersArray.length;
}
exports.calculateAverage = calculateAverage;
