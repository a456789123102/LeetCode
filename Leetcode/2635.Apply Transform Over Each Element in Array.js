// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 

var map = function(arr, fn) {
const returnedArray = []

    for(let i = 0 ; i < arr.length ; i++){
       returnedArray[i] = fn(arr[i], i)
    }
    return returnedArray
};
arr = [1,2,3], fn = function plusone(n) { return n + 1; }
const newArray = map(arr, plusone); // [2,3,4]