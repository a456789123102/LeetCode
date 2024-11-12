var maxSubArray = function(nums) {
    let maxSofar = nums[0];
    let currentMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        maxSofar = Math.max(maxSofar, currentMax);
    }
    
    return maxSofar;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));