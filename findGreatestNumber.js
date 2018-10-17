let numbers = [2,5,7,1,4,6,8,2,7];

const findGreatestNumber = function (array) {
  let greatestNumber = array[0]; 
  for ( index =1; index < array.length; index++) {
    if( greatestNumber < (array[index]) {
      greatestNumber = array[index];
    }
  }
  return greatestNumber;
}
console.log(findGreatestNumber(numbers));
