let numbers = [2,5,7,1,4,6,8,2,7];

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

console.log(calculateAverage(numbers));
