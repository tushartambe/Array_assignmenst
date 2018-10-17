let numbers = [2,5,7,1,4,6,8,2,7];
let threshold = 4;

const countNumbersBelow = function (array,threshold) {
  let lowerNumbers =0;
  for ( index =0; index < array.length; index++) {
    if( array[index] < threshold ) {
      lowerNumbers++;
    }
  }
  return lowerNumbers;
}

console.log(countNumbersBelow(numbers,threshold));
