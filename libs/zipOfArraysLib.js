const createZip = function(firstNumber,secondNumber) {
  let zip = [];
  zip[0] = firstNumber;
  zip[1] = secondNumber;

  return zip;
}

const zipOfArrays = function (firstArray,secondArray) {
  let lengthOfSmallArray = Math.min(firstArray.length,secondArray.length);
  let zip = [];
  for( let counter = 0; counter < lengthOfSmallArray; counter++) {
    zip[counter] = createZip(firstArray[counter],secondArray[counter]);
  }

  return zip;
}
exports.zipOfArrays = zipOfArrays;
