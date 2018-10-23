const uniqueElements = function (array) {
  let uniqueElementsArray = [];
  for(let counter = 0; counter < array.length; counter++) {
    if(!uniqueElementsArray.includes(array[counter])) {
      uniqueElementsArray.push(array[counter]);
    }
  }
  return uniqueElementsArray;
}

exports.uniqueElements = uniqueElements;
