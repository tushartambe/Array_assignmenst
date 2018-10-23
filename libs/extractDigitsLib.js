const extractDigits = function ( number) {
  let convertedNumber = number.toString();
  return  convertedNumber.split("");
}

exports.extractDigits = extractDigits;
