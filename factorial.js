// var factorial = 1; 
// for (i = 1; i <=5; i++) {
//     factorial = factorial * i;
//     return factorial;
// }


function factorial (n) {
    let factorial = 1;
    for ( let i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial
}

console.log(factorial(10));