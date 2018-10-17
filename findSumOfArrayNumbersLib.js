const findSum = function (array) {
  let sum = 0;
  for ( index =0; index < array.length; index++) {
    sum = sum + array[index];
  }
  return sum;
}
exports.findSum = findSum;
