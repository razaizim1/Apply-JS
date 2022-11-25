function hourToMin(hour) {
    var min = 60 * hour;
    return min;
}

var dadiMinv = hourToMin(10);
console.log(dadiMinv);
var tarekMin = hourToMin(200);
console.log(tarekMin);
var limonMin = hourToMin(1);
console.log(limonMin);
var mins = [10, 200, 1, 50]
//forlopp
var ammuMinPosition = mins.indexOf(50);
console.log(ammuMinPosition); 
var ammuMin = hourToMin(mins[3]);
console.log(ammuMin);