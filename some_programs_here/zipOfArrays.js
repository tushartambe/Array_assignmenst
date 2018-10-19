let firstNumbers = [2,4,5,2,4,5,2,6,7,5];
let secondNumbers = [5,8,9,9,0,4];
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

console.log(zipOfArrays(firstNumbers,secondNumbers));
