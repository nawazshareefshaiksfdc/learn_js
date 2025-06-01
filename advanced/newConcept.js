let data = [4345, 565, 5, 45, 4, 64, 5];

function* func(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

for (let item of func(data)) {
  console.log(item);
}
