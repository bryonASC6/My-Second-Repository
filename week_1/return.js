// //Functions 2.0
// function functionNameThatReturns(){
//     return "I am returning a String to you!";
// }

// // store the "function call in a variable"
// let result = functionNameThatReturns();
// console.log(result);

// // WHATEVER IS BEHIND 'return' IS WHAT APPEARS IN console.log WHEN result = String

// let num = 3 ** 2;
// console.log(num);

// function exponentFunction(base, power) {
//     // compute the answer
//     let answer = base ** power;
//     return answer;
// }

// let userBase = process.argv[2];
// let userPower = process.argv[3];

// // user input
// let answer1 = exponentFunction(userBase,userPower);

// // auto-input
// let answer2 = exponentFunction(2,4);
// let answer3 = exponentFunction(13,0);
// console.log(answer1)


// // Third function
// function stringToNumSum(string1, string2) {
//     // turn Strings into Numbers
//     let num1 = parseInt(string1);
//     let num2 = prseInt(string2);
    
    
//     // compute answer
//     let= answer = num1 + num2;

//     return answer;
// }

// let sum1 = stringToSumNum('7', '8');
// console.log(sum1);


// function splitLyrics(lyrics) {
//     //split the lyrics String and turn it into a 
//     let lyricsArray = lyrics.split("  ");

//     return lyricsArray;
// }

// // declare a variable to store lyrics
// let EARFQUAKE = "Oh, you make my earth quake (x2)  Riding around, your love is shakin me up and its making my heart break 'Cause you make my earth quake earth quake ooh Oh you make my earth quake Riding around, your love is shakin me up and its making my heart break Don't leave its my fault Dont leave its my fault Dont leave its my fault yeah 'Cause when it all comes crashing down Ill need you"

// let lyricsArray = splitLyrics(EARFQUAKE);

// console.log(lyricsArray);





// function kofi() {
//     console.log("I love wrestling!")

//     let winner = wrestling('Louis','Kofi');
//     return winner;

// }


function wrestling(player1, player2){

let decimal= Math.random();
let adjustedNum = decimal * randomNum;
let randomNum = Math.floor(adjustedNum);

if (randomNum == 0) {
    return player1;
}
else {
    return player2;
    }

}

let winner = ("Louis","Kofi");
console.log( winner, "wins the wrestling match!")
