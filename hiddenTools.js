'use strict';

module.exports.hiddenTools = (input) => {
  const {hiddenTools, tools} = input;
  const toolsFound = [];
  tools.forEach(tool => {
    let found = true;
    let tempStr = hiddenTools;
    tool.split('').forEach(letter => {
      let startIndex = tempStr.indexOf(letter);
      if(startIndex === -1) {
        found = false;
      } else {
        tempStr = tempStr.slice(startIndex, tempStr.length);
        found = true;
      }
    });
    if (found) 
      toolsFound.push(tool);
  });
  return toolsFound;
}