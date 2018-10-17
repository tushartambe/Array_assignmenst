const findReverse = function (array) {
  let reversedArray = [];
  let reversedIndex = array.length - 1;
  for ( index =0; index < array.length; index++) {
    reversedArray[reversedIndex] = array[index];
    reversedIndex --;
  }
  return reversedArray;
}

const fibSeries = function (totalTerms) {
  let firstTerm = -1;
  let secondTerm = 1;
  let nextTerm;
  let fibSeriesNumbers = [];
  for(let termIndex=0; termIndex<totalTerms; termIndex++){
    nextTerm = firstTerm + secondTerm;
    fibSeriesNumbers[termIndex] = nextTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
  }
  return findReverse(fibSeriesNumbers);
}
exports.fibSeries = fibSeries;
