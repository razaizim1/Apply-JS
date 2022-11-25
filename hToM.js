function hToM (hour) {
    var min = 60*hour;
    return min;
}

var hours = [10, 20, 30, 50];

var firstHour = hToM (hours[0]);
console.log(firstHour);

var secHoursPosition = hours.indexOf(30);
console.log(secHoursPosition); 

var secondHour = hToM (hours[2]);
console.log(secondHour);