// https://www.codewars.com/kata/515f51d438015969f7000013

function pyramid(n) {
  let output = [];
  
  for(let i = 0; i < n; i++)
    output.push(fillArrayWithOnes(i+1));
  
  return output;
}

function fillArrayWithOnes(size) {
  return new Array(size).fill(1);
}