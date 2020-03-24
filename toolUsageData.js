'use strict';

 module.exports.toolUsageData = (input) => {
  const {toolUsage} = input;
  let orderedToolUsage = toolUsage.map(tool => {
    return {
      name: tool.name,
      timeUsedInMinutes: (new Date(tool.useEndTime) - new Date(tool.useStartTime))/60000
    }
  });
  orderedToolUsage = addUpSameTools(orderedToolUsage);
  orderedToolUsage.sort((tool1, tool2) => {return tool2.timeUsedInMinutes - tool1.timeUsedInMinutes});
  return orderedToolUsage;
 }

 const addUpSameTools = (data) => {
   const finalArray = [];
   data.forEach(element => {
     if(finalArray.length < 1){
       finalArray.push(element);
     } else {
       let found = true;
       finalArray.forEach(ele2 => {
        if(element.name === ele2.name) {
          ele2.timeUsedInMinutes = ele2.timeUsedInMinutes + element.timeUsedInMinutes;
          found = found && false;
        } else {
          found = found && true;
        }
       });
       if(found) {
         finalArray.push(element);
       }
     }
   });
   return finalArray;;
 }