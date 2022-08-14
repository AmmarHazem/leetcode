const mergeSort = (s) => {
  if (s.length < 2) return s;
  const middleIndex = Math.floor(s.length / 2);
  const leftHalf = s.substring(0, middleIndex);
  const rightHalf = s.substring(middleIndex, s.length);
  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);
  let sortedValues = "";
  let leftIndex = 0;
  let rightIndex = 0;
  while (
    leftIndex < sortedLeftHalf.length &&
    rightIndex < sortedRightHalf.length
  ) {
    if (sortedLeftHalf[leftIndex] > sortedRightHalf[rightIndex]) {
      sortedValues += sortedRightHalf[rightIndex];
      rightIndex += 1;
    } else {
      sortedValues += sortedLeftHalf[leftIndex];
      leftIndex += 1;
    }
  }
  while (leftIndex < sortedLeftHalf.length) {
    sortedValues += sortedLeftHalf[leftIndex];
    leftIndex += 1;
  }
  while (rightIndex < sortedRightHalf.length) {
    sortedValues += sortedRightHalf[rightIndex];
    rightIndex += 1;
  }
  console.log("--- sorted values", sortedValues);
  return sortedValues;
};

// Time complexity O(n)
const getFrequencyMapOfString = (s) => {
  const freq = new Map();
  for (const c of s) {
    if (freq.has(c)) {
      freq.set(c, freq.get(c) + 1);
    } else {
      freq.set(c, 1);
    }
  }
  return freq;
};

// Time complexity: O(n)
// With merge sort time complexity: O(nlogn)
const validAnagram = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  //   const freq1 = getFrequencyMapOfString(s1);
  //   const freq2 = getFrequencyMapOfString(s2);
  //   for (const [key, value] of freq1) {
  //     if (freq2.get(key) !== value) {
  //       return false;
  //     }
  //   }
  //   return true;
  return mergeSort(s1) === mergeSort(s2);
};

console.log(validAnagram("danger", "garden"));
console.log(validAnagram("salesmen", "nameless"));
