const findOddNumbers = function (array) {
  let oddNumbers=[];
  let newIndex = 0;
  for ( index =0; index < array.length; index++) {
    if( array[index] %2 != 0 ) {
      oddNumbers[newIndex] = array[index];
      newIndex++;
    }
  }
  return oddNumbers;
}
exports.findOddNumbers = findOddNumbers;
