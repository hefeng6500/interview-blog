/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }
  let first = 1;
  let second = 2;
  let sum = 0;

  if (n > 2) {
    sum = first + second;
    first = second;
    second = sum;
    n--;
  }
  return sum;
};

climbStairs(4);
