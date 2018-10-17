const countNumbersAbove = function (array,threshold) {
  let greaterNumbers =0;
  for ( index =0; index < array.length; index++) {
    if( array[index] > threshold ) {
      greaterNumbers++;
    }
  }
  return greaterNumbers;
}

exports.countNumbersAbove = countNumbersAbove;
