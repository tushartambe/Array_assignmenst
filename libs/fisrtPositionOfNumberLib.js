const findPosition = function(state,element,index) {
  if(state.element == element && state.index == -1) {
    state.index = index;
    return state;
  }
  return state;
}

const findFirstPosition = function (array,number) {

  let firstPosition = array.reduce(findPosition,{ element : number, index : -1 }).index;

  return firstPosition;
}
exports.findFirstPosition= findFirstPosition;
