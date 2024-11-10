var longestCommonSubsequence = function(text1, text2) {
    let table = Array.from({length: text1.length + 1}, () => Array.from({length: text2.length + 1}, () => ""));
for(let i = 1 ; i < table.length ; i++){
    for(let j = 1 ; j < table[i].length ; j++){
        //if same charactor
        if(text1[i-1] === text2[j-1]){
            table[i][j] = table[i-1][j-1] + text1[i-1];
        }else{ //if not same char
            let above = table[i-1][j]
            let left = table[i][j-1]
            table[i][j] = above.length > left.length ? above:left;
        }
    }
}
    return table;[table.length-1][table[0].length-1].length
};

console.log(longestCommonSubsequence("abcba","abcbcba"))
//