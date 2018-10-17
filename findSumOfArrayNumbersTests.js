const numbers = require('./findSumOfArrayNumbersLib.js');
const assert = require('assert');

let inputArray = [];
let outputArray = [];
inputArray[1]=[3];
outputArray[1] = 3;
inputArray[2]=[4,3];
outputArray[2] = 7;
inputArray[3]=[3,4,5];
outputArray[3] = 12;
inputArray[4]=[];
outputArray[4] ="";
inputArray[5]=[3,6,2,1,8,7];
outputArray[5] = 27;

for(let index=1; index< inputArray.length; index++) {
assert.deepEqual(numbers.findSum(inputArray[index]),outputArray[index]);
}
