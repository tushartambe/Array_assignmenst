const findFirstPosition = require('./fisrtPositionOfNumberLib.js').findFirstPosition;
const assert = require('assert');

assert.deepEqual(findFirstPosition([4],2),"");
assert.deepEqual(findFirstPosition([3,5,6],6),2);
assert.deepEqual(findFirstPosition([4,-2,5],0),"");
assert.deepEqual(findFirstPosition([2,0,2,1,],2),0);
assert.deepEqual(findFirstPosition([23,405,12,10,75,9,7,2],10),3);
