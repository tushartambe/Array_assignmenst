const calculateSum = function (numbersArray) {
  let sum = 0;
  for ( index =0; index < numbersArray.length; index++) {
    sum = sum + numbersArray[index];
  }
  return sum;
}
const calculateAverage = function (numbersArray) {
  let sum = calculateSum(numbersArray);
  let average = sum/numbersArray.length;

  return average;
}
exports.calculateAverage = calculateAverage;
