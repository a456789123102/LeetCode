var filter = function(arr, fn) {
    let ans = [];
    for(let i = 0 ; i <arr.length ; i++){
        if(fn(arr[i],i)) ans.push(arr[i]);
    }
    return ans;
};
arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }