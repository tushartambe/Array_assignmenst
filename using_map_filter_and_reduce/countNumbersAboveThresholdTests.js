const countNumbersAbove = require('./countNumbersAboveThresholdLib.js').countNumbersAbove;
const assert = require('assert');

assert.deepEqual(countNumbersAbove([],4),0); 
assert.deepEqual(countNumbersAbove([4],2),1);
assert.deepEqual(countNumbersAbove([3,5],6),0);
assert.deepEqual(countNumbersAbove([4,-2,5],0),2);
assert.deepEqual(countNumbersAbove([2,0,2,1,],2),0);
assert.deepEqual(countNumbersAbove([23,405,12,0,75,9,7,2],10),4);
