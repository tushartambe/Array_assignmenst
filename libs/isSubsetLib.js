const uniqueElements = require('./arrayOfUniqueElementsLib.js').uniqueElements;

const isSubset = function (firstArray,secondArray) {
  firstArray = uniqueElements(firstArray);
  secondArray = uniqueElements(secondArray);

  if( firstArray.length <= secondArray.length) {
    return false;
  }

  for( let counter = 0; counter < secondArray.length; counter++) {
    
    if(!firstArray.includes(secondArray[counter])) {
      return false;
    }
  }

  return true;
}
exports.isSubset = isSubset;
