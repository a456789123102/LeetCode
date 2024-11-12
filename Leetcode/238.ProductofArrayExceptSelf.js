var productExceptSelf = function (nums) {
const nonZeroNums = nums.filter((num) => num !== 0);
if(nums.length - nonZeroNums.length > 1 ){
    return Array.from({length:nums.length}).fill(0);
}
const sum = nonZeroNums.reduce((acc,cur) => acc*cur);
if(nums.length - nonZeroNums.length === 1 ){
    let arr =  Array.from({length:nums.length}).fill(0);
    nums.forEach((e,i) =>{
        if(e === 0){
            arr[i] = sum;
        }
    })
    return arr;
}

return nums.map((e) => sum/e);
};
console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));
console.log(productExceptSelf([-1,1,0,0,-3,3]));