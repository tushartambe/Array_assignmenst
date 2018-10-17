const totalOddNumbers = function (array) {
  let oddNumbers=0;
  for ( index =0; index < array.length; index++) {
    if( array[index] %2 != 0 ) {
      oddNumbers++;
    }
  }
  return oddNumbers;
}

exports.totalOddNumbers = totalOddNumbers;
