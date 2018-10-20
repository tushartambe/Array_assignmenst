const unionOfArrays = require('./unionOfArraysLib.js').unionOfArrays;

const assert = require('assert');
assert.deepEqual(unionOfArrays([1],[2]),[1,2]); 

assert.deepEqual(unionOfArrays([2,4],[3]),[2,4,3]);

assert.deepEqual(unionOfArrays([3,3,5],[3,6,1,5,2]),[3,5,6,1,2]);

assert.deepEqual(unionOfArrays([2,3,4,2,3],[3,6]),[2,3,4,6]);

assert.deepEqual(unionOfArrays([1,1,0,3,5,3,2],[7,7,88]),[1,0,3,5,2,7,88]);
