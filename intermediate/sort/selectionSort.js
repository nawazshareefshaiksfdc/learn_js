let selectionSort = (arr) => {
    let n = arr.length;
    if(n <=1 ) return arr;
    for (let i = 0; i < n-1; i++) {
        let min = i;
        for (let j = i+1; j < n; j++) {
           if (arr[j] < arr[min]) {
            min = j
           } 
            
        }
   if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
    }
    return arr;
}



let sol = selectionSort(x);
console.log(sol);