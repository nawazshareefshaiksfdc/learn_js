let quickSort = (arr) => {

  if(arr.length <= 1) return arr;

  let pivot = arr[arr.length -1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length -1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])   
    }
  }
  return ([...quickSort(left),pivot,...quickSort(right)])
}

let data = [45,32,343,45654,31,89,56,87];

console.log(quickSort(data));
