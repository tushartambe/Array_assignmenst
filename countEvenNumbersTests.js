const totalEvenNumbers = require('./countEvenNumbersLib.js').totalEvenNumbers;
const assert = require('assert');

assert.deepEqual(totalEvenNumbers([]),0); 
assert.deepEqual(totalEvenNumbers([4]),1);
assert.deepEqual(totalEvenNumbers([3,5]),0);
assert.deepEqual(totalEvenNumbers([4,-2,5]),2);
assert.deepEqual(totalEvenNumbers([2,0]),2);
assert.deepEqual(totalEvenNumbers([23,405,12,0,75,9,7,2]),3);
