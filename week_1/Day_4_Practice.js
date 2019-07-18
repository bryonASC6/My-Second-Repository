//Question 1:
// console.log(process.argv[2]);
// console.log(process.argv[3]);

// //What happens when the user runs...

// //node Day_4_Practice.js lalala Goku
// //node Day_4_Practice.js All Star Code
// //node Day_4_Practice.js BoooooooSpoooky
// //node Day_4_Practice.js

// // Question 2: What is the value of sum at the end of the program?
// let theTrueBoolean = true;
// let theFalseBoolean = false;
// let sum = 0;

// if (theTrueBoolean) {
//     console.log("A");
//     sum += 2;
// }

// if (theFalseBoolean) {
//     console.log("B");
//     sum += 2;
// }

// // NOTE: '&&' = AND
// if (theTrueBoolean && theFalseBoolean){
//     console.log("C");
//     sum++;
// }

// // NOTE: || = OR
// if (theTrueBoolean || theFalseBoolean){
//     console.log("D");
//     sum++;
// }

// console.log("The ultimate answer is", sum);


// True && True = True
// True && False = False
// False && False = False
// True || True = True
// True || False = True
// False || False = False


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