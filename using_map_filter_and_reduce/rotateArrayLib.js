const movePositions = function(array,position) {
  let numberToMove;

  for(let counter = 0; counter <= position; counter++) {
    numberToMove = array.shift();
    array.push(numberToMove);
  }

  return array;
}
const rotateArray = function (array,number) {
  let rotatedArray = [];
  for (let counter =0; counter < array.length; counter++) {
    if (array[counter] == number) {
      position = counter;
      counter = array.length;
    }
  }

  rotatedArray = movePositions(array,position);
  
  return rotatedArray;
}
exports.rotateArray= rotateArray;
