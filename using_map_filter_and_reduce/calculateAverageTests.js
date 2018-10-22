const calculateAverage = require('./calculateAverageLib.js').calculateAverage;
const assert = require('assert');

//for empty array
assert.equal(calculateAverage([0,-2,-4,-4]),-2.5); 
//for only one value
assert.equal(calculateAverage([3]),3);
//for one digit values
assert.equal(calculateAverage([3,5]),4);
//for negative value
assert.equal(calculateAverage([4,-2,4,2]),2);
//for multiple digit numbers
assert.equal(calculateAverage([23,40,1,0]),16);
