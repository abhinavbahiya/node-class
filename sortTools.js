'use strict';
const allCombinations = [];

module.exports.sortTools = (input) => {
  const {tools, maximumWeight} = input;
  let leftWeight = maximumWeight;
  let totalValue = 0;
  let addValue = 0;
  let selectedTools = [];
  let unSelectedValues = [];
  const sortedTools = tools.sort((tool1, tool2) => {
    return tool1.weight - tool2.weight || tool2.value - tool1.value;
  });

  getCombinationOfTools(sortedTools);
  console.log(allCombinations);
  
  // sortedTools.forEach(tool => {
  //   totalValue = totalValue + tool.value;
  //   if(tool.weight <= leftWeight) {
  //     leftWeight -= tool.weight;
  //     addValue = addValue + tool.value;
  //     selectedTools.push(tool);
  //   } else {
  //     unSelectedValues.push(tool);
  //   }
  // });

  // if(totalValue - addValue > addValue) {
  //   leftWeight = maximumWeight;
  //   unSelectedValues.forEach(tool => {
  //     leftWeight = leftWeight - tool.weight;
  //   });
  //   if(leftWeight > 0) {

  //   }
  //   // return unSelectedValues.map(tool => tool.name);
  // } else {
  //   return selectedTools.map(tool => tool.name);
  // }
  // console.log(selectedTools);

  // return 
}
const getCombinationOfTools = (mainArray, maximumWeight) => {
  let totalValue = 0, addValue = 0;
  const selectedTools = [];
  let leftWeight = maximumWeight;
  for(let i = 1; i <= mainArray.length; i++) {
    for (let j = 0; j < mainArray.length; j = j + i) {
      if(mainArray[j].weight <= leftWeight) {
        leftWeight -= mainArray[j].weight;
        addValue = addValue + mainArray[j].value;
        selectedTools.push(mainArray[j]);
      }
    }
  }
  allCombinations.push(selectedTools);
}