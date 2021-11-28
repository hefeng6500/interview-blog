function longestCommonPrefix(strs) {
  if (strs == null || strs.length == 0) return "";
  let pre = strs[0];
  let i = 1;
  while (i < strs.length) {
    while (strs[i].indexOf(pre) != 0) {
      pre = pre.substring(0, pre.length - 1);
    }
    i++;
  }
  return pre;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
