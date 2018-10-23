const intersectionOfArrays = require('../libs/intersectionOfArraysLib.js').intersectionOfArrays;

const assert = require('assert');
assert.deepEqual(intersectionOfArrays([1],[2]),[]); 

assert.deepEqual(intersectionOfArrays([2,4],[3]),[]);

assert.deepEqual(intersectionOfArrays([3,3,5],[3,6,1,5,2]),[3,5]);

assert.deepEqual(intersectionOfArrays([2,3,4,2,3],[3,6]),[3]);

assert.deepEqual(intersectionOfArrays([1,1,0,3,5,3,7],[7,7,88]),[7]);
