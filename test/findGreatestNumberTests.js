const findGreatestNumber = require('./findGreatestNumberLib.js').findGreatest;
const assert = require('assert');

//for empty array
assert.equal(findGreatestNumber([-1,-2,-4,-4]),-1); 
//for only one value
assert.equal(findGreatestNumber([3]),3);
//for one digit values
assert.equal(findGreatestNumber([3,5]),5);
//for negative value
assert.equal(findGreatestNumber([4,-2,5]),5);
//for multiple digit numbers
assert.equal(findGreatestNumber([23,405,1,0]),405);

assert.equal(findGreatestNumber([23,405,Infinity,0]),Infinity);

assert.equal(findGreatestNumber([-Infinity,405,Infinity,0]),Infinity);

