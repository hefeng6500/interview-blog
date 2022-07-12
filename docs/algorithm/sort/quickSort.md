# 快速排序

快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：

- 从数列中挑出一个元素，称为 “基准”（pivot）；
- 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
- 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序

```js
function quickSort(nums) {
  return quick(nums, 0, nums.length - 1);
}

function quick(nums, begin, end) {
  if (begin >= end) return;

  const pivot = partition(nums, begin, end);

  quick(nums, begin, pivot - 1);
  quick(nums, pivot + 1, end);

  return nums;
}

function partition(nums, begin, end) {
  const pivot = end;
  let j = begin;

  for (let i = begin; i < end; i++) {
    if (nums[i] < nums[pivot]) {
      swap(nums, i, j);
      j++;
    }
  }

  swap(nums, pivot, j);

  return pivot;
}

function swap(nums, a, b) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}
```

阮一峰老师的丐版快速排序(知乎饱受争议)

```js
function quickSort(arr) {
  if (arr.length < 1) {
    return arr;
  }
  let middleIndex = Math.floor(arr.length / 2);
  let middle = arr.splice(middleIndex, 1);

  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < middle) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(middle, quickSort(right));
}
```
