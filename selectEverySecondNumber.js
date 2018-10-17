let numbers = [2,5,7,1,4,6,8,2,7];

const selectSecond = function (array) {
  let selectedArray = [];
  let newIndex = 0;
  for ( index =0; index < array.length; index+=2) {
    selectedArray[newIndex] = array[index];
    newIndex ++;
  }
  return selectedArray;
}
console.log(selectSecond(numbers));
