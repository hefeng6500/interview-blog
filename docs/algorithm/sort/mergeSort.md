# 归并排序

- 把长度为 n 的输入序列分成两个长度为 n/2 的子序列；
- 对这两个子序列分别采用归并排序；
- 将两个排序好的子序列合并成一个最终的排序序列。

```js
function mergeSort(nums) {
  mergeMain(nums, 0, nums.length - 1);

  return nums;
}

function mergeMain(nums, left, right) {
  if (left >= right) return;

  const mid = (left + right) >> 1;

  mergeMain(nums, left, mid);
  mergeMain(nums, mid + 1, right);
  merge(nums, left, mid, right);
}

function merge(nums, left, mid, right) {
  const temp = [];
  let i = left;
  let j = mid + 1;
  let k = 0;

  while (i <= mid && j <= right) {
    temp[k++] = nums[i] <= nums[j] ? nums[i++] : nums[j++];
  }

  while (i <= mid) {
    temp[k++] = nums[i++];
  }

  while (j <= right) {
    temp[k++] = nums[j++];
  }

  for (let p = 0; p < right - left + 1; p++) {
    nums[left + p] = temp[p];
  }
}
```
