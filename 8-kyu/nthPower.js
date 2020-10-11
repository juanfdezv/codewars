// https://www.codewars.com/kata/57d814e4950d8489720008db

function index(array, n){
    if(n<0 || n>array.length-1) return -1;
    return Math.pow(array[n], n);
}