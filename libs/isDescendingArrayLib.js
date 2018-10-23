const isDescending = function (numbers) {
  for ( index = 0; index < numbers.length - 1; index++) {
    if( numbers[index] < numbers[index + 1]) {
      return false;
    }
  }
  return true;
}

exports.isDescending = isDescending;
