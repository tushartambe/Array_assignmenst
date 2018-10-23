selectSecond = function (state,element){
  let {index,elements} = state;
  if(index % 2 == 0) {
    elements =  elements.concat(element);
  }
  return {index : index+1,elements:elements}
};

const selectSecondNumbers = function(array) {
  return array.reduce(selectSecond,{index:0,elements:[]}).elements;
}
exports.EverySecondNumbers= selectSecondNumbers;