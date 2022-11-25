let num = [1,2,3,4,5,6,1,2,4,8,9,77,1,2,3,4,5,889,889,77,6654,45];
let uniqueArray = [];

for (let i = 0; i < num.length; i++) {
    let element = num[i];
    let index = uniqueArray.indexOf(element);
    if ( index == -1) {
        uniqueArray.push(element);
    }
}

console.log(uniqueArray);