let numbers = [2,5,7,1,4,6,8,2,7];
let threshold = 4;
const countNumbersAbove = function (array,threshold) {
  let greaterNumbers =0;
  for ( index =0; index < array.length; index++) {
    if( array[index] > threshold ) {
      greaterNumbers++;
    }
  }
  return greaterNumbers;
}

console.log(countNumbersAbove(numbers,threshold));
