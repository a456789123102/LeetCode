function solve(s){
  const countUpper = s.split('').filter((n) => /[A-Z]/.test(n)).length;
  return countUpper > s.length/2?s.toUpperCase(): s.toLowerCase();
}
console.log(solve('coDE'))