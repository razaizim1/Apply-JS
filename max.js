let zimAGe = 25;
let johnAge = 23;
let nickAge = 30;

if (zimAGe > johnAge) {
    if (zimAGe > nickAge) {
        console.log('Zim Is Younger');
    } else {
        console.log('Nick Is Younger');
    }
} else {
    if ( johnAge > nickAge) {
        console.log('John Is Younger');
    } else {
        console.log ('Nick Is Younger')
    }
} 

// short rules

let max = Math.max(zimAGe , johnAge, nickAge);
console.log(max);