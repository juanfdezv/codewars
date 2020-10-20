// https://www.codewars.com/kata/5ebd53ea50d0680031190b96

function getTurkishNumber(num) {
    const units = ["sıfır","bir","iki","üç","dört","beş","altı","yedi","sekiz","dokuz"];
    const tens = ["on","yirmi","otuz","kırk","elli","altmış","yetmiş","seksen","doksan"];
    
    if((num + "").length === 1)
      return units[num];
    
    digitsArray = num.toString().split("").map(Number);
    
    if(digitsArray[1] === 0)
      return tens[digitsArray[0] - 1];
    else
      return `${tens[digitsArray[0] - 1]} ${units[digitsArray[1]]}`;
}