const totalEvenNumbers = function (array) {
      return array.filter(function(element) { return (element % 2 == 0);}).length;

}

exports.totalEvenNumbers = totalEvenNumbers;
