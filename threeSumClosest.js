/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((i, j) => i - j);
  let sum = Infinity;
  for (let i = 0; i < nums.length - 1; i += 1) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      const diff = target - currentSum;
      if (Math.abs(diff) < Math.abs(target - sum)) {
        sum = currentSum;
      }
      if (currentSum > target) {
        right -= 1;
      } else if (currentSum < target) {
        left += 1;
      } else {
        return currentSum;
      }
    }
  }
  return sum;
};

console.log(threeSumClosest([1, 2, 7, 13], 12));
console.log();
