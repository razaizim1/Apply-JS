let statement = "I am Zim. A professional freelancer";
let reverse = "";

function reverseStr(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

console.log(reverseStr(statement));