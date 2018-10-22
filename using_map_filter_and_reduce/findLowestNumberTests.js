const findLowestNumber = require('./findLowestNumberLib.js').findLowest;
const assert = require('assert');

//for empty array
assert.equal(findLowestNumber([-1,-2,-4,-4]),-4); 
//for only one value
assert.equal(findLowestNumber([3]),3);
//for one digit values
assert.equal(findLowestNumber([3,5]),3);
//for negative value
assert.equal(findLowestNumber([4,-2,5]),-2);
//for multiple digit numbers
assert.equal(findLowestNumber([23,405,1,0]),0);

assert.equal(findLowestNumber([23,405,Infinity,10]),10);

assert.equal(findLowestNumber([-Infinity,405,Infinity,0]),-Infinity);

