/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = /[a-zA-Z0-9]/;

  const isPalindromeHelper = function (s, left, right) {
    if (left >= right) {
      return true;
    }
    while (left < right && !reg.test(s[left])) {
      left++;
    }
    while (left < right && !reg.test(s[right])) {
      right--;
    }

    return (
      s[left].toLocaleLowerCase() === s[right].toLocaleLowerCase() &&
      isPalindromeHelper(s, ++left, --right)
    );
  };

  return isPalindromeHelper(s, 0, s.length - 1);
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
