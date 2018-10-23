const checkGreaterNumbers = function(object, currentElement){
  let {count,threshold}=object;

  if(currentElement > object.threshold) {
    object.count++
  }
  return object;
}

const countNumbersAbove = function (array,threshold) {

  let totalNumbers = array.reduce(checkGreaterNumbers, {count : 0, threshold : threshold}).count;
  return totalNumbers;
}

exports.countNumbersAbove = countNumbersAbove;
