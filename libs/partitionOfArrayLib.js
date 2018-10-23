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

const seperateNumbers = function (state,element){
  let {smallerNumbers,biggerNumbers,number} = state;
  if( element <= state.number) {
    smallerNumbers = smallerNumbers.concat(element);
    return {smallerNumbers :smallerNumbers,biggerNumbers:biggerNumbers,number:number};
  }

  biggerNumbers = biggerNumbers.concat(element);
  return {smallerNumbers :smallerNumbers,biggerNumbers:biggerNumbers,number:number};
}

const partitionOfArray = function (array,number) {
  let sortedArray = sortArray(array);
  let partitions = [];
  partitions[0] = array.reduce(seperateNumbers,{smallerNumbers:[],biggerNumbers: [],number:number}).smallerNumbers;
  partitions[1] = array.reduce(seperateNumbers,{smallerNumbers:[],biggerNumbers: [],number:number}).biggerNumbers;

  return partitions;
}
exports.partitionOfArray = partitionOfArray;
