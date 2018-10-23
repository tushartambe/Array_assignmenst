const rotateArray = require('../libs/rotateArrayLib.js').rotateArray;

const assert = require('assert');

assert.deepEqual(rotateArray([4],4),[4]);

assert.deepEqual(rotateArray([3,5,6],1),[6,3,5]);

assert.deepEqual(rotateArray([4,5],1),[4,5]);

assert.deepEqual(rotateArray([2,0,3,1,],0),[0,3,1,2]);

assert.deepEqual(rotateArray([34,23,22,43,4],2),[43,4,34,23,22]);
