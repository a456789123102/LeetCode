// var isPalindrome = function(x) {
//     const xx = x.toString();
//     let left = 0, right = xx.length-1;
//     while(left < right){
//         if(xx[left]!== xx[right]) return false;
//         left++;
//         right--;
//     }
// return true;
// };

var isPalindrome = function(x) {
    if(x < 0) return false;
    const xx = x.toString();
    let left = 0, right = xx.length-1;
    while(left < right){
        if(xx[left]!== xx[right]) return false;
        left++;
        right--;
    }
return true;
};
console.log(isPalindrome(10));
console.log(isPalindrome(1321));