let data = [3, 2, 6, 8, 4, 1, 9, 0, 5, 7];

let bubbleSort = (n) => {
    for (let i = 0; i < n.length - 1; i++) {
        for (let j = 0; j < n.length - i - 1; j++) {
            if (n[j + 1] < n[j]) {
                let temp = n[j];
                n[j] = n[j + 1];
                n[j + 1] = temp;
            }
        }
    }
    return n;
}

let sol = bubbleSort(data);

console.log(sol);
