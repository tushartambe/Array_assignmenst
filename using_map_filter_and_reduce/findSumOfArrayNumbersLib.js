const sum = function(firstNumber,nextNumber) {
  return firstNumber+nextNumber;
}

const findSum = function (array) {
  return array.reduce(sum,0);
}
exports.findSum = findSum;
