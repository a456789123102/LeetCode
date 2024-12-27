// var myAtoi = function(s) {
//     const min = -Math.pow(2, 31);
//     const max = Math.pow(2, 31) - 1;
//     const ss = s.trim();
//     if (ss.length === 0) return 0;
//     let sign = 1; 
//     let i = 0;
//     if (ss[i] === '+' || ss[i] === '-') {
//         sign = ss[i] === '-' ? -1 : 1;
//         i++;
//     }
//     let result = 0;

//     while (i < ss.length && !isNaN(ss[i]) && ss[i] !== ' ') {
//         result = result * 10 + (ss[i] - '0');
//         i++;
//     }
//     result *= sign;
//     if (result < min) return min;
//     if (result > max) return max;
//     return result;
// };

var myAtoi = function(s) { 
    const min = -Math.pow(2, 31);
    const max = Math.pow(2, 31) - 1;
    const ss = s.trim();
    if (ss.length === 0) return 0; 

    const match = ss.match(/^([+-]?\d+)/);
    if (!match) return 0; 

    const res = Number(match[0]);
    if (res < min ) {
        return min;
    }else if (res > max){
        return max;
    }

    return res;
};



console.log(myAtoi("   -042"));
console.log(myAtoi("42")); 
console.log(myAtoi("   +42")); 
console.log(myAtoi("abc")); 
console.log(myAtoi("12345abc")); 
