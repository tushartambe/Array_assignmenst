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

const commonElements = function (array,element,intersection) {
  for(let counter = 0; counter < array.length; counter++) {
    if(array[counter] == element) {
      intersection.push(element);
    }
  }
  return intersection;
}

const whichIsSmaller = function(firstArray,secondArray) {
  if(firstArray.length < secondArray.length)
  {
    return firstArray;
  } else {
    return secondArray;
  }
}

const whichIsBigger = function(firstArray,secondArray) {
  if(firstArray.length >= secondArray.length)
  {
    return firstArray;
  } else {
    return secondArray;
  }
}

const intersectionOfArrays = function (firstArray,secondArray) {
  firstArray = uniqueElements(firstArray);
  secondArray = uniqueElements(secondArray);

  let smallerArray = whichIsSmaller(firstArray,secondArray);
  let biggerArray = whichIsBigger(firstArray,secondArray);

  let intersection = [];

  for( let counter = 0; counter < smallerArray.length; counter++) {
    intersection = commonElements(biggerArray,smallerArray[counter],intersection);
  }

  return intersection;
}
exports.intersectionOfArrays = intersectionOfArrays;
