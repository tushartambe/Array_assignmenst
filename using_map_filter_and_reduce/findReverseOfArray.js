let numbers = [2,5,7,1,4,6,8,2,7];

const findReverse = function (array) {
  let reversedArray = [];
  let reversedIndex = array.length - 1;
  for ( index =0; index < array.length; index++) {
    reversedArray[reversedIndex] = array[index];
    reversedIndex --;
  }
  return reversedArray;
}
console.log(findReverse(numbers));
