/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const nums = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    const num1 = nums1[i] ?? Infinity;
    const num2 = nums2[j] ?? Infinity;
    if (num1 < num2) {
      nums.push(num1);
      i += 1;
    } else if (num2 < Infinity) {
      nums.push(num2);
      j += 1;
    }
  }
  for (let x = i; x < nums1.length; x += 1) {
    nums.push(nums1[x]);
  }
  for (let y = j; y < nums2.length; y += 1) {
    nums.push(nums2[y]);
  }
  console.log("nums", nums);
  if (nums.length % 2 === 0) {
    const middleIndex = nums.length / 2 - 1;
    const num1 = nums[middleIndex];
    const num2 = nums[middleIndex + 1];
    return (num1 + num2) / 2;
  }
  return nums[Math.floor(nums.length / 2)];
};
