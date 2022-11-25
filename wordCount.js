let speech = "I am a   freelancer since 2018";
count = 0;

for (let i = 0; i < speech.length; i++) {
    let char = speech[i];
    if( char == " " && speech[i-1] != " ") {
        count++
    }
}
count++
console.log(count);