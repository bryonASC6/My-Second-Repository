num1 = 5
num2 = 5
boolean3 = num1 < num2
// let boolean4= num 1 == num2; 
boolean5 = num1 != num2;

console.log(boolean5);

//This  is FALSE;




// less than: <
// more than: >
// equal to : =
// less than or equal to: <=
// more than or equal to: >=

let string1 = "ABC";
let string2 = "ABC";

console.log(string1=string2);

newNumber = 7;

//Modules
//any # (using module {%}) EQUALS 1 = ODD
//any # (using module {%}) EQUALS 0 = EVEN




unknownNumber = 6;

let boolean6 = unknownNumber % 2 == 0;
console.log(boolean6)

if (unknownNumber % 2 == 0) {
    console.log("the unknown # is even!");

}
if (unknownNumber % 2 != 0) {
    console.log("The unknown # is odd!");
}

//OR

if (unknownNumber % 2 == 0) {
    console.log("the unknown # is even!");

}
else { console.log("The unknown # is odd!");
}

let studentName = "Anthony"

if (studentName == "Andre") {
    console.log("Welcome",studentName);
    console.log(studentName, "is a DJ");
}

else if (studentName="Oscar") {
    console.log("Welcome", studentName);
    console.log(studentName, "plays squash");
}
else {
    console.log("Welcome", studentName);
    console.log(studentName,"is not Andre or Oscar");
}


// IF = NEEDED TO START
// IF ELSE = MULTIPLE ASSIGNMENTS
// ELSE = THE TERMINAL; THE END-ALL BE-ALL



let secretNumber=5;
if (secretNumber < 2) {
    console.log("A");
}
else if (secretNumber < 4) {
    console.log("B");
}
else if (secretNumber < 6) {
    console.log("C");
}
else {
    console.log("D");
}


let correctGuess = 25;

let userGuess = 23;

if (userGuess == correctGuess) {
    console.log("Correct!");
    }
else if (userGuess < correctGuess) {
console.log("Too low");
}
else if (userGuess > correctGuess) {
    console.log("Too high. Try again");
    }
    


// collect user's input

//let userGuess = process.argv[2];

// declare a variable for user's score
let score = 0;

// evaluate user's answer
// if the user answers correct 
if (userGuess== "A"){
    score += 2; //score = score + 1;
    console.log("Your score is" + score);
}
// if the user answers incorrectly
if (userGuess == "B"){
    scope -= 1;
    console.log("Sorry this is an invaid answer");
}
else {
    console.log("YAHYEET");
}











let mysteryman = "DoctorX";
console.log("DoctorX")

if (mysteryman == "IceCreamManJerry"){
    console.log("not guilty");
}
else if (mysteryman == "SallySalonist"){
    console.log("not an acomplice: not guilty");
}
else if (mysteryman == "QuentinTailor"){
    console.log("not present: not guilty");
}
else if (mysteryman == "CedrictheConstructor"){
    console.log("the victim cannot be guilty")
}
else if(mysteryman == "DoctorX") {
    console.log(mysteryman, "is guilty! The MURDERER!!");
}

