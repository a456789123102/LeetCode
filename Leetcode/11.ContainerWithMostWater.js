var maxArea = function (height) {
  if (height.length === 1) return height;
  let maxSum = -Infinity;
  let left = 0;
  let right = height.length - 1;

  while(left < right){
    const minH = Math.min(height[left],height[right]);
    const width = right - left;
    console.log(`widgth = ${width}`)
    maxSum = Math.max(maxSum,width*minH);
    if(height[left] < height[right]){
        left ++;
    }else{
        right--;
    }
  }
return maxSum
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1,2,4,3]));
console.log(maxArea([8,7,2,1]))