const numbers = require('./findReverseOfArrayLib.js');
const assert = require('assert');

let inputArray = [];
let outputArray = [];
inputArray[1]=[3];
outputArray[1] = [3];
inputArray[2]=[4,3];
outputArray[2] = [3,4];
inputArray[3]=[3,4,5];
outputArray[3] = [5,4,3];
inputArray[4]=[];
outputArray[4] = [];
inputArray[5]=[3,6,2,1,8,7];
outputArray[5] = [7,8,1,2,6,3];

for(let index=1; index< inputArray.length; index++) {
assert.deepEqual(numbers.findReverse(inputArray[index]),outputArray[index]);
}
