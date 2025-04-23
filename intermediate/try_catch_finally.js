let num =1 ;
try {
    // console.log('this is nawaz');
    num.toUpperCase();
    
} catch (error) {
    console.log(error.name);
}
finally{
    console.log('the task is completed');
}