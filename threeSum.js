var threeSum = function (nums) {
  const result = [];
  const sortedArray = mergeSort(nums);
  for (let i = 0; i < sortedArray.length; i += 1) {
    if (i !== 0 && sortedArray[i] === sortedArray[i - 1]) {
      continue;
    }
    let leftIndex = i + 1;
    let rightIndex = sortedArray.length - 1;
    while (leftIndex < rightIndex) {
      const threeSum =
        sortedArray[i] + sortedArray[leftIndex] + sortedArray[rightIndex];
      if (threeSum > 0) {
        rightIndex -= 1;
      } else if (threeSum < 0) {
        leftIndex += 1;
      } else {
        result.push([
          sortedArray[i],
          sortedArray[leftIndex],
          sortedArray[rightIndex],
        ]);
        leftIndex += 1;
        while (
          sortedArray[leftIndex] === sortedArray[leftIndex - 1] &&
          leftIndex < rightIndex
        ) {
          leftIndex += 1;
        }
      }
    }
  }
  return result;
};

const mergeSort = function (array) {
  if (array.length < 2) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const sortedLeftHalf = mergeSort(array.slice(0, middle));
  const sortedRightHalf = mergeSort(array.slice(middle, array.length));
  const sortedArray = array.map((_) => null);
  let leftIndex = 0;
  let rightIndex = 0;
  let sortedArrayIndex = 0;
  while (
    leftIndex < sortedLeftHalf.length &&
    rightIndex < sortedRightHalf.length
  ) {
    if (sortedLeftHalf[leftIndex] < sortedRightHalf[rightIndex]) {
      sortedArray[sortedArrayIndex] = sortedLeftHalf[leftIndex];
      leftIndex += 1;
    } else {
      sortedArray[sortedArrayIndex] = sortedRightHalf[rightIndex];
      rightIndex += 1;
    }
    sortedArrayIndex += 1;
  }
  while (leftIndex < sortedLeftHalf.length) {
    sortedArray[sortedArrayIndex] = sortedLeftHalf[leftIndex];
    leftIndex += 1;
    sortedArrayIndex += 1;
  }
  while (rightIndex < sortedRightHalf.length) {
    sortedArray[sortedArrayIndex] = sortedRightHalf[rightIndex];
    rightIndex += 1;
    sortedArrayIndex += 1;
  }
  return sortedArray;
};

// console.log(mergeSort([4, 3, 6, 2, 5, 1]));
// console.log(mergeSort([2, 1]));
// console.log(mergeSort([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(mergeSort([3, 5, 8, 1, 9, 7, 2, 6, 4]));
// const result = threeSum([-3, 3, 4, -3, 1, 2]);
const result = threeSum([-1, 0, 1, 2, -1, -4]);
// const result = threeSum([0]);
// const result = threeSum([0, 0, 0, 0]);
for (const arr of result) {
  console.log(arr);
}
