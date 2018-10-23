const uniqueElements = require('./arrayOfUniqueElementsLib.js').uniqueElements;

const intersectionOfArrays = function (firstList,secondList) {
  firstList = uniqueElements(firstList);
  secondList = uniqueElements(secondList);

  let intersection = [];
  for(let element of secondList) {
    if(firstList.includes(element)) {
      intersection.push(element);
    }
  }

  return intersection;
}
exports.intersectionOfArrays = intersectionOfArrays;
