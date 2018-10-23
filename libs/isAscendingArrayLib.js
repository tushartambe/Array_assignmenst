const compareNumbers = function(state, currentElement){
let {resultArray, element}=state;

state.resultArray.push(element <= currentElement);
state.element = currentElement;
return state;
}

const isEveryTrue = function(result) {
  return result == true;
}

const isAscending = function (array) {
  let results = array.reduce(compareNumbers, {resultArray : [], element : array[0]}).resultArray;
  return results.every(isEveryTrue);
}

exports.isAscending = isAscending;
