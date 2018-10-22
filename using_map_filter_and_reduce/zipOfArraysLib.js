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

const createZip = function(firstNumber,secondNumber) {
  let zip = [];
  zip[0] = firstNumber;
  zip[1] = secondNumber;

  return zip;
}

const zipOfArrays = function (firstArray,secondArray) {
  let smallerArray = whichIsSmaller(firstArray,secondArray);
  let biggerArray = whichIsBigger(firstArray,secondArray);

  let zip = [];
  for( let counter = 0; counter < smallerArray.length; counter++) {
    zip[counter] = createZip(biggerArray[counter],smallerArray[counter]);
  }

  return zip;
}
exports.zipOfArrays = zipOfArrays;
