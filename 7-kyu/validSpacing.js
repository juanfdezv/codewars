// https://www.codewars.com/kata/5f77d62851f6bc0033616bd8/

function validSpacing(s) {
    return !(s.length > 0 && s.split(" ").includes(""));
}