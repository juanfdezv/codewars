// https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4

function leastLarger(arr,i) {
    const copyArr = arr.filter(x => x > arr[i]).sort((a, b) => a - b);
    return copyArr.length > 0 ? arr.indexOf(copyArr[0]) : -1;
}