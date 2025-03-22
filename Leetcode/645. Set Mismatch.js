var findErrorNums = function (nums) {
    let dup = null;
    let miss = null;
    const store = new Set();
    for (let num of nums) {
        if (store.has(num)) {
            dup = num;
        } else {
            store.add(num);
        }
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!store.has(i)) {
            miss = i;
        }
    }
    return [dup, miss]
};
console.log(findErrorNums([1, 2, 2, 4]))
console.log(findErrorNums([3, 2, 3, 4, 6, 5]))
console.log(findErrorNums([3, 2, 2]))