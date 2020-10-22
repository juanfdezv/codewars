// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
    let odds = [];
    
    for(const number of array){
      if(number % 2 !== 0)
        odds.push(number)
    }
    
    odds.sort((a, b) => a - b);
    
    for(let i = 0; i < array.length; i++){
      if(array[i] % 2 !== 0)
        array[i] = odds.shift();
    }
    
    return array;
}