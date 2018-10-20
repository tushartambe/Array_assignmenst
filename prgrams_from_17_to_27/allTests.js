const assert = require('assert');
//---------------------------------

const uniqueElements = require('./arrayOfUniqueElementsLib.js').uniqueElements;

assert.deepEqual(uniqueElements([1]),[1]); 

assert.deepEqual(uniqueElements([2,4]),[2,4]);

assert.deepEqual(uniqueElements([3,3]),[3]);

assert.deepEqual(uniqueElements([2,3,4,2,3]),[2,3,4]);

assert.deepEqual(uniqueElements([1,1,0,3,5,3,2]),[1,0,3,5,2]);
//-----------------------------------------------------------------------

const differentElements = require('./differentiateArraysLib.js').differentElements;

assert.deepEqual(differentElements([1],[1]),[]); 

assert.deepEqual(differentElements([2,4],[3,2]),[4]);

assert.deepEqual(differentElements([3,3,5],[3,6,1,5,2]),[]);

assert.deepEqual(differentElements([2,3,4,2,3],[3,6]),[2,4]);

assert.deepEqual(differentElements([1,1,0,3,5,3,7],[7,7,88]),[1,0,3,5]);
//-----------------------------------------------------------------------

const extractDigits = require('./extractDigitsLib.js').extractDigits;

assert.deepEqual(extractDigits(2),[2]); 
assert.deepEqual(extractDigits(45),[4,5]);
assert.deepEqual(extractDigits(765),[7,6,5]);
assert.deepEqual(extractDigits(87234),[8,7,2,3,4]);
assert.deepEqual(extractDigits(65),[6,5]);
//-----------------------------------------------------------------------
const findFirstPosition = require('./fisrtPositionOfNumberLib.js').findFirstPosition;

assert.deepEqual(findFirstPosition([4],2),"");
assert.deepEqual(findFirstPosition([3,5,6],6),2);
assert.deepEqual(findFirstPosition([4,-2,5],0),"");
assert.deepEqual(findFirstPosition([2,0,2,1,],2),0);
assert.deepEqual(findFirstPosition([23,405,12,10,75,9,7,2],10),3);
//-----------------------------------------------------------------------

const intersectionOfArrays = require('./intersectionOfArraysLib.js').intersectionOfArrays;

assert.deepEqual(intersectionOfArrays([1],[2]),[]); 

assert.deepEqual(intersectionOfArrays([2,4],[3]),[]);

assert.deepEqual(intersectionOfArrays([3,3,5],[3,6,1,5,2]),[3,5]);

assert.deepEqual(intersectionOfArrays([2,3,4,2,3],[3,6]),[3]);

assert.deepEqual(intersectionOfArrays([1,1,0,3,5,3,7],[7,7,88]),[7]);
//-----------------------------------------------------------------------

const isAscending = require('./isAscendingArrayLib.js').isAscending;

assert.equal(isAscending([]),""); 
assert.equal(isAscending([4]),true);
assert.equal(isAscending([3,5]),true);
assert.equal(isAscending([4,-2,5]),false);
assert.equal(isAscending([2,0]),false);
assert.equal(isAscending([23,405,12,0,75,9,7,2]),false);
//-----------------------------------------------------------------------

const isDescending = require('./isDescendingArrayLib.js').isDescending;

assert.equal(isDescending([]),""); 
assert.equal(isDescending([4]),true);
assert.equal(isDescending([3,5]),false);
assert.equal(isDescending([4,-2,5]),false);
assert.equal(isDescending([2,0]),true);
assert.equal(isDescending([5,2,1]),true);
assert.equal(isDescending([23,405,12,0,75,9,7,2]),false);
//-----------------------------------------------------------------------

const isSubset = require('./isSubsetLib.js').isSubset;

assert.deepEqual(isSubset([1],[1]),false); 

assert.deepEqual(isSubset([2,4],[3]),false);
  
assert.deepEqual(isSubset([3,5],[3]),true);

assert.deepEqual(isSubset([2,3,4,2,3],[3,6]),false);

assert.deepEqual(isSubset([1,1,0,3,5,3,7],[7,1,0]),true);
//-----------------------------------------------------------------------

const partitionOfArray = require('./partitionOfArrayLib.js').partitionOfArray;

assert.deepEqual(partitionOfArray([1],1),[[1],[]]); 

assert.deepEqual(partitionOfArray([2,4],4),[[2,4],[]]);

assert.deepEqual(partitionOfArray([3,6,1,5,2],5),[[1,2,3,5],[6]]);

assert.deepEqual(partitionOfArray([2,3,4,2,3],2),[[2,2],[3,3,4]]);

assert.deepEqual(partitionOfArray([1,1,0,3,5,3,7],4),[[0,1,1,3,3],[5,7]]);
//-----------------------------------------------------------------------

const rotateArray = require('./rotateArrayLib.js').rotateArray;

assert.deepEqual(rotateArray([4],4),[4]);

assert.deepEqual(rotateArray([3,5,6],5),[6,3,5]);

assert.deepEqual(rotateArray([4,5],5),[4,5]);

assert.deepEqual(rotateArray([2,0,3,1,],2),[0,3,1,2]);

assert.deepEqual(rotateArray([34,23,22,43,4],22),[43,4,34,23,22]);
//-----------------------------------------------------------------------

const unionOfArrays = require('./unionOfArraysLib.js').unionOfArrays;

assert.deepEqual(unionOfArrays([1],[2]),[1,2]); 

assert.deepEqual(unionOfArrays([2,4],[3]),[2,4,3]);

assert.deepEqual(unionOfArrays([3,3,5],[3,6,1,5,2]),[3,5,6,1,2]);

assert.deepEqual(unionOfArrays([2,3,4,2,3],[3,6]),[2,3,4,6]);

assert.deepEqual(unionOfArrays([1,1,0,3,5,3,2],[7,7,88]),[1,0,3,5,2,7,88]);
//-----------------------------------------------------------------------

const zipOfArrays = require('./zipOfArraysLib.js').zipOfArrays;

assert.deepEqual(zipOfArrays([1],[2]),[[1,2]]); 

assert.deepEqual(zipOfArrays([2,4],[3]),[[2,3]]);

assert.deepEqual(zipOfArrays([3,3,5],[3,6,1,5,2]),[[3,3],[6,3],[1,5]]);

assert.deepEqual(zipOfArrays([2,3,4,2,3],[3,6,0]),[[2,3],[3,6],[4,0]]);

assert.deepEqual(zipOfArrays([1,1,0,3,5,3,7],[7,7,88]),[[1,7],[1,7],[0,88]]);
