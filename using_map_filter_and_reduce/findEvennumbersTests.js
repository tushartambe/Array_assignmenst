const numbers = require('./findEvennumbersLib.js');
const assert = require('assert');

let inputArray = [];
let outputArray = [];
inputArray[1]=[2];
outputArray[1] = [2];
inputArray[2]=[3];
outputArray[2] = [];
inputArray[3]=[3,4,5];
outputArray[3] = [4];
inputArray[4]=[4,5];
outputArray[4] = [4];
inputArray[5]=[3,6,2,1,8,7];
outputArray[5] = [6,2,8];

for(let index=1; index< inputArray.length; index++) {
assert.deepEqual(numbers.findEvenNumbers(inputArray[index]),outputArray[index]);
}
