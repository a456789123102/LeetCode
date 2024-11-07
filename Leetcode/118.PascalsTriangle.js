//Leetcode/118.Pascal'sTriangle

var generate = function(numRows){
    if(numRows < 1) return [];
let ans = [[1]];
while(ans.length < numRows){
    let previousRows = ans[ans.length - 1] || [];
    let currentRows = [1];
for(let i = 1 ; i < previousRows.length ; i++){
    if(previousRows.length >= 2){
        currentRows.push(previousRows[i]+previousRows[i-1]);
    }
}
currentRows.push(1)
ans.push(currentRows);
}
return ans;
}

console.log(generate(5))
console.log(generate(1))
console.log(generate(0))