const isAscending = function (array) {
let message = "";
  if(array.length == 1) {
    return message = true;
  }
  for ( index =0; index < array.length - 1; index++) {
    if( array[index] > array[index + 1]) {
      return message = false;
    }
    if(array[index] < array[index+1]){
      message = true;
    }
  }
  return message;
}

exports.isAscending = isAscending;
