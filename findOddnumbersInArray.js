let numbers = [2,5,7,1,4,6,8,2,7];

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
console.log(findOddNumbers(numbers));

exports.findOddNumbers = findOddNumbers;
