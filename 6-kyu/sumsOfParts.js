// https://www.codewars.com/kata/5ce399e0047a45001c853c2b

function partsSums(ls) {
    let sum = ls.reduce((a, v) => a + v, 0);
    let output = [sum];
    
    for(const number of ls){
      sum -= number;
      output.push(sum);
    }
    
    return output;
}