function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const elementsSmallerThanPivot = [];
  const elementsBiggerThanPivot = [];
  for (let i = 0; i < arr.length; i += 1) {
    const ele = arr[i];
    if (i === pivotIndex) continue;
    if (ele < pivot) {
      elementsSmallerThanPivot.push(ele);
    } else {
      elementsBiggerThanPivot.push(ele);
    }
  }
  return [...quickSort(elementsSmallerThanPivot), pivot, ...quickSort(elementsBiggerThanPivot)];
}

console.log(quickSort([3, 7, 1, 5, 2, 4, 6]));
