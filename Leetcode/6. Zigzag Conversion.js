var convert = function (s, numRows) {
    if(numRows === 1)return s
    const rows = Array.from({ length: numRows }, () => Array());
    let count = 0;
    let bounce = false;
  
    for (let i = 0; i < s.length; i++) {
      if (!bounce) {
        rows[count].push(s[i]);
        count++;
        if (count === numRows - 1) {
          bounce = true;
        }
      } else if (bounce) { 
        rows[count].push(s[i]);
        count--;
        if (count === 0) {
          bounce = false;
        }
      }
    }
    return rows.map(e => e.join('')).join('');
  };
  
console.log(convert("AB", 1));
