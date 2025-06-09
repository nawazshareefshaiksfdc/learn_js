let x = [455,6,3,6765];

let quickSort = (arr) => {
   n = arr.length;
   if (n <= 1) return arr;

   let left = [];
   let right = [];
   let pivot = arr[n-1];
   for (let i = 0; i < n - 1; i++) {
      if (arr[i]<pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
      
   }
   return ([...quickSort(left),pivot,...quickSort(right)]);
}

let sol = quickSort(x);
console.log(sol);
