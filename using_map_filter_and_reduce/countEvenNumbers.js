let numbers = [2,5,7,1,4,6,8,2,7];

const totalEvenNumbers = function (array) {
      return array.filter(function(element) { return (element % 2 == 0);}).length;

}

console.log(totalEvenNumbers(numbers));

