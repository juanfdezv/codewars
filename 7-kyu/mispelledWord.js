// https://www.codewars.com/kata/5892595f190ca40ad0000095

function mispelled(word1, word2) {
  if(word1 === word2) return false;
  
  if(word1.length !== word2.length){
    const wordArr = [word1, word2].sort((w1, w2) => w1.length - w2.length);
    if(wordArr[0] === wordArr[1].slice(1)) return true;
    if(wordArr[0] === wordArr[1].slice(0, wordArr[1].length - 1)) return true;
    return false;
  }
  
  const word1Arr = word1.split("");
  const word2Arr = word2.split("");
  let counter = 0;
  
  for(let i = 0; i < word1Arr.length; i++){
    if(word1Arr[i] !== word2Arr[i]){
      counter++;
      if(counter > 1) return false;
    }
  }
  
  return true;
}