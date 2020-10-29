// https://www.codewars.com/kata/5bb148b840196d1be50000b1

function convert(s) {
    if(!s) return 0;
    s = s.toLowerCase();
    let arr = generateUniqueLettersArray(s);
    swapFirstTwoElements(arr);
    return mapLettersToNumbers(s, arr);
}

function generateUniqueLettersArray(s) {
    return [...new Set(s)];
}

function swapFirstTwoElements(arr) {
    return [arr[0], arr[1]] = [arr[1], arr[0]];
}

function mapLettersToNumbers(s, arr) {
    return parseInt(s.split("").map(letter => arr.indexOf(letter)).join(""));
}