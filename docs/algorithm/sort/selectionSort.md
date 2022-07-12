# 选择排序

每次找最小值，然后放到待排序数组的起始位置

```js
function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swap(nums, minIndex, i);
    }
  }
  return nums;
}

function swap(nums, a, b) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}
```
