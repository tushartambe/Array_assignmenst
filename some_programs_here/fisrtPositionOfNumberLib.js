const findFirstPosition = function (array,number) {
  let firstPosition = "";
  for ( index =0; index < array.length; index++) {
    if (array[index] == number) {
      firstPosition = index;
      index = array.length;
    }
  }
  return firstPosition;
}
exports.findFirstPosition= findFirstPosition;
