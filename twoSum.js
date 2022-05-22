var twoSum = function (nums, target) {
  const prevValuesMap = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    const differenceToTarget = target - nums[i];
    if (prevValuesMap.get(differenceToTarget) !== undefined) {
      return [i, prevValuesMap.get(differenceToTarget)];
    } else {
      prevValuesMap.set(nums[i], i);
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
