// https://www.codewars.com/kata/59590976838112bfea0000fa

function beggars(values, n){
  
  let payoffs = new Array(n).fill(0);
  
  for(let i = 0; i < n; i++)
    for(let j = i; j < values.length; j+=n)
      payoffs[i] += values[j];
  
  return payoffs;
}