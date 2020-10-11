// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

function zeros (n) {
    const kMax = Math.floor(Math.log(n) / Math.log(5));
    let z = 0;
    
    for(let k = 1; k <= kMax; k++)
      z += Math.floor(n / Math.pow(5, k));
    
    return z;
}