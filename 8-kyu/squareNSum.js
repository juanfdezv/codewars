// https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers){
  return numbers.map(x => Math.pow(x, 2)).reduce((a, v) => a + v, 0);
}