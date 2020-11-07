// https://www.codewars.com/kata/57f7b8271e3d9283300000b4

function evenOrOdd(str) {
  const sumOdd = str
    .split("")
    .map((x) => +x)
    .filter((x) => x % 2 !== 0)
    .reduce((a, v) => a + v);

  const sumEven = str
    .split("")
    .map((x) => +x)
    .filter((x) => x % 2 === 0)
    .reduce((a, v) => a + v);

  if (sumOdd < sumEven) return "Even is greater than Odd";
  else if (sumOdd > sumEven) return "Odd is greater than Even";
  else return "Even and Odd are the same";
}
