const filterUniqueElements = function(uniqueList, element) {
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

const filterDifferentElements = function(array){
  return function(number){
    if(array.includes(number))
      return false;
    return true;
  }
}

const differentElements = function (firstList,secondList) {

  firstList = uniqueElements(firstList);
  secondList  = uniqueElements(secondList);
  let getDifferentElements = filterDifferentElements(secondList);
  return firstList.filter(getDifferentElements);

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
  return  numbers.filter(isEven);
}
exports.findEvenNumbers = findEvenNumbers;
//----------------------------------------------

const checkGreaterNumber = function (firstNumber,secondNumber) {
  return Math.max(firstNumber,secondNumber);
}

const findGreatestNumber = function (numbersList) {
  if(!numbersList) {
    return undefined;
  }

  return numbersList.reduce(checkGreaterNumber);
}
exports.findGreatest = findGreatestNumber;
//----------------------------------------------

const checkSmallerNumber = function (firstNumber,secondNumber) {
  return Math.min(firstNumber,secondNumber);
}

const findLowestNumber = function (numbersList) {
  if(!numbersList) {
    return undefined;
  }
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
  let reverseData = [];
  for (element of dataSet) {
    reverseData.unshift(element);
  }
  return reverseData;
}
exports.reversedList= reversedList;
//----------------------------------------------

const findSum = function (dataSet) {
  return dataSet.reduce(calculateSum,0);
}
exports.findSum = findSum;
//----------------------------------------------

const findFirstPosition = function (numbersList,number) {
  return numbersList.indexOf(number);
}
exports.findFirstPosition= findFirstPosition;
//----------------------------------------------
const instersectionSet = function(DataSet) {
   return function(number){
    if(DataSet.includes(number))
      return true;
    return false;
  }
}

const intersectionOfSets = function (firstSet,secondSet) {
  firstSet = uniqueElements(firstSet);
  secondSet = uniqueElements(secondSet);

  let intersection = instersectionSet(secondSet);
  return firstSet.filter(intersection);
}
exports.intersectionOfSets = intersectionOfSets;
//----------------------------------------------

const checkAscending = function(object, number){
  let { isAsndingResult,previousNumber} = object;
  object.isAsndingResult = isAsndingResult && number >= object.previousNumber;
  return {isAsndingResult : object.isAsndingResult, previousNumber : number};
}

const isAscending = function (numbersList) {
  return numbersList.reduce(checkAscending, {isAsndingResult : true, previousNumber : numbersList[0]}).isAsndingResult;
}

exports.isAscending = isAscending;
//----------------------------------------------

const isDescending = function (numbersList) {
  numbersList  =numbersList.reverse();
  return numbersList.reduce(checkAscending, {isAsndingResult : true, previousNumber : numbersList[0]}).isAsndingResult;
}

exports.isDescending = isDescending;
//----------------------------------------------

const isIncludes = function(set) {
  return function(element) {
    return set.includes(element);
  }
}

const isSubset = function (firstList,secondList) {
  firstList = uniqueElements(firstList);
  secondList = uniqueElements(secondList);
  
  let checkSubSet = isIncludes(firstList);
  return secondList.every(checkSubSet);

}
exports.isSubset = isSubset;
//----------------------------------------------

const lengthOfEveryElement = function (words) {
  return words.map(function(element) { return element.length;});
}

exports.lengthOfEveryElement = lengthOfEveryElement;
//----------------------------------------------

const partitioningNumbers = function (partitionValue){
  return function(partitionNumber, number){
    let {smallerNumbers,biggerNumbers} = partitionNumber;
    if(number <= partitionValue){
      smallerNumbers.push(number);
      return {smallerNumbers, biggerNumbers};
    }
    biggerNumbers.push(number);
    return {smallerNumbers, biggerNumbers};
  }
}

const partitionOfArray = function (numbersList,number) {
  let partitionByValue = partitioningNumbers(number);
  let partitions =  numbersList.reduce(partitionByValue,{smallerNumbers:[],biggerNumbers: []});
  return [partitions.smallerNumbers, partitions.biggerNumbers];
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
const union = function(dataSet,number) {
  if(!dataSet.includes(number)) {
    dataSet.push(number);
  }
  return dataSet;
}

const unionOfArrays = function (firstDataSet,secondDataSet) {
  firstDataSet = uniqueElements(firstDataSet);
  secondDataSet = uniqueElements(secondDataSet);

  return secondDataSet.reduce(union,firstDataSet);
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
