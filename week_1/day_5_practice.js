// function revision
function myfunction(num){

    //the algorithm to generate random numbers
    //(no need to memorize,just Google it)
    decimal = Math.random(); // 0 to .99999....
    let adjustedNumber = decimal * num;
    let randomInteger = Math.floor (adjustedNumber);
    console.log(randomInteger);

}

//function calls
myfunction(8);
myfunction(100);
myfunction('abc');
myfunction('8');

// Question 1: What does the function do?
   //The function does a random integer depending on your parameters.
   //It 

// Question 2: What is the output of each function call?
    // RN , RN, NaN, RN



//for loop

let number = 10;
let myString = '';

for (let a = 0; a < number; a++) {

    myString += 'o';
    console.log("looping...");
}

console.log(myString);

//Question 1: What is the output?


//Question 2: Replace line #3 with: let number = process.argv[3];
//What is the output for the following command on GitBash :

//          2a. node day_5_revision.js 10

//          2b. node revision2.js 10 35 27 silly possible