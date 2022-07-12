# 插入排序

通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

```js
function insertionSort(nums) {
  const length = nums.length;
  let previousIndex, current;

  for (let i = 0; i < nums.length; i++) {
    previousIndex = i - 1;
    current = nums[i];

    while (previousIndex >= 0 && current < nums[previousIndex]) {
      nums[previousIndex + 1] = nums[previousIndex];
      previousIndex--;
    }
    nums[previousIndex + 1] = current;
  }

  return nums;
}

function swap(nums, a, b) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}
```
