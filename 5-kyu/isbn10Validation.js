// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001

function validISBN10(isbn) {
  if(isbn.length !== 10) return false;
  if(!/^\d+$/.test(isbn.substring(0, isbn.length - 1))) return false;

  let arr = isbn.split("");
  if(arr[arr.length - 1] === "X")
    arr[arr.length - 1] = "10";
  
  return arr
    .map((el, i) => el *= i+1)
    .reduce((val, acc) => val + acc) % 11 === 0;
}