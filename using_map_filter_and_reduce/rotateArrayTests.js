const rotateArray = require('./rotateArrayLib.js').rotateArray;

const assert = require('assert');

assert.deepEqual(rotateArray([4],4),[4]);

assert.deepEqual(rotateArray([3,5,6],5),[6,3,5]);

assert.deepEqual(rotateArray([4,5],5),[4,5]);

assert.deepEqual(rotateArray([2,0,3,1,],2),[0,3,1,2]);

assert.deepEqual(rotateArray([34,23,22,43,4],22),[43,4,34,23,22]);
