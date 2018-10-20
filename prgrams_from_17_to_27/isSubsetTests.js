const isSubset = require('./isSubsetLib.js').isSubset;

const assert = require('assert');

assert.deepEqual(isSubset([1],[1]),false); 

assert.deepEqual(isSubset([2,4],[3]),false);
  
assert.deepEqual(isSubset([3,5],[3]),true);

assert.deepEqual(isSubset([2,3,4,2,3],[3,6]),false);

assert.deepEqual(isSubset([1,1,0,3,5,3,7],[7,1,0]),true);
