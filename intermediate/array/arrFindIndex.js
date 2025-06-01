let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let datum = [434,4545,3434,3,3,545,45,545,6,656]
let myfunc = (n,arr) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            console.log(i);
            return;
        } 
    }
}

myfunc(6, datum);