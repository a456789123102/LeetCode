var minimumTotal = function(triangle) {
    let table = [];
    triangle.forEach(row =>  table.push(new Array(row.length).fill(0)));
    table[0] = triangle[0];
    for(let i = 1 ; i< table.length ; i++){
        for(let j = 0; j < table[i].length ; j++){
//if we on the first col
if(j === 0){
    table[i][j] = table[i-1][j] + triangle[i][j];
} 
else if(j === table[i].length-1){
    table[i][j] = table[i-1][j-1] + triangle[i][j];
}
else{
    table[i][j] = Math.min(table[i-1][j],table[i-1][j-1]) + triangle[i][j];
}
        }
    }
    return Math.min(...table[table.length-1]);
};
console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])) 