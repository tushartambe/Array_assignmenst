const numbers = require('./reverseFibSeriesLib.js');
const assert = require('assert');

let inputArray = [];
let outputArray = [];
inputArray[1]=2;
outputArray[1] = [1,0];
inputArray[2]=[3];
outputArray[2] = [1,1,0];
inputArray[3]=[];
outputArray[3] = [];
inputArray[4]=[5];
outputArray[4] = [3,2,1,1,0];
inputArray[5]=[8];
outputArray[5] = [13,8,5,3,2,1,1,0];

for(let index=1; index< inputArray.length; index++) {
assert.deepEqual(numbers.fibSeries(inputArray[index]),outputArray[index]);
}

