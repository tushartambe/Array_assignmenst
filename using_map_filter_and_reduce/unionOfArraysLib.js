const pushUniqueNumbers = function(uniqueElementsArray,number) {
  let isPresent = false;
  for(let counter= 0; counter < uniqueElementsArray.length; counter++) {
    if(uniqueElementsArray[counter] == number) {
      isPresent = true;
    }
  }
  if(isPresent == false) {
    uniqueElementsArray.push(number);
  }
}

const unionOfArrays = function (firstArray,secondArray) {
  let uniqueElementsArray = [];
  for(let counter = 0; counter < firstArray.length; counter++) {
    pushUniqueNumbers(uniqueElementsArray,firstArray[counter]);
  }

  for(let counter = 0; counter < secondArray.length; counter++) {
    pushUniqueNumbers(uniqueElementsArray,secondArray[counter]);
  }

  return uniqueElementsArray;
}

exports.unionOfArrays = unionOfArrays;
