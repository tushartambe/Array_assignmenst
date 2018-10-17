let numbers = [2,5,7,1,4,6,8,2,7];

const findEven = function (array) {
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
console.log(findEven(numbers));
