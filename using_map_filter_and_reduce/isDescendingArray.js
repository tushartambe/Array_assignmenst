let numbers = [2,5,7,1,4,6,8,2,7];

const isDescending = function (array) {

  let message = "";
  if(array.length == 1) {
    return message = true;
  }
  for ( index =0; index < array.length - 1; index++) {
    if( array[index] < array[index + 1]) {
      return message = false;
    }
    if(array[index] > array[index+1]){
      message = true;
    }
  }
  return message;
}

console.log(isDescending(numbers));