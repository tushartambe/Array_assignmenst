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

const uniqueElements = function (array) {
  let uniqueElementsArray = [];
  for(let counter = 0; counter < array.length; counter++) {
    pushUniqueNumbers(uniqueElementsArray,array[counter]);
  }
  return uniqueElementsArray;
}

const isPresent = function(array,number) {
  let isFound = false;
  for ( counter =0; counter < array.length; counter++) {
    if(array[counter] == number) {
      return isFound = true;
    }
  }
  return isFound;
}

const isSubset = function (firstArray,secondArray) {
  firstArray = uniqueElements(firstArray);
  secondArray = uniqueElements(secondArray);
  let isFound;
  let isSubsetOfArray;
  if( firstArray.length <= secondArray.length) {
    return false;
  }

  for( let counter = 0; counter < secondArray.length; counter++) {
    isFound = isPresent(firstArray,secondArray[counter]);

    if(isFound == false) {
      return false;
    }
    if(isFound == true) {
      isSubsetOfArray = true;
    }
  }

  return isSubsetOfArray;
}
exports.isSubset = isSubset;
