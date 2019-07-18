/////////////////////////////////
// "IF/ELSE IF/ELSE" STATEMENT //
/////////////////////////////////
console.log("You find yourself in a store shopping...");
// Create a variable "health" and set it equal to 100
let health = 100;
console.log(HP = 100);

// Create a variable "money" and set it equal to 100
let money = 100;
console.log(ZENI = 100);

// Create a variable "item" and set it equal to the user's second command
// line argument
let item = process.argv[2]


// If "item" is "jacket", subtract 40 from "money" and add 20 to "health" and console.log("You bought a jacket");
if (item == "jacket") {
    money -= 40; // money= money-40
    health += 20 //health= health + 20
    console.log("You ought a Jacket")
}

// else if "item" is "candy", subtract 10 from "money" and console.log("You bought candy");
if (item == "candy") {
    money -= 40; // money= money-40
    health += 20 //health= health + 20
    console.log("You ought a Jacket")
}

// else if "item" is "paint", subtract 30 from "money" and console.log("You bought paint");


// else if "item" is "hammer", subtract 70 from "money" and console.log("You bought a hammer");


// else console.log "You bought nothing"

// console.log(`You have ${money} dollars left.`);

// Test to make sure the script is working as intended.
