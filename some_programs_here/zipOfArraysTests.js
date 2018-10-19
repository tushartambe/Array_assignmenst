const zipOfArrays = require('./zipOfArraysLib.js').zipOfArrays;

const assert = require('assert');
assert.deepEqual(zipOfArrays([1],[2]),[[1,2]]); 

assert.deepEqual(zipOfArrays([2,4],[3]),[[2,3]]);

assert.deepEqual(zipOfArrays([3,3,5],[3,6,1,5,2]),[[3,3],[3,6],[5,1]]);

assert.deepEqual(zipOfArrays([2,3,4,2,3],[3,6]),[[2,3,0],[3,6],[4,0]]);

assert.deepEqual(zipOfArrays([1,1,0,3,5,3,7],[7,7,88]),[[1,7],[1,7][0,88]]);
