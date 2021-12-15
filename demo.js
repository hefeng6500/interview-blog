
function isBadVersion(s) {
  return s === 4;
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  return function (n) {
    const helper = (n, start, end) => {
      if (start === end) {
        return start;
      }
      let index = Math.floor(start + (end - start) / 2);
      console.log(index);
      let bad = isBadVersion(index);
      if (!bad) {
        // 好的
        return helper(n, index+1, end);
      } else {
        // 坏的
        return helper(n, start, index);
      }
    };
    return helper(n, 0, n);
  };
};

const res = solution(isBadVersion);
res(5)

