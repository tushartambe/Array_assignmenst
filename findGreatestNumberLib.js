const findGreatestNumber = function (array) {
let greatestNumber = array[0];
  for ( let index =1; index < array.length; index++){
    if( array[index] > greatestNumber){
      greatestNumber = array[index];
    }
  }
  return greatestNumber;
}
exports.findGreatest = findGreatestNumber;
