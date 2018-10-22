let numbers = [2,5,7,1,4,6,8,2,7];

const calculateSum = function (firstNumber,secondNumber) {
  return firstNumber+secondNumber;
}
const calculateAverage = function (numbersArray) {
  return (numbersArray.reduce(calculateSum,0))/numbersArray.length;
}

console.log(calculateAverage(numbers));
