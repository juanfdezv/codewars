// https://www.codewars.com/kata/5949481f86420f59480000e7

function oddOrEven(array) {
  const sum = array.reduce((a, v) => a + v, 0);
  return sum % 2 === 0 ? "even" : "odd";
}
