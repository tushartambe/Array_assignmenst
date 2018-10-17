let numbers = [2,5,7,1,4,6,8,2,7];

const findLowestNumber = function (array) {
let lowestNumber = array[0];
  for ( let index =1; index < array.length; index++){
    if( array[index] < lowestNumber){
      lowestNumber = array[index];
    }
  }
  return lowestNumber;
}

console.log(findLowestNumber(numbers));
