/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    map[value] = map[value] === undefined ? 1 : ++map[value];
  }

  for (const key in map) {
    if (map[key] === 1) {
      return key;
    }
  }
};

console.log(singleNumber([2, 2, 3, 2]));;
