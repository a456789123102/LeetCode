var reverse = function(x) {
    const min = - Math.pow(2 ,31);
    const max = Math.pow(2 ,31) - 1;
    if (x < min || x > max) return 0;
    const isMinus = x < 0 
    let newX = Number(Math.abs(x).toString().split('').reverse().join(''));
    newX = isMinus ? -newX : newX;
    if(newX < min || newX > max) return 0;
    return newX;
};
console.log(reverse(-123));