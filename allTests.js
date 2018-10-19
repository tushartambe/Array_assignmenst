const assert = require('assert');
//---------------------------------------
const calculateAverage = require('./calculateAverageLib.js').calculateAverage;

//for empty array
assert.equal(calculateAverage([0,-2,-4,-4]),-2.5); 
//for only one value
assert.equal(calculateAverage([3]),3);
//for one digit values
assert.equal(calculateAverage([3,5]),4);
//for negative value
assert.equal(calculateAverage([4,-2,4,2]),2);
//for multiple digit numbers
assert.equal(calculateAverage([23,40,1,0]),16);
//-------------------------------------------------------------

const totalEvenNumbers = require('./countEvenNumbersLib.js').totalEvenNumbers;

assert.deepEqual(totalEvenNumbers([]),0); 
assert.deepEqual(totalEvenNumbers([4]),1);
assert.deepEqual(totalEvenNumbers([3,5]),0);
assert.deepEqual(totalEvenNumbers([4,-2,5]),2);
assert.deepEqual(totalEvenNumbers([2,0]),2);
assert.deepEqual(totalEvenNumbers([23,405,12,0,75,9,7,2]),3);
//-------------------------------------------------------------

const totalOddNumbers = require('./countOddNumbersLib.js').totalOddNumbers;

//for empty array
assert.deepEqual(totalOddNumbers([]),0); 

//for only one value
assert.deepEqual(totalOddNumbers([3]),1);

//for one digit values
assert.deepEqual(totalOddNumbers([3,5]),2);
//for negative value
assert.deepEqual(totalOddNumbers([4,-2,5]),1);

//for all even numbers
assert.deepEqual(totalOddNumbers([2,0]),0);

assert.deepEqual(totalOddNumbers([23,405,12,0,75,9,7,2]),5);
//-------------------------------------------------------------

const countNumbersAbove = require('./countNumbersAboveThresholdLib.js').countNumbersAbove;

assert.deepEqual(countNumbersAbove([],4),0); 
assert.deepEqual(countNumbersAbove([4],2),1);
assert.deepEqual(countNumbersAbove([3,5],6),0);
assert.deepEqual(countNumbersAbove([4,-2,5],0),2);
assert.deepEqual(countNumbersAbove([2,0,2,1,],2),0);
assert.deepEqual(countNumbersAbove([23,405,12,0,75,9,7,2],10),4);
//-------------------------------------------------------------

const countNumbersBelow = require('./countNumbersBelowThresholdLib.js').countNumbersBelow;

assert.deepEqual(countNumbersBelow([],4),0); 
assert.deepEqual(countNumbersBelow([4],2),0);
assert.deepEqual(countNumbersBelow([3,5],4),1);
assert.deepEqual(countNumbersBelow([4,-2,5],0),1);
assert.deepEqual(countNumbersBelow([2,0,2,1,],2),2);
assert.deepEqual(countNumbersBelow([23,405,12,0,75,9,7,2],10),4);
//-------------------------------------------------------------

const findEvenNumbers = require('./findEvennumbersLib.js').findEvenNumbers;

let inputArray = [];
let outputArray = [];
inputArray[1]=[2];
outputArray[1] = [2];
inputArray[2]=[3];
outputArray[2] = [];
inputArray[3]=[3,4,5];
outputArray[3] = [4];
inputArray[4]=[4,5];
outputArray[4] = [4];
inputArray[5]=[3,6,2,1,8,7];
outputArray[5] = [6,2,8];

for(let index=1; index< inputArray.length; index++) {
assert.deepEqual(findEvenNumbers(inputArray[index]),outputArray[index]);
}
//-------------------------------------------------------------

const findOddNumbers = require('./findOddnumbersLib.js').findOddNumbers;

inputArray = [];
outputArray = [];
inputArray[1]=[3];
outputArray[1] = [3];
inputArray[2]=[4];
outputArray[2] = [];
inputArray[3]=[3,4,5];
outputArray[3] = [3,5];
inputArray[4]=[4,4];
outputArray[4] = [];
inputArray[5]=[3,6,2,1,8,7];
outputArray[5] = [3,1,7];

for(let index=1; index< inputArray.length; index++) {
assert.deepEqual(findOddNumbers(inputArray[index]),outputArray[index]);
}
//---------------------------------------------------------------
const findGreatestNumber = require('./findGreatestNumberLib.js').findGreatest;

//for empty array
assert.equal(findGreatestNumber([-1,-2,-4,-4]),-1); 
assert.equal(findGreatestNumber([]),undefined); 
//for only one value
assert.equal(findGreatestNumber([3]),3);
//for one digit values
assert.equal(findGreatestNumber([3,5]),5);
//for negative value
assert.equal(findGreatestNumber([4,-2,5]),5);
//for multiple digit numbers
assert.equal(findGreatestNumber([23,405,1,0]),405);

assert.equal(findGreatestNumber([23,405,Infinity,0]),Infinity);

assert.equal(findGreatestNumber([-Infinity,405,Infinity,0]),Infinity);
//-------------------------------------------------------------

const findLowestNumber = require('./findLowestNumberLib.js').findLowest;

//for empty array
assert.equal(findLowestNumber([-1,-2,-4,-4]),-4); 
assert.equal(findLowestNumber([]),undefined); 
//for only one value
assert.equal(findLowestNumber([3]),3);
//for one digit values
assert.equal(findLowestNumber([3,5]),3);
//for negative value
assert.equal(findLowestNumber([4,-2,5]),-2);
//for multiple digit numbers
assert.equal(findLowestNumber([23,405,1,0]),0);

assert.equal(findLowestNumber([23,405,Infinity,10]),10);

assert.equal(findLowestNumber([-Infinity,405,Infinity,0]),-Infinity);

//-------------------------------------------------------------

const findReverse = require('./findReverseOfArrayLib.js').findReverse;

inputArray = [];
outputArray = [];
inputArray[1]=[3];
outputArray[1] = [3];
inputArray[2]=[4,3];
outputArray[2] = [3,4];
inputArray[3]=[3,4,5];
outputArray[3] = [5,4,3];
inputArray[4]=[];
outputArray[4] = [];
inputArray[5]=[3,6,2,1,8,7];
outputArray[5] = [7,8,1,2,6,3];

for(let index=1; index< inputArray.length; index++) {
assert.deepEqual(findReverse(inputArray[index]),outputArray[index]);
}
//-------------------------------------------------------------

const findSum = require('./findSumOfArrayNumbersLib.js').findSum;

inputArray = [];
outputArray = [];
inputArray[1]=[3];
outputArray[1] = 3;
inputArray[2]=[4,3];
outputArray[2] = 7;
inputArray[3]=[3,4,5];
outputArray[3] = 12;
inputArray[4]=[];
outputArray[4] ="";
inputArray[5]=[3,6,2,1,8,7];
outputArray[5] = 27;

for(let index=1; index< inputArray.length; index++) {
assert.deepEqual(findSum(inputArray[index]),outputArray[index]);
}
//-------------------------------------------------------------

const lengthOfEveryElement = require('./mappingLengthsLib.js').lengthOfEveryElement;

//for empty string
assert.deepEqual(lengthOfEveryElement([""]),[0]); 

//for one string
assert.deepEqual(lengthOfEveryElement(["tushar"]),[6]);

//for 2 strings
assert.deepEqual(lengthOfEveryElement(["hi","h"]),[2,1]);

//for multiple strings
assert.deepEqual(lengthOfEveryElement(["hello","name","mr","kjsdads"]),[5,4,2,7]);

//for multiple combinations
assert.deepEqual(lengthOfEveryElement(["h","","auy","abcde","34"]),[1,0,3,5,2]);
//-------------------------------------------------------------

const fibSeries = require('./reverseFibSeriesLib.js').fibSeries;

inputArray = [];
outputArray = [];
inputArray[1]=2;
outputArray[1] = [1,0];
inputArray[2]=[3];
outputArray[2] = [1,1,0];
inputArray[3]=[];
outputArray[3] = [];
inputArray[4]=[5];
outputArray[4] = [3,2,1,1,0];
inputArray[5]=[8];
outputArray[5] = [13,8,5,3,2,1,1,0];

for(let index=1; index< inputArray.length; index++) {
assert.deepEqual(fibSeries(inputArray[index]),outputArray[index]);
}

//-------------------------------------------------------------

const EverySecondNumbers = require('./selectEverySecondNumberLib.js').EverySecondNumbers;

inputArray = [];
outputArray = [];
inputArray[1]=[3];
outputArray[1] = [3];
inputArray[2]=[4,3];
outputArray[2] = [4];
inputArray[3]=[3,4,5];
outputArray[3] = [3,5];
inputArray[4]=[];
outputArray[4] = [];
inputArray[5]=[3,6,2,1,8,7];
outputArray[5] = [3,2,8];

for(let index=1; index< inputArray.length; index++) {
assert.deepEqual(EverySecondNumbers(inputArray[index]),outputArray[index]);
}
//-------------------------------------------------------------

