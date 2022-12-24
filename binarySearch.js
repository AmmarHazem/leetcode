// O(log n)
// where n is the arr length
function binarySearch(arr, value, arrStart, arrEnd) {
  const start = arrStart ?? 0;
  const end = arrEnd ?? arr.length - 1;
  if (end < start) {
    return -1;
  }
  const mid = Math.floor((end + start) / 2);
  if (arr[mid] === value) {
    return mid;
  } else if (arr[mid] > value) {
    return binarySearch(arr, value, start, mid);
  } else {
    return binarySearch(arr, value, mid + 1, end);
  }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(array, 8));

// len === 8
// steps = log2(8) = 3
// len === 128
// steps = log2(128) = 7
// len === 256
// steps = log2(256) = 8
