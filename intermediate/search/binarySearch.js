let arr = [34, 545, 6, 665, 544, 34, 6, 45756, 5665];
arr.sort((a, b) => a - b);

let func = (target) => {
  let left = 0;
let right = arr.length - 1;

while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      console.log(mid);
      return
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

func(665)