// https://www.codewars.com/kata/58ad388555bf4c80e800001e

function cutTheRopes(a) {
    let output = [];
    
    while(a.length > 0){
      output.push(a.length);
      a = a.map(x => x - Math.min(...a)).filter(x => x > 0);
    }
    
    return output;
}