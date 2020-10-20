// https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8

function removeParentheses(s){
    let openBrackets = 0;
    let outputString = "";
  
    for(let char of s){
        if(char === "(") openBrackets++;
        if(openBrackets === 0) outputString += char;
        if(char === ")") openBrackets--;
    }
    
    return outputString;
}