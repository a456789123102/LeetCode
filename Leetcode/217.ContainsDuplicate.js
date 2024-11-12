// var containsDuplicate = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums.lastIndexOf(nums[i]) !== i) {
//       return true;
//     }
//   }
//   return false;
// };

var containsDuplicate = function (nums) {
    let hash = {};
    for(let num of nums){
        if(hash[num]){
            return true;
        }
        hash[num] = true;
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
