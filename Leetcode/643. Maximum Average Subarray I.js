var findMaxAverage = function(nums, k) {
    let maxSum = -Infinity;
    let currSum = 0;
    let leftWindow = 0, rightWindow = 0;
while(rightWindow < nums.length){
    currSum += nums[rightWindow];
    rightWindow++;
    if(rightWindow - leftWindow === k){
        maxSum = Math.max(currSum,maxSum);
        currSum -= nums[leftWindow];
        leftWindow++;
    }
}
return maxSum/k
};
console.log(findMaxAverage([1,12,-5,-6,50,3], 4))