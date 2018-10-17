const findLowestNumber = function (array) {
let lowestNumber = array[0];
  for ( let index =1; index < array.length; index++){
    if( array[index] < lowestNumber){
      lowestNumber = array[index];
    }
  }
  return lowestNumber;
}
exports.findLowest = findLowestNumber;
