// https://www.codewars.com/kata/59f11118a5e129e591000134

function repeats(arr) {
    return arr.filter(num => occursOnce(arr, num)).reduce((a, v) => a + v, 0);
}
  
function occursOnce(arr, num) {
    return arr.filter(x => x === num).length === 1;
}