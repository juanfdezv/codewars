// https://www.codewars.com/kata/59e66e48fc3c499ec5000103

function solve(arr) {
    return arr.map(x => new Set(x).size).reduce((a, v) => a * v, 1);
}