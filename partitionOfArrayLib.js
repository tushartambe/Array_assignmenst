const sortArray = function(array) {
  let swapVar;
  for(let firstIndex = 0; firstIndex < array.length; firstIndex++) {
    for( let secondIndex =0; secondIndex < array.length-1; secondIndex++) {
      if( array[secondIndex] > array[secondIndex + 1]) {
        swapVar = array[secondIndex];
        array[secondIndex] = array[secondIndex + 1];
        array[secondIndex + 1] = swapVar;
      }
    }
  }
  return array;
}

const smallerNumbers = function(array,number) {
  let matchedNumbers = [];

  for(let counter=0; counter < array.length; counter++) {
    if(array[counter] <= number) {
      matchedNumbers.push(array[counter]);
    }
  }
  return matchedNumbers;
}

const biggerNumbers = function(array,number) {
    let matchedNumbers = [];

  for(let counter=0; counter < array.length; counter++) {
    if(array[counter] > number) {
      matchedNumbers.push(array[counter]);
    }
  }
  return matchedNumbers;
}

const partitionOfArray = function (array,number) {
  let partitions = [];
  let sortedArray = sortArray(array);

  partitions[0] = smallerNumbers(sortedArray,number);
  partitions[1] = biggerNumbers(sortedArray,number);

  return partitions;
}
exports.partitionOfArray = partitionOfArray;
