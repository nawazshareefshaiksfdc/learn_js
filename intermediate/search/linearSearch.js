let data = [33434, 2343, 4, 342, 32, 34, 234, 4, 4, 5, 3, 423, 423, 42, 42, 4244, 2];

let linearSearch = (value) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === value) {
            console.log(`it found at the index of ${i} with the length of ${i + 1}`);
        }
    }
}

linearSearch(234);