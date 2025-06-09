function insertionSort(arr) {
  // Start from the second element (index 1)
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];   // Element to be inserted
    let j = i - 1;

    // Shift elements of the sorted part that are greater than current
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];  // Move element one position ahead
      j--;
    }

    // Insert the current element into its correct position
    arr[j + 1] = current;
  }

  return arr;
}

// Example usage
const data = [9, 5, 1, 4, 3];
const sorted = insertionSort(data);
console.log("Sorted Array:", sorted);  // [1, 3, 4, 5, 9]
