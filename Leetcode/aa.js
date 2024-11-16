function nqueen(n) {
  let ans = [];
 
    // base case
    if (i === n) {
      ans.push(slate.slice());
      return;
    }
    function dfs(i, n, slate) {
      for (let prevQ = 0; prevQ < i-1; prevQ++) {
        // col check
        if (slate[prevQ] === slate[i-1]) return; // แก้จาก currQ เป็น i
      }

    // backtrack case
   

    for (let j = 0; j < n; j++) {
      slate.push(j);
      dfs(i + 1, n, slate);
      slate.pop();
    }
  }

  dfs(0, n, []);
  return ans;
}
console.log(nqueen(4));
