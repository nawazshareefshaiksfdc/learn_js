function mergeSort(arr) {
  // Base case: if the array has one or zero elements, it's already sorted
  if (arr.length <= 1) return arr;

  // Step 1: Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));    // Recursively sort the left half
  const right = mergeSort(arr.slice(mid));      // Recursively sort the right half

  // Step 2: Merge the sorted halves
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  // Compare elements from both halves and push the smaller one
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  // Add any remaining elements from left or right
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Test it
const data = [38, 27, 43, 3, 9, 82, 10];
const sorted = mergeSort(data);
console.log("Sorted Array:", sorted);
