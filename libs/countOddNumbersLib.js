const totalOddNumbers = function (array) {
  return array.filter(function(element) { return element % 2;}).length;
}

exports.totalOddNumbers = totalOddNumbers;
