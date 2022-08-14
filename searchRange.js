// T(n): O(log n)
// S(n): O(n)
const findStartIndex = (nums, target) => {
  if (nums.length === 0) return -1;
  if (nums[0] === target) return 0;
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (nums[middle] === target && nums[middle - 1] < target) {
      return middle;
    } else if (nums[middle] <= target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};

// T(n): O(log n)
// S(n): O(n)
const findEndIndex = (nums, target) => {
  if (nums.length === 0) return -1;
  if (nums[nums.length - 1] === target) return nums.length;
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (nums[middle] === target && nums[middle + 1] > target) {
      return middle;
    } else if (nums[middle] <= target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};

// T(n): O(n)
// S(n): O(n)
var searchRange = function (nums, target) {
  return [findStartIndex(nums, target), findEndIndex(nums, target)];
  // T(n): O(n)
  // S(n): O(n)
  //   let startIndex = -1;
  //   let endIndex = -1;
  //   for (let i = 0; i < nums.length; i += 1) {
  //     const num = nums[i];
  //     if (num === target && startIndex === -1) {
  //       startIndex = i;
  //       endIndex = i;
  //     } else if (num === target) {
  //       endIndex = i;
  //     }
  //   }
  //   return [startIndex, endIndex];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
