// Declare a days array
let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];


// Generate a number from 0 to .99999999999....
let decimal = Math.random();

//adjust decimal based on the upperLimit
//adjustedNumber = decimal * (upperLimit + 1)
let adjustedNumber = decimal * days.length;

let randomInteger = Math.floor(adjustedNumber);

// Round the number down to the nearest integer
console.log("Random number generated",randomInteger);

// Output the random number
let randomDay = days[randomInteger];

console.log("Your first lucky day is...",randomDay);

days.splice(randomInteger,1)


let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];


// Generate a number from 0 to .99999999999....
let decimal = Math.random();

//adjust decimal based on the upperLimit
//adjustedNumber = decimal * (upperLimit + 1)
let adjustedNumber = decimal * days.length;

let randomInteger = Math.floor(adjustedNumber);

// Round the number down to the nearest integer
console.log("Random number generated",randomInteger);

// Output the random number
let randomDay2 = days[randomInteger2];

console.log("Your second lucky day is...",randomDay);

