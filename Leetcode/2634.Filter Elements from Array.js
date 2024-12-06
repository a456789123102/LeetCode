var filter = function(arr, fn) {
    let ans = [];
    for(let i = 0 ; i <arr.length ; i++){
        if(fn(arr[i])) ans.push(arr[i]);
    }
    return ans;
};
arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }