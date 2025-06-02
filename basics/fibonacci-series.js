let data1 = (num) =>{
    let n1= 0;
    let n2 = 1;
    let tot;
    let myarray =[]
    for (let i = 0; i < num; i++) {
        myarray[i] = n1;
        tot = n1 + n2;
        n1 = n2;
        n2 = tot;
    }
    console.log(myarray);
}

let data2 = (num) =>{
    let n1= 0;
    let n2 = 1;
    let tot;
    for (let i = 0; i < num; i++) {
        console.log(n1);
        tot = n1 + n2;
        n1 = n2;
        n2 = tot;
    }
}

let data3 = (num) =>{
    let n1= 0;
    let n2 = 1;
    let tot;
    let myobj = {};
    for (let i = 0; i < num; i++) {
        myobj[`the value of ${i} is: `] = n1;
        tot = n1 + n2;
        n1 = n2;
        n2 = tot;
    }
 console.log(myobj);
}

let data4 = (num) => {
 let n1 = 0;
 let n2 = 1;
 let tot;
 for (let i = 0; i < num; i++) {
   tot = n1 + n2;
   n1 = n2;
   n2 = tot; 
 }
 console.log(`the value of ${num} is `+n1);
}

data4(5);

let fib = (prev1, prev2, count) => {
    console.log(prev2);
    if (count === 0) return;
    fib(prev1 + prev2, prev1, count - 1);
};

fib(1, 0, 20);
