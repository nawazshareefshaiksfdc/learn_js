function infiniteAdd(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(infiniteAdd(10, 20, 30));
