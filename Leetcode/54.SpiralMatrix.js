//Given an m x n matrix, return all elements of the matrix in spiral order.

var spiralOrder = function (matrix) {
  let ans = [];
  let left = 0;
  let top = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length-1;
  let targets = matrix.length * matrix[0].length; //3x3 = 9

  while (ans.length < targets) {
    //top left to top right
    for (let i = left; i <= right && ans.length < targets; i++) {
      ans.push(matrix[top][i]);
    }
    top++; //increase top

    // top right to bottom right
    for (let i = top; i <= bottom && ans.length < targets; i++) {
      ans.push(matrix[i][right]);
    }
    right--; //decrease right


    //bottom right to bottom left
    for (let i = right; i >= left && ans.length < targets; i--) {
      ans.push(matrix[bottom][i]);
    }
    bottom--; //decrease bottom

    //bottom left to top left
    for (let i = bottom; i >= top && ans.length < targets; i--) {
      ans.push(matrix[i][left]);
    }
    left++; //increase left
  }

  return ans;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
