let names = ["anna","ghosh","nakka","g","ra"];

const lengthOfEveryElement = function (stringArray) {
  let lengthsArray = [];
  for ( index =0; index < stringArray.length; index++) {
    lengthsArray[index] = stringArray[index].length;
  }
  return lengthsArray;
}

console.log(lengthOfEveryElement(names));
