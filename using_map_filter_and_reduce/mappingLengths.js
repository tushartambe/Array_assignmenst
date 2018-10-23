let names = ["anna","ghosh","nakka","g","ra"];

const lengthOfEveryElement = function (stringArray) {
    return stringArray.map(function(element) { return element.length;});

}

console.log(lengthOfEveryElement(names));
