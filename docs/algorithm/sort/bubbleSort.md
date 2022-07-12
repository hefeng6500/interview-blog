# 冒泡排序

**普通版本**

```js
function bubbleSort(nums) {
  const length = nums.length;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
      }
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

**优化版本**

```js
function bubbleSort(nums) {
  const length = nums.length;

  for (let i = 0; i < nums.length - 1; i++) {
    let isOrder = true;

    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        isOrder = false;
      }
    }

    if (isOrder) break;
  }

  return nums;
}

function swap(nums, a, b) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}
```

个人的乱写版本

相比于普通版本的冒泡排序：

- 普通版本：外层循环控制循环轮数，内层循环控制两数之间的比较，内层循环每完成一次就会有一个值（最大是）回到正确的位置。总体是最大值向顶层冒泡

- 个人乱写版本：外层循环控制当前要比较的值（指针 1），内层循环也是控制当前要比较的值（指针 2），如果顺序不对就交换，这么做，外层循环的指针 1，在每轮循环完都能得到一个正确的值（最小值）

```js
function bubbleSort(nums) {
  const length = nums.length;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        swap(nums, i, j);
      }
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
