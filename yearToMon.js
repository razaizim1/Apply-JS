function yearToMon (year) {
    var mon = 12*year;
    return mon;
}

years = [20, 40, 23,1];

var firstYearPosition = years.indexOf(20);
console.log(firstYearPosition);
var  firstYear = yearToMon(years[0]);
console.log(firstYear);

var lastYearPosition = years.indexOf(1);
console.log(lastYearPosition);
var lastYear = yearToMon(years[3]);
console.log(lastYear);