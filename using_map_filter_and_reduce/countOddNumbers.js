let numbers = [2,5,7,1,4,6,8,2,7];

const totalOddNumbers = function (array) {
  let oddNumbers=0;
  for ( index =0; index < array.length; index++) {
    if( array[index] %2 != 0 ) {
      oddNumbers++;
    }
  }
  return oddNumbers;
}

console.log(totalOddNumbers(numbers));
