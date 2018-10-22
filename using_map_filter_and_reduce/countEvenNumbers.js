let numbers = [2,5,7,1,4,6,8,2,7];

const totalEvenNumbers = function (array) {
  let evenNumbers=0;
  for ( index =0; index < array.length; index++) {
    if( array[index] %2 == 0 ) {
      evenNumbers++;
    }
  }
  return evenNumbers;
}

console.log(totalEvenNumbers(numbers));

