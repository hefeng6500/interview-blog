const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const length = matrix.length;

  // 先上下交换
  for (let i = 0; i < length / 2; i++) {
    const temp = matrix[i];
    matrix[i] = matrix[length - i - 1];
    matrix[length - i - 1] = temp;
  }

  // 在按照对角线交换
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const temp = matrix[i][j];

      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const length = matrix.length;

  for (let i = 0; i < length / 2; i++)
    for (let j = i; j < length - i - 1; j++) {
      let temp = matrix[i][j];
      let m = length - j - 1;
      let n = length - i - 1;
      matrix[i][j] = matrix[m][i];
      matrix[m][i] = matrix[n][m];
      matrix[n][m] = matrix[j][n];
      matrix[j][n] = temp;
    }
};

rotate(matrix)

console.log(matrix);
