let numbers = [2,5,7,1,4,6,8,2,7];

const isEven  = function(element) {
  return element % 2 == 0;
}

const findEvenNumbers = function (array) {
  let EvenNumbs = [];
  EvenNumbs = array.filter(isEven);
  return EvenNumbs;
}

console.log(findEvenNumbers(numbers));
