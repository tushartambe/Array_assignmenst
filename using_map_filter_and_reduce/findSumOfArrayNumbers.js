let numbers = [2,5,7,1,4,6,8,2,7];

const sum = function(firstNumber,nextNumber) {
  return firstNumber+nextNumber;
}

const findSum = function (array) {
  return array.reduce(sum,0);
}

console.log(findSum(numbers));
