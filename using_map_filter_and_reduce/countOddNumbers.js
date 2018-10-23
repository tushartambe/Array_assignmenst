let numbers = [2,5,7,1,4,6,8,2,7];

const totalOddNumbers = function (array) {
    return array.filter(function(element) { return element % 2;}).length;

}

console.log(totalOddNumbers(numbers));
