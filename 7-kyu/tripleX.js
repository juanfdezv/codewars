// https://www.codewars.com/kata/568dc69683322417eb00002c

function tripleX(str){
    const firstOccurrence = str.indexOf("x");
    return firstOccurrence !== -1 && firstOccurrence === str.indexOf("xxx");
}