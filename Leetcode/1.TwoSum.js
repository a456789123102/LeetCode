var twoSum = function(nums, target) {
for(let i = 0 ; i < nums.length ; i++){
    let find =target - nums[i];
    if(nums.includes(find)){
        return[i,nums.indexOf(find)]
    }
}
};
console.log(twoSum([2,7,11,15],9))