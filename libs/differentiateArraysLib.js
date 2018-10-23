const uniqueElements = require('./arrayOfUniqueElementsLib.js').uniqueElements;

const differentElements = function (firstList,secondList) {
  firstList = uniqueElements(firstList);
  secondList = uniqueElements(secondList);

  let isFound;
  differentiatedElements = [];
  for(let element of firstList) {
    isFound = secondList.includes(element);

    if(!isFound) {
      differentiatedElements.push(element);
    }
  }

  return differentiatedElements;
}
exports.differentElements = differentElements;
