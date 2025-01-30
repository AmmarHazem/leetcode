function permute(arr) {
  const result = [];
  function backtrack(index, currentPermutation) {
    if (index === arr.length) {
      result.push([...currentPermutation]); // Add a copy to avoid modification
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (!currentPermutation.includes(arr[i])) {
        // Avoid duplicates in current permutation
        currentPermutation.push(arr[i]);
        backtrack(index + 1, currentPermutation);
        currentPermutation.pop(); // Backtrack: Remove last element for next iteration
      }
    }
  }
  backtrack(0, []);
  return result;
}

var nextPermutation = function (nums) {
  const allPermutations = generatePermutations(nums);
  let index = 0;
  allPermutations.forEach((arr, i) => {
    if (arr.join("") === nums.join("")) {
      index = i;
    }
  });
  return allPermutations[(index + 1) % allPermutations.length];
};

function generatePermutations(arr) {
  if (arr.length < 2) {
    return [arr];
  } else if (arr.length === 2) {
    return [
      [arr[0], arr[1]],
      [arr[1], arr[0]],
    ];
  }
  const results = [];
  for (const element of arr) {
    const subPermutations = generatePermutations(arr.filter((i) => i !== element));
    for (const perm of subPermutations) {
      results.push([element, ...perm]);
    }
  }
  return results;
}

const myArray = [1, 2, 3, 4, 5];
const allPermutations = generatePermutations(myArray);
console.log(allPermutations);

const nextPerm = nextPermutation([1, 2, 3]);
console.log(nextPerm);
