const uniqueElements = require('./arrayOfUniqueElementsLib.js').uniqueElements;

const assert = require('assert');
assert.deepEqual(uniqueElements([1]),[1]); 

assert.deepEqual(uniqueElements([2,4]),[2,4]);

assert.deepEqual(uniqueElements([3,3]),[3]);

assert.deepEqual(uniqueElements([2,3,4,2,3]),[2,3,4]);

assert.deepEqual(uniqueElements([1,1,0,3,5,3,2]),[1,0,3,5,2]);
