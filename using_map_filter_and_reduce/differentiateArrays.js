let firstNumbers = [2,4,5,2,4,5,2,6,7,5];
let secondNumbers = [5,8,9,9,0,4];

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

const differentElements = function (firstArray,secondArray) {
  firstArray = uniqueElements(firstArray);
  secondArray = uniqueElements(secondArray);
  let isFound;
  differentiatedElements = [];
  for( let counter = 0; counter < firstArray.length; counter++) {
    isFound = isPresent(secondArray,firstArray[counter]);

    if(isFound == false) {
      differentiatedElements.push(firstArray[counter]);
    }
  }

  return differentiatedElements;
}

console.log(differentElements(firstNumbers,secondNumbers));
