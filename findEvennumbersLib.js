const findEvenNumbers = function (array) {
  let evenNumbers=[];
  let newIndex = 0;
  for ( index =0; index < array.length; index++) {
    if( array[index] %2 == 0 ) {
      evenNumbers[newIndex] = array[index];
      newIndex++;
    }
  }
  return evenNumbers;
}
exports.findEvenNumbers = findEvenNumbers;
