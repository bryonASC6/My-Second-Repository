// declare a number as a variable
let num = 1;

while (num <= 100) {
    num += 1;
    console.log(num);

    if (num % 2 == 1) {
        console.log("ODD");
    }

    if (num % 2 == 0) {
        console.log("EVEN")
    }
}

console.log("Finished looping");




// collect user input
let userInput = process.argv[2];

// the while loop
while (num <= userInput) {
    console.log("The current number is", num);

    if (num % 2 == 1) {
        console.log("is ODD");
    }

    if (num % 2 == 0) {
        console.log("is EVEN");
    }

    if (num == 1000) {
        console.log ("STOP! This number is too large.");
        break;
    }
   // incremient num
        num += 1
    }   

// You are given an array - students' names @Medidata
let ourNames = ["Bryon","Oscar","Aishan","Kensley","Aidan",'Louis','Angel','Anthony','Judah','Cade','Rahat','Gary','Joshua','Solomon'];

ourNames.sort();

// hint:
// let myVar = "abc";
// console.log(myVar.length);

let totalLength=0;

for(let i = 0; i < ourNames.length; i++) {
console.log (ourNames[i].length);
totalLength += ourNames[i].length;
} 

let averageLength = totalLength / ourNames.length;

console.log("Total length", totalLength);
console.log('Average length:', averageLength);