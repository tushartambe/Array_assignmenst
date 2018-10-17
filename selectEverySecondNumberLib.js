const selectSecond = function (array) {
  let selectedArray = [];
  let newIndex = 0;
  for ( index =0; index < array.length; index+=2) {
    selectedArray[newIndex] = array[index];
    newIndex ++;
  }
  return selectedArray;
}
exports.EverySecondNumbers= selectSecond;
