const isOdd = function (element) {
  return element % 2;
}

const findOddNumbers = function (array) {
  return array.filter(isOdd);
}

exports.findOddNumbers = findOddNumbers;
