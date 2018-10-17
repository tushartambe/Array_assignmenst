const extractDigits = function ( number) {
  let extractedDigits = [];
  let numberLength = number.toString().length;
  if(numberLength == 1) {
    return [number];
  }

  for( let arrayIndex =numberLength-1; arrayIndex >= 0 ;arrayIndex --) {
    let remainder = number % 10;
    extractedDigits[arrayIndex] = remainder;
    number = Math.floor(number/10);

    if(number < 10) {
      extractedDigits[arrayIndex-1] = number;
      arrayIndex = -1;
    }
  }
  return extractedDigits;
}

exports.extractDigits = extractDigits;
