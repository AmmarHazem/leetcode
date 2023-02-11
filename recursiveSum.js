function recursiveSum(arr) {
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + recursiveSum(arr.slice(1));
}

console.log(recursiveSum([1, 2, 3]));
