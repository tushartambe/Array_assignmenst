filterUniqueElements = function(uniqueList, element) {
  if(!uniqueList.includes(element)) {
    uniqueList = uniqueList.concat(element);
  }
  return uniqueList;
}

const uniqueElements = function (numbers) {
  return numbers.reduce(filterUniqueElements,[]);
}

exports.uniqueElements = uniqueElements;
//------------------------------------------

const calculateSum = function (firstNumber,secondNumber) {
  return firstNumber+secondNumber;
}

const calculateAverage = function (numbersList) {
  return (numbersList.reduce(calculateSum,0))/numbersList.length;
}
exports.calculateAverage = calculateAverage;
//--------------------------------------------------

const countEvens = function (numbers) {
  return numbers.filter(isEven).length;

}
exports.countEvens = countEvens;
//-----------------------------------------------------
const filterGreaterNumbers = function(threshold) {
  return function(element) {
    return element > threshold;
  }
}

const countNumbersAbove = function (numbersList,threshold) {
  greaterNumbers = filterGreaterNumbers(threshold);
  return numbersList.filter(greaterNumbers).length; 
}

exports.countNumbersAbove = countNumbersAbove;
//------------------------------------------------

const filterLowerNumbers = function(threshold) {
  return function(element) {
    return element < threshold;
  }
}

const  countNumbersBelow = function (numbersList,threshold) {
  lowerNumbers = filterLowerNumbers(threshold);
  return numbersList.filter(lowerNumbers).length; 
}

exports.countNumbersBelow = countNumbersBelow;
//---------------------------------------------------

const totalOddNumbers = function (numbers) {
  return numbers.filter(isOdd).length;
}

exports.totalOddNumbers = totalOddNumbers;
//-----------------------------------------

const differentElements = function (firstList,secondList) {
  firstList = uniqueElements(firstList);
  secondList = uniqueElements(secondList);

  let isFound;
  differentiatedElements = [];
  for(let element of firstList) {
    isFound = secondList.includes(element);

    if(!isFound) {
      differentiatedElements.push(element);
    }
  }

  return differentiatedElements;
}
exports.differentElements = differentElements;
//--------------------------------------------

const extractDigits = function ( number) {
  let convertedNumber = number.toString();
  return  convertedNumber.split("");
}

exports.extractDigits = extractDigits;
//---------------------------------------------

const isEven  = function(element) {
  return element % 2 == 0;
}

const findEvenNumbers = function (numbers) {
  let evenNum = [];
  evenNum =  numbers.filter(isEven);
  return evenNum;
}
exports.findEvenNumbers = findEvenNumbers;
//----------------------------------------------

const checkGreaterNumber = function (firstNumber,secondNumber) {
  return Math.max(firstNumber,secondNumber);
}

const findGreatestNumber = function (numbersList) {
  return numbersList.reduce(checkGreaterNumber);
}
exports.findGreatest = findGreatestNumber;
//----------------------------------------------

const checkSmallerNumber = function (firstNumber,secondNumber) {
  return Math.min(firstNumber,secondNumber);
}

const findLowestNumber = function (numbersList) {
  return numbersList.reduce(checkSmallerNumber);
}
exports.findLowest = findLowestNumber;
//-------------------------------------------------

const isOdd = function (element) {
  return element % 2;
}

const findOddNumbers = function (numbers) {
  return numbers.filter(isOdd);
}

exports.findOddNumbers = findOddNumbers;
//----------------------------------------------

const reversedList = function (dataSet) {
  return dataSet.reverse();
}
exports.reversedList= reversedList;
//----------------------------------------------

const findSum = function (dataSet) {
  return dataSet.reduce(calculateSum,0);
}
exports.findSum = findSum;
//----------------------------------------------

const findPosition = function(state,element,index) {
  if(state.element == element && state.index == -1) {
    state.index = index;
    return state;
  }
  return state;
}

const findFirstPosition = function (numbersList,number) {

  let firstPosition = numbersList.reduce(findPosition,{ element : number, index : -1 }).index;

  return firstPosition;
}
exports.findFirstPosition= findFirstPosition;
//----------------------------------------------

const intersectionOfArrays = function (firstList,secondList) {
  firstList = uniqueElements(firstList);
  secondList = uniqueElements(secondList);

  let intersection = [];
  for(let element of secondList) {
    if(firstList.includes(element)) {
      intersection.push(element);
    }
  }

  return intersection;
}
exports.intersectionOfArrays = intersectionOfArrays;
//----------------------------------------------

const isAscending = function (numbersList) {
  for (let counter = 0; counter < numbersList.length - 1; counter++) {
    if( numbersList[counter] > numbersList[counter + 1]) {
      return false;
    }
  }
  return true;
}

exports.isAscending = isAscending;
//----------------------------------------------

const isDescending = function (numbersList) {
  for (let counter = 0; counter < numbersList.length - 1; counter++) {
    if( numbersList[counter] < numbersList[counter + 1]) {
      return false;
    }
  }
  return true;
}

