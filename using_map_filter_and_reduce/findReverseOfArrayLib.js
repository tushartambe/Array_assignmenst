const findReverse = function (array) {
  let reversedArray = [];
  let reversedIndex = array.length - 1;
  for ( index =0; index < array.length; index++) {
    reversedArray[reversedIndex] = array[index];
    reversedIndex --;
  }
  return reversedArray;
}
exports.findReverse= findReverse;
