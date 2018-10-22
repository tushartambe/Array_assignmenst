const extractDigits = require('./extractDigitsLib.js').extractDigits;
const assert = require('assert');

assert.deepEqual(extractDigits(2),[2]); 
assert.deepEqual(extractDigits(45),[4,5]);
assert.deepEqual(extractDigits(765),[7,6,5]);
assert.deepEqual(extractDigits(87234),[8,7,2,3,4]);
assert.deepEqual(extractDigits(65),[6,5]);
