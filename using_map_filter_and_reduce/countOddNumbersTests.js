const totalOddNumbers = require('./countOddNumbersLib.js').totalOddNumbers;
const assert = require('assert');

//for empty array
assert.deepEqual(totalOddNumbers([]),0); 

//for only one value
assert.deepEqual(totalOddNumbers([3]),1);

//for one digit values
assert.deepEqual(totalOddNumbers([3,5]),2);
//for negative value
assert.deepEqual(totalOddNumbers([4,-2,5]),1);

//for all even numbers
assert.deepEqual(totalOddNumbers([2,0]),0);

assert.deepEqual(totalOddNumbers([23,405,12,0,75,9,7,2]),5);
