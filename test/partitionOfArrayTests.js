const partitionOfArray = require('../libs/partitionOfArrayLib.js').partitionOfArray;

const assert = require('assert');

assert.deepEqual(partitionOfArray([1],1),[[1],[]]); 

assert.deepEqual(partitionOfArray([2,4],4),[[2,4],[]]);

assert.deepEqual(partitionOfArray([3,6,1,5,2],5),[[1,2,3,5],[6]]);

assert.deepEqual(partitionOfArray([2,3,4,2,3],2),[[2,2],[3,3,4]]);

assert.deepEqual(partitionOfArray([1,1,0,3,5,3,7],4),[[0,1,1,3,3],[5,7]]);
