const countNumbersBelow = require('./countNumbersBelowThresholdLib.js').countNumbersBelow;
const assert = require('assert');

assert.deepEqual(countNumbersBelow([],4),0); 
assert.deepEqual(countNumbersBelow([4],2),0);
assert.deepEqual(countNumbersBelow([3,5],4),1);
assert.deepEqual(countNumbersBelow([4,-2,5],0),1);
assert.deepEqual(countNumbersBelow([2,0,2,1,],2),2);
assert.deepEqual(countNumbersBelow([23,405,12,0,75,9,7,2],10),4);
