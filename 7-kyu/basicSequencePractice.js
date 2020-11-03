// https://www.codewars.com/kata/5436f26c4e3d6c40e5000282

function sumOfN(n) {
  let output = [0];
  
  for(let i = 1; i < Math.abs(n) + 1; i++)
      output.push(output[i - 1] + i);

  return n < 0 ? [0].concat(output.splice(1).map((x) => -x)) : output;
}