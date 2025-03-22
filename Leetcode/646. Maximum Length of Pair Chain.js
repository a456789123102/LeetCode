var findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[1] - b[1]);

    let currentEnd = -Infinity; 
    let chainLength = 0; 

    for (let [left, right] of pairs) {
        if (left > currentEnd) { 
            chainLength++; 
            currentEnd = right; 
        }
    }

    return chainLength;
};


console.log(findLongestChain([[1, 2], [2, 3], [3, 4]]));
console.log(findLongestChain([[1, 2], [7, 8], [4, 5]]));