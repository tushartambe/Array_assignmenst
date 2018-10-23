const checkLowerNumbers = function(object, currentElement){
  let {count,threshold}=object;

  if(currentElement < object.threshold) {
    object.count++
  }
  return object;
}

const  countNumbersBelow = function (array,threshold) {

  let totalNumbers = array.reduce(checkLowerNumbers, {count : 0, threshold : threshold}).count;
  return totalNumbers;
}

exports.countNumbersBelow = countNumbersBelow;
