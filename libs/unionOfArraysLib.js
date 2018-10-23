const uniqueElements = require('./arrayOfUniqueElementsLib.js').uniqueElements;

const unionOfArrays = function (firstArray,secondArray) {
  firstArray = uniqueElements(firstArray);
  secondArray = uniqueElements(secondArray);
  let unionOfNumbers = [];

  for(let counter = 0; counter < firstArray.length; counter++) {
    if(!unionOfNumbers.includes(firstArray[counter])) {
      unionOfNumbers.push(firstArray[counter]);
    }
  }

  for(let counter = 0; counter < secondArray.length; counter++) {
    if(!unionOfNumbers.includes(secondArray[counter])) {
      unionOfNumbers.push(secondArray[counter]);
    }
  }

  return unionOfNumbers;
}

exports.unionOfArrays = unionOfArrays;
