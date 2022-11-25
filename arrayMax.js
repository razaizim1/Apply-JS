let marks1 = [2, 7, 3, 9, 9, 8, 1, 3, 4, 5, 6, 5, 3, 6, 5, 4, 7, 8, 9, 3, 11, 33, 55, 94, 3, 4, 6, 42, 6, 4, 9, 44,1000, 931, 659, 3, 32, 48, 6,];
let maxMarks1 = marks1[0];

for (let i = 0; i < marks1.length; i++ ) {
    let element = marks1[i];
    if (element > maxMarks1) {
        maxMarks1 = element; 
    }
}

console.log('Highest Marks Is', maxMarks1);







let numbs = [12, 45, 48, 6, 4, 2, 6, 4, 78, 26, 44, 66, 58, 66, 223, 44, 996];
let maxNub = numbs[0];
for (let i = 0; i < numbs.length; i++) {
    let element = numbs[i];
    if (element > maxNub) {
        maxNub = element;
    }

} console.log('Max num is', maxNub);


let marks = [45, 78, 69, 12, 85, 45, 63, 23, 15, 99, 98, 78, 96, 100];
let maxMarks = marks[0];

for (let i = 0; i < marks.length; i++) {
    let element = marks[i];
    if (element > maxMarks) {
        maxMarks = element;
    }
}
console.log('Highest number is', maxMarks);