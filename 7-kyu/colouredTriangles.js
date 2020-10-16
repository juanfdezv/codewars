// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111

function triangle(row) {
  if(row.length === 1) return row;
  
  const arr = row.split("");
  let newArr = [];
  
  for(let i = 0; i < arr.length-1; i++)
    newArr.push(mixColor(arr[i], arr[i+1]));
  
  return triangle(newArr.join(""));
}

function mixColor(c1, c2) {
  if(c1 === c2) return c1;
  
  const rgb = ["R", "G", "B"];
  const colors = [c1, c2];
  
  for(let i = 0; i < rgb.length; i++)
    if(!colors.includes(rgb[i])) return rgb[i];
}