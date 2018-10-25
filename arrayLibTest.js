const uniqueElements = require('./arrayLib.js').uniqueElements;
const assert = require('assert');
assert.deepEqual(uniqueElements([1]),[1]); 
assert.deepEqual(uniqueElements([2,4]),[2,4]);
assert.deepEqual(uniqueElements([3,3]),[3]);
assert.deepEqual(uniqueElements([2,3,4,2,3]),[2,3,4]);
assert.deepEqual(uniqueElements([1,1,0,3,5,3,2]),[1,0,3,5,2]);

//----------------------------------------------

const calculateAverage = require('./arrayLib.js').calculateAverage;
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

//----------------------------------------------

const countEvens = require('./arrayLib.js').countEvens;

assert.deepEqual(countEvens([]),0); 
assert.deepEqual(countEvens([4]),1);
assert.deepEqual(countEvens([3,5]),0);
assert.deepEqual(countEvens([4,-2,5]),2);
assert.deepEqual(countEvens([2,0]),2);
assert.deepEqual(countEvens([23,405,12,0,75,9,7,2]),3);
//----------------------------------------------

const countNumbersAbove = require('./arrayLib.js').countNumbersAbove;

assert.deepEqual(countNumbersAbove([],4),0); 
assert.deepEqual(countNumbersAbove([4],2),1);
assert.deepEqual(countNumbersAbove([3,5],6),0);
assert.deepEqual(countNumbersAbove([4,-2,5],0),2);
assert.deepEqual(countNumbersAbove([2,0,2,1,],2),0);
assert.deepEqual(countNumbersAbove([23,405,12,0,75,9,7,2],10),4);
//----------------------------------------------

const countNumbersBelow = require('./arrayLib.js').countNumbersBelow;

assert.deepEqual(countNumbersBelow([],4),0); 
assert.deepEqual(countNumbersBelow([4],2),0);
assert.deepEqual(countNumbersBelow([3,5],4),1);
assert.deepEqual(countNumbersBelow([4,-2,5],0),1);
assert.deepEqual(countNumbersBelow([2,0,2,1,],2),2);
assert.deepEqual(countNumbersBelow([23,405,12,0,75,9,7,2],10),4);
//----------------------------------------------

const totalOddNumbers = require('./arrayLib.js').totalOddNumbers;
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
//----------------------------------------------

const differentElements = require('./arrayLib.js').differentElements;

assert.deepEqual(differentElements([1],[1]),[]); 
assert.deepEqual(differentElements([2,4],[3,2]),[4]);
assert.deepEqual(differentElements([3,3,5],[3,6,1,5,2]),[]);
assert.deepEqual(differentElements([2,3,4,2,3],[3,6]),[2,4]);
assert.deepEqual(differentElements([1,1,0,3,5,3,7],[7,7,88]),[1,0,3,5]);
//----------------------------------------------

const extractDigits = require('./arrayLib.js').extractDigits;

assert.deepEqual(extractDigits(2),[2]); 
assert.deepEqual(extractDigits(45),[4,5]);
assert.deepEqual(extractDigits(765),[7,6,5]);
assert.deepEqual(extractDigits(87234),[8,7,2,3,4]);
assert.deepEqual(extractDigits(65),[6,5]);
//----------------------------------------------

const findEvenNumbers = require('./arrayLib.js').findEvenNumbers;

assert.deepEqual(findEvenNumbers([2]),[2]);
assert.deepEqual(findEvenNumbers([3]),[]);
assert.deepEqual(findEvenNumbers([3,4,5]),[4]);
assert.deepEqual(findEvenNumbers([4,5]),[4]);
assert.deepEqual(findEvenNumbers([3,6,2,1,8,7]),[6,2,8]);
//----------------------------------------------

const findGreatestNumber = require('./arrayLib.js').findGreatest;

//for empty array
assert.equal(findGreatestNumber([-1,-2,-4,-4]),-1); 
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
//---------------------------------------------------

const findLowestNumber = require('./arrayLib.js').findLowest;

//for empty array
assert.equal(findLowestNumber([-1,-2,-4,-4]),-4); 
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

//------------------------------------------------
const findOddNumbers = require('./arrayLib.js').findOddNumbers;

assert.deepEqual(findOddNumbers([3]),[3]);
assert.deepEqual(findOddNumbers([4]),[]);
assert.deepEqual(findOddNumbers([3,4,5]),[3,5]);
assert.deepEqual(findOddNumbers([4,4]),[]);
assert.deepEqual(findOddNumbers([3,6,2,1,8,7]),[3,1,7]);

//------------------------------------------------------
const reversedList = require('./arrayLib.js').reversedList;

assert.deepEqual(reversedList([3]),[3]);
assert.deepEqual(reversedList([4,3]),[3,4]);
assert.deepEqual(reversedList([3,4,5]),[5,4,3]);
assert.deepEqual(reversedList([3,6,2,1,8,7]),[7,8,1,2,6,3]);
//---------------------------------------------------------

const findSum = require('./arrayLib.js').findSum;

assert.deepEqual(findSum([3]),3);
assert.deepEqual(findSum([4,3]),7);
assert.deepEqual(findSum([3,4,5]),12);
assert.deepEqual(findSum([3,6,2,1,8,7]),27);

//---------------------------------------------------------
const findFirstPosition = require('./arrayLib.js').findFirstPosition;

assert.deepEqual(findFirstPosition([4],2),-1);
assert.deepEqual(findFirstPosition([3,5,6],6),2);
assert.deepEqual(findFirstPosition([4,-2,5],0),-1);
assert.deepEqual(findFirstPosition([2,0,2,1,],2),0);
assert.deepEqual(findFirstPosition([23,405,12,10,75,9,7,2],10),3);
//----------------------------------------------------------
const intersectionOfArrays = require('./arrayLib.js').intersectionOfArrays;

assert.deepEqual(intersectionOfArrays([1],[2]),[]); 
assert.deepEqual(intersectionOfArrays([2,4],[3]),[]);
assert.deepEqual(intersectionOfArrays([3,3,5],[3,6,1,5,2]),[3,5]);
assert.deepEqual(intersectionOfArrays([2,3,4,2,3],[3,6]),[3]);
assert.deepEqual(intersectionOfArrays([1,1,0,3,5,3,7],[7,7,88]),[7]);
//--------------------------------------------------------

const isAscending = require('./arrayLib.js').isAscending;

assert.equal(isAscending([4]),true);
assert.equal(isAscending([3,5]),true);
assert.equal(isAscending([4,-2,5]),false);
assert.equal(isAscending([2,0]),false);
assert.equal(isAscending([23,405,12,0,75,9,7,2]),false);
//-----------------------------------------------------------

const isDescending = require('./arrayLib.js').isDescending;

assert.equal(isDescending([4]),true);
assert.equal(isDescending([3,5]),false);
assert.equal(isDescending([4,-2,5]),false);
assert.equal(isDescending([2,0]),true);
assert.equal(isDescending([5,2,1]),true);
assert.equal(isDescending([23,405,12,0,75,9,7,2]),false);
//----------------------------------------------------------

const isSubset = require('./arrayLib.js').isSubset;

assert.deepEqual(isSubset([1],[1]),false); 
assert.deepEqual(isSubset([2,4],[3]),false);
assert.deepEqual(isSubset([3,5],[3]),true);
assert.deepEqual(isSubset([2,3,4,2,3],[3,6]),false);
assert.deepEqual(isSubset([1,1,0,3,5,3,7],[7,1,0]),true);
//--------------------------------------------------------------

const lengthOfEveryElement = require('./arrayLib.js').lengthOfEveryElement;
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

//----------------------------------------------------------------

const partitionOfArray = require('./arrayLib.js').partitionOfArray;

assert.deepEqual(partitionOfArray([1],1),[[1],[]]); 
assert.deepEqual(partitionOfArray([2,4],4),[[2,4],[]]);
assert.deepEqual(partitionOfArray([3,6,1,5,2],5),[[1,2,3,5],[6]]);
assert.deepEqual(partitionOfArray([2,3,4,2,3],2),[[2,2],[3,3,4]]);
assert.deepEqual(partitionOfArray([1,1,0,3,5,3,7],4),[[0,1,1,3,3],[5,7]]);
//--------------------------------------------------------------------

const fibSeries = require('./arrayLib.js').fibSeries;

assert.deepEqual(fibSeries(2),[1,0]);
assert.deepEqual(fibSeries([3]),[1,1,0]);
assert.deepEqual(fibSeries([]),[]);
assert.deepEqual(fibSeries([5]),[3,2,1,1,0]);
assert.deepEqual(fibSeries([8]),[13,8,5,3,2,1,1,0]);
//----------------------------------------------------------

const rotateArray = require('./arrayLib.js').rotateArray;

assert.deepEqual(rotateArray([4],4),[4]);
assert.deepEqual(rotateArray([3,5,6],1),[6,3,5]);
assert.deepEqual(rotateArray([4,5],1),[4,5]);
assert.deepEqual(rotateArray([2,0,3,1,],0),[0,3,1,2]);
assert.deepEqual(rotateArray([34,23,22,43,4],2),[43,4,34,23,22]);
//-----------------------------------------------------------

const selectAlternateNumbers = require('./arrayLib.js').selectAlternateNumbers;

assert.deepEqual(selectAlternateNumbers([3]),[3]);
assert.deepEqual(selectAlternateNumbers([4,3]),[4]);
assert.deepEqual(selectAlternateNumbers([3,4,5]),[3,5]);
assert.deepEqual(selectAlternateNumbers([]),[]);
assert.deepEqual(selectAlternateNumbers([3,6,2,1,8,7]),[3,2,8]);
//-------------------------------------------------------

const unionOfArrays = require('./arrayLib.js').unionOfArrays;

assert.deepEqual(unionOfArrays([1],[2]),[1,2]); 
assert.deepEqual(unionOfArrays([2,4],[3]),[2,4,3]);
assert.deepEqual(unionOfArrays([3,3,5],[3,6,1,5,2]),[3,5,6,1,2]);
assert.deepEqual(unionOfArrays([2,3,4,2,3],[3,6]),[2,3,4,6]);
assert.deepEqual(unionOfArrays([1,1,0,3,5,3,2],[7,7,88]),[1,0,3,5,2,7,88]);
//------------------------------------------------------------------

const zipOfArrays = require('./arrayLib.js').zipOfArrays;

assert.deepEqual(zipOfArrays([1],[2]),[[1,2]]); 
assert.deepEqual(zipOfArrays([2,4],[3]),[[2,3]]);
assert.deepEqual(zipOfArrays([3,3,5],[3,6,1,5,2]),[[3,3],[3,6],[5,1]]);
assert.deepEqual(zipOfArrays([2,3,4,2,3],[3,6,0]),[[2,3],[3,6],[4,0]]);
assert.deepEqual(zipOfArrays([1,1,0,3,5,3,7],[7,7,88]),[[1,7],[1,7],[0,88]]);
