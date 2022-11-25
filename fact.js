// let factorial = 1;
// let i = 1;
// while (i <= 5) {
//     factorial = factorial * i;
//     console.log(i);
//     i++;
// }

function factorial(n) {
    let fact = 1;
    let i = 1;
    while (i <= n) {
        fact = fact * i;
        i++;
    }
    return fact;
}

console.log(factorial(10));