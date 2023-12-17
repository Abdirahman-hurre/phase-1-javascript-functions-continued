// code your solution here
function saturdayFun(aim = "roller-skate") {
    return `This Saturday, I want to ${aim}!`;
  }
  
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  function wrapAdjective(flair = "*") {
    return function (adjactive = "special") {
      return `You are ${flair}${adjactive}${flair}!`;
    };
  }