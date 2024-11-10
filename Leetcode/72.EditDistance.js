var minDistance = function(word1, word2) {
    let table = Array.from({length:word1.length + 1}, () =>Array.from({length:word2.length + 1}).fill(""));

    for(let i = 0 ; i <= word1.length ; i++){
        table[i][0] = i;
    }
    for(let j = 0 ; j <= word2.length ; j++){
        table[0][j] = j;
    }

    for (let row = 1 ; row < table.length ; row++){
        for(let col = 1 ; col < table[row].length ; col++){
            if(word1[row -1] === word2[col - 1]){
                table[row][col] = table[row-1][col-1];
            }
            else{
                table[row][col] = Math.min(table[row-1][col-1],table[row][col-1],table[row-1][col]) + 1;
            }
        }
    }

    return table[table.length - 1][table[0].length - 1]
};
console.log(minDistance("horse","ros"))

