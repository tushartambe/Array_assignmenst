// Try implementing this with a higher order function. (e.g. map, filter, reduce, every, some)
const uniqueElements = function (numbers) { // The function is called uniqueElements, but takes only numbers? Or does it work for some other types too?
  let uniqueElementsArray = [];  // The name can be shortened - I know its an array from its initialization. 
  for(let counter = 0; counter < numbers.length; counter++) { // Could you not have used a for of loop?
    if(!uniqueElementsArray.includes(numbers[counter])) {
      uniqueElementsArray.push(numbers[counter]);
    }
  }
  return uniqueElementsArray;
}

exports.uniqueElements = uniqueElements; // What is your reason of putting export right under te function instead of the end...
//------------------------------------------

const calculateSum = function (firstNumber,secondNumber) {
  return firstNumber+secondNumber;
}

const calculateAverage = function (numbersList) { 
  return (numbersList.reduce(calculateSum,0))/numbersList.length;
}
exports.calculateAverage = calculateAverage;
//--------------------------------------------------

const totalEvenNumbers = function (numbers) { // name of this function is confusing - is it the sum of even numbers, or total numbers of the even numbers?
  return numbers.filter(isEven).length;

}
exports.totalEvenNumbers = totalEvenNumbers;
//-----------------------------------------------------
// This looks like a complicated implementation. Why not use filter to solve this?
const countGreaterNumbers = function(state, currentElement){
  let {count,threshold}=state;

  if(currentElement > state.threshold) {
    state.count++
  }
  return state;
}

const countNumbersAbove = function (numbersList,threshold) {

  let totalNumbers = numbersList.reduce(countGreaterNumbers, {count : 0, threshold : threshold}).count;
  return totalNumbers;
}

exports.countNumbersAbove = countNumbersAbove;
//------------------------------------------------
// This looks like a complicated implementation. Why not use filter to solve this?
const countLowerNumbers = function(countObject, currentElement){
  let {count,threshold}=countObject;

  if(currentElement < countObject.threshold) {
    countObject.count++
  }
  return countObject;
}

const  countNumbersBelow = function (numbers,threshold) {

  let totalNumbers = numbers.reduce(countLowerNumbers, {count : 0, threshold : threshold}).count;
  return totalNumbers;
}

exports.countNumbersBelow = countNumbersBelow;
//---------------------------------------------------

const totalOddNumbers = function (numbers) {
  return numbers.filter(isOdd).length;
}

exports.totalOddNumbers = totalOddNumbers;
//-----------------------------------------

// Work on feedback (1) first. Make commit. 
// Work on feedback (2) then. Make commit.
// 2. Implement this with higher order function.
const differentElements = function (firstList,secondList) {
  firstList = uniqueElements(firstList);
  secondList = uniqueElements(secondList);

  let isFound; // 1. You don't need this. Get rid of it. You were already given feedback for this...
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

const extractDigits = function ( number) { // Indentation issue
  let convertedNumber = number.toString();
  return  convertedNumber.split("");
}

exports.extractDigits = extractDigits;
//---------------------------------------------

const isEven  = function(element) {
  return element % 2 == 0;
}

const findEvenNumbers = function (numbers) {
  let evenNum = []; // Unnecessary variable
  evenNum =  numbers.filter(isEven);
  return evenNum;
}
exports.findEvenNumbers = findEvenNumbers;
//----------------------------------------------

const checkGreaterNumber = function (firstNumber,secondNumber) {
  return Math.max(firstNumber,secondNumber);
}

const findGreatestNumber = function (numbersList) { // Does not work with empty list
  return numbersList.reduce(checkGreaterNumber);
}
exports.findGreatest = findGreatestNumber;
//----------------------------------------------

const checkSmallerNumber = function (firstNumber,secondNumber) {
  return Math.min(firstNumber,secondNumber);
}

const findLowestNumber = function (numbersList) { // Does not work with empty list
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
// Its good you used a standard function. However as part of this exervise try implementing reverse yourself, without using reverse function on array.
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
// Its slightly complicated implementation. Here your index == -1 is being used as a flag
// Another approach is to use first use a filter and then a head operation. implement and compare.
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

// use higher order functions to do this
const intersectionOfArrays = function (firstList,secondList) { // its not intersectionOfArrays, but intersectionOfSets
  firstList = uniqueElements(firstList); // thse are not Lists, but sets
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

// Good you used early returns instead of flags :) 
// However implement this using a HOF (higher order function)
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
// Good use of early returns. Use HOF to implement same
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

// As of now this function does not seem very useful - it can easily be replaced with [first,second] -- am I missing something?
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
