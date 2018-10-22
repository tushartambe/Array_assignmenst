const lengthOfEveryElement = require('./mappingLengthsLib.js').lengthOfEveryElement;

const assert = require('assert');
//for empty string
assert.deepEqual(lengthOfEveryElement([""]),[0]); 

//for one string
assert.deepEqual(lengthOfEveryElement(["tushar"]),[6]);

//for 2 strings
assert.deepEqual(lengthOfEveryElement(["hi","h"]),[2,1]);

//for multiple strings
assert.deepEqual(lengthOfEveryElement(["hello","name","mr","kjsdads"]),[5,4,2,7]);

//for multiple combinations
assert.deepEqual(lengthOfEveryElement(["h","","auy","abcde","34"]),[1,0,3,5,2]);
