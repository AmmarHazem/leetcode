var nextPermutation = function (nums) {
  let pivot = -1;
  for (let i = nums.length - 2; i >= 0; i -= 1) {
    if (nums[i] < nums[i + 1]) {
      pivot = i;
      break;
    }
  }
  if (pivot === -1) {
    nums.reverse();
    return;
  }
  for (let j = nums.length - 1; j > pivot; j -= 1) {
    if (nums[j] > nums[pivot]) {
      [nums[j], nums[pivot]] = [nums[pivot], nums[j]];
      break;
    }
  }
  let left = pivot + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left += 1;
    right -= 1;
  }
};
