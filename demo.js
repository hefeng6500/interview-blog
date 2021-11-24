// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   const sMap = {};
//   const tMap = {};

//   for (let i = 0; i < s.length; i++) {
//     if (sMap[s[i]]) {
//       sMap[s[i]]++;
//     } else {
//       sMap[s[i]] = 1;
//     }
//   }

//   for (let j = 0; j < t.length; j++) {
//     if (tMap[t[j]]) {
//       tMap[t[j]]++;
//     } else {
//       tMap[t[j]] = 1;
//     }
//   }

//   return !Object.keys(sMap).find((item) => tMap[item] !== sMap[item]);
// };

let s = "rat";
let t = "car";

var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  const table = new Array(26).fill(0);
  for (let i = 0; i < s.length; ++i) {
      table[s.codePointAt(i) - 'a'.codePointAt(0)]++;
  }
  console.log(table);
  for (let i = 0; i < t.length; ++i) {
      table[t.codePointAt(i) - 'a'.codePointAt(0)]--;
      if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
          return false;
      }
  }
  return true;
};

console.log(isAnagram(s, t));
