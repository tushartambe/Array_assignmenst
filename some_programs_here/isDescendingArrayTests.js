const isDescending = require('./isDescendingArrayLib.js').isDescending;
const assert = require('assert');

assert.equal(isDescending([]),""); 
assert.equal(isDescending([4]),true);
assert.equal(isDescending([3,5]),true);
assert.equal(isDescending([4,-2,5]),false);
assert.equal(isDescending([2,0]),false);
assert.equal(isDescending([23,405,12,0,75,9,7,2]),false);
