s = ["h", "e", "l", "l", "o"];

// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
// var reverseString = function (s) {
//   let left = 0;
//   let right = s.length - 1;

//   const swap = (s, left, right) => {
//     const temp = s[left];
//     s[left] = s[right];
//     s[right] = temp;
//   };

//   while (left < right) {
//     swap(s, left++, right--);
//   }
// };

// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
// var reverseString = function (s) {
//   const swap = (s, i, j) => {
//     const temp = s[i];
//     s[i] = s[j];
//     s[j] = temp;
//   };

//   for (let i = 0; i < s.length / 2; i++) {
//     swap(s, i, s.length - 1 - i);
//   }
// };

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  if (s == null || s.length === 0) {
    return;
  }
  
  const swap = (s, i, j) => {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  };
  
  const reverseStringHelper = (s, left, right) => {
    if (left >= right) {
      return;
    }
    swap(s, left, right);
    reverseStringHelper(s, ++left, --right);
  };

  reverseStringHelper(s, 0, s.length - 1);
};

reverseString(s)

console.log(s);
