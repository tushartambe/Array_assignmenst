const numbers = require('./findOddnumbersLib.js');
const assert = require('assert');

let inputArray = [];
let outputArray = [];
inputArray[1]=[3];
outputArray[1] = [3];
inputArray[2]=[4];
outputArray[2] = [];
inputArray[3]=[3,4,5];
outputArray[3] = [3,5];
inputArray[4]=[4,4];
outputArray[4] = [];
inputArray[5]=[3,6,2,1,8,7];
outputArray[5] = [3,1,7];

for(let index=1; index< inputArray.length; index++) {
assert.deepEqual(numbers.findOddNumbers(inputArray[index]),outputArray[index]);
}
