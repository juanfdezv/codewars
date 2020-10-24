// https://www.codewars.com/kata/5f70e4cce10f9e0001c8995a

function solve(stones) {
    let counter = 0;
    
    for(let i = 0; i < stones.length - 1; i++){
      if(stones[i] === stones[i+1])
        counter++;
    }

    return counter;
}