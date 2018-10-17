let numbers = [2,5,7,1,4,6,8,2,7];
let number = 4;
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

console.log(firstPosition(numbers,number));
