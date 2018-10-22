let numbers = [2,5,7,1,4,6,8,2,7];

const isOdd = function (element) {
  return element % 2;
}

const findOddNumbers = function (array) {
  return array.filter(isOdd);
}

console.log(findOddNumbers(numbers));
