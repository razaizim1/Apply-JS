

function arraySum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
let numbers = [10, 20, 65, 1, 5, 14, 23, 4];
let result = arraySum(numbers);

console.log('Total', result);

