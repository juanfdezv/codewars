// https://www.codewars.com/kata/541c8630095125aba6000c00

function digital_root(n) {
  n = n.toString().split("").map(Number).reduce((a, b) => a + b, 0);
  
  if(n.toString().length === 1)
    return n;
  else
    return digital_root(n);
}