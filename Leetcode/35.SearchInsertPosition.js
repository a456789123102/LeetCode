var searchInsert = function(nums, target) {
    if (nums[0] >= target  ) return 0;
    if (nums[nums.length-1] < target) return nums.length;
    for(let i = 1; i < nums.length; i++){
        let prevNum = nums[i-1];
        let currNum = nums[i];
        if(currNum === target) return i;
        else if(prevNum < target && currNum > target) return i;
    }
};