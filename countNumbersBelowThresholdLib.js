const countNumbersBelow = function (array,threshold) {
  let lowerNumbers =0;
  for ( index =0; index < array.length; index++) {
    if( array[index] < threshold ) {
      lowerNumbers++;
    }
  }
  return lowerNumbers;
}

exports.countNumbersBelow = countNumbersBelow;
