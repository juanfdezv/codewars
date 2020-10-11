// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

function cleanString(s) {
    let cleanArray = [];
    [...s].forEach(char => char === "#" ? cleanArray.pop() : cleanArray.push(char));
    return cleanArray.join("");
}