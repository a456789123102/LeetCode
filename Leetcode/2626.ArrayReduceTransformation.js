var reduce = function(nums, fn, init) {
    if(!nums.length) return init;
    let acc = init;
for(let i = 0 ; i < nums.length ; i++){
    acc += fn(acc, nums[i])
}       
};
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0