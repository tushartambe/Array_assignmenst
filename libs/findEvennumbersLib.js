const isEven  = function(element) {
  return element % 2 == 0;
}

const findEvenNumbers = function (array) {
  let evenNum = [];
  evenNum =  array.filter(isEven);
  return evenNum;
}
exports.findEvenNumbers = findEvenNumbers;
