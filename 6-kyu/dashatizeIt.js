// https://www.codewars.com/kata/58223370aef9fc03fd000071

function dashatize(num) {
    if(isNaN(num)) return "NaN";
    
    const arr = Math.abs(num).toString().split("");
    let output = arr;
    
    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i] % 2 !== 0 || arr[i+1] % 2 !== 0)
        output[i] = appendDash(arr[i]);
    }
    
    return output.join("");
}
  
function appendDash(str) {
    return `${str}-`;
}