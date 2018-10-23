const movePositions = function(array,position) {
  for(let counter = 0; counter <= position; counter++) {
    let numberToMove = array.shift();
    array.push(numberToMove);
  }

  return array;
}
const rotateArray = function (array,indexToRotate) {
  return movePositions(array,indexToRotate);
}
exports.rotateArray= rotateArray;
