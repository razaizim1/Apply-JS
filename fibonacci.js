// let fibonacci = [0,1];

// for ( let i = 2; i<= 9; i++) {
//     fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; 
// }

// console.log(fibonacci);

function fibo (n) {
    let fibonacci = [0,1];

for ( let i = 2; i<= n; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; 
}
return fibonacci
}

let result = fibo(12);
console.log(result);