const isAscending = require('../libs/isAscendingArrayLib.js').isAscending;
const assert = require('assert');

assert.equal(isAscending([4]),true);
assert.equal(isAscending([3,5]),true);
assert.equal(isAscending([4,-2,5]),false);
assert.equal(isAscending([2,0]),false);
assert.equal(isAscending([23,405,12,0,75,9,7,2]),false);
