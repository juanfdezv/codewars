// https://www.codewars.com/kata/5c4cb8fc3cf185147a5bdd02

function sumOrProduct(array, n) {
    const sortedArr = array.sort((a, b) => a - b);
    const nSmallestProduct = sortedArr.splice(0, n).reduce((a, v) => a * v);
    const nLargestSum = sortedArr.splice(-n).reduce((a, v) => a + v);
    
    if(nLargestSum > nSmallestProduct)
      return "sum";
    else if(nLargestSum < nSmallestProduct)
      return "product";
    else
      return "same";
}