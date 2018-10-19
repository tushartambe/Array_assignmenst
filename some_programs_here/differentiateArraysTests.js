const differentElements = require('./differentiateArraysLib.js').differentElements;

const assert = require('assert');

assert.deepEqual(differentElements([1],[1]),[]); 

assert.deepEqual(differentElements([2,4],[3,2]),[4]);

assert.deepEqual(differentElements([3,3,5],[3,6,1,5,2]),[]);

assert.deepEqual(differentElements([2,3,4,2,3],[3,6]),[2,4]);

assert.deepEqual(differentElements([1,1,0,3,5,3,7],[7,7,88]),[1,0,3,5]);
