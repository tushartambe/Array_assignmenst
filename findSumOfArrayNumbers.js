let numbers = [2,5,7,1,4,6,8,2,7];

const findSum = function (array) {
  let sum = 0;
  for ( index =0; index < array.length; index++) {
    sum = sum + array[index];
  }
  return sum;
}
console.log(findSum(numbers));