exports.isDescending = isDescending;
//----------------------------------------------

const isSubset = function (firstList,secondList) {
  firstList = uniqueElements(firstList);
  secondList = uniqueElements(secondList);

  if( firstList.length <= secondList.length) {
    return false;
  }

  for( let counter = 0; counter < secondList.length; counter++) {

    if(!firstList.includes(secondList[counter])) {
      return false;
    }
  }

  return true;
}
exports.isSubset = isSubset;
//----------------------------------------------

const lengthOfEveryElement = function (words) {
  return words.map(function(element) { return element.length;});
}

exports.lengthOfEveryElement = lengthOfEveryElement;
//----------------------------------------------

const sortNumbers = function(numbersList) {
  let swappingVariable;
  for(let firstIndex = 0; firstIndex < numbersList.length; firstIndex++) {
    for( let secondIndex =0; secondIndex < numbersList.length-1; secondIndex++) {
      if( numbersList[secondIndex] > numbersList[secondIndex + 1]) {
        swappingVariable = numbersList[secondIndex];
        numbersList[secondIndex] = numbersList[secondIndex + 1];
        numbersList[secondIndex + 1] = swappingVariable;
      }
    }
  }
  return numbersList;
}

const seperateNumbers = function (state,element){
  let {smallerNumbers,biggerNumbers,number} = state;
  if( element <= state.number) {
    smallerNumbers = smallerNumbers.concat(element);
    return {smallerNumbers :smallerNumbers,biggerNumbers:biggerNumbers,number:number};
  }

  biggerNumbers = biggerNumbers.concat(element);
  return {smallerNumbers :smallerNumbers,biggerNumbers:biggerNumbers,number:number};
}

const partitionOfArray = function (numbersList,number) {
  let sortedList = sortNumbers(numbersList);
  let partitions = [];
  partitions[0] = sortedList.reduce(seperateNumbers,{smallerNumbers:[],biggerNumbers: [],number:number}).smallerNumbers;
  partitions[1] = sortedList.reduce(seperateNumbers,{smallerNumbers:[],biggerNumbers: [],number:number}).biggerNumbers;

  return partitions;
}
exports.partitionOfArray = partitionOfArray;
//----------------------------------------------

const fibSeries = function (totalTerms) {
  let firstTerm = -1;
  let secondTerm = 1;
  let nextTerm;
  let fibSeriesNumbers = [];
  for(let termIndex=0; termIndex<totalTerms; termIndex++){
    nextTerm = firstTerm + secondTerm;
    fibSeriesNumbers[termIndex] = nextTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
  }
  return fibSeriesNumbers.reverse();
}
exports.fibSeries = fibSeries;
//----------------------------------------------

const movePositions = function(dataSet,position) {
  for(let counter = 0; counter <= position; counter++) {
    let numberToMove = dataSet.shift();
    dataSet.push(numberToMove);
  }

  return dataSet;
}
const rotateArray = function (dataSet,indexToRotate) {
  return movePositions(dataSet,indexToRotate);
}
exports.rotateArray= rotateArray;
//-----------------------------------------------
const selectSecond = function (state,element){
  let {index,elements} = state;
  if(index % 2 == 0) {
    elements =  elements.concat(element);
  }
  return {index : index+1,elements:elements}
};

const selectAlternateNumbers = function(numbersList) {
  return numbersList.reduce(selectSecond,{index:0,elements:[]}).elements;
}
exports.selectAlternateNumbers= selectAlternateNumbers;
//----------------------------------------------

const unionOfArrays = function (firstDataSet,secondDataSet) {
  firstDataSet = uniqueElements(firstDataSet);
  secondDataSet = uniqueElements(secondDataSet);
  let unionOfNumbers = [];

  for(let counter = 0; counter < firstDataSet.length; counter++) {
    if(!unionOfNumbers.includes(firstDataSet[counter])) {
      unionOfNumbers.push(firstDataSet[counter]);
    }
  }

  for(let counter = 0; counter < secondDataSet.length; counter++) {
    if(!unionOfNumbers.includes(secondDataSet[counter])) {
      unionOfNumbers.push(secondDataSet[counter]);
    }
  }

  return unionOfNumbers;
}
exports.unionOfArrays = unionOfArrays;
//----------------------------------------------

const createZip = function(firstNumber,secondNumber) {
  let zip = [];
  zip[0] = firstNumber;
  zip[1] = secondNumber;

  return zip;
}

const zipOfArrays = function (firstDataSet,secondDataSet) {
  let lengthOfSmallArray = Math.min(firstDataSet.length,secondDataSet.length);
  let zip = [];
  for( let counter = 0; counter < lengthOfSmallArray; counter++) {
    zip[counter] = createZip(firstDataSet[counter],secondDataSet[counter]);
  }

  return zip;
}
exports.zipOfArrays = zipOfArrays;
