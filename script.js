//testing
console.log("is this thing on")

//What is the object?
/* The final object/product is the generated password.

Password Criteria:
 - lowercase
 - uppercase
 - numeric
 - special characters
 - number of characters -- typed in

STEPS:
 1. User lands on the page and clicks button to generate a password... EVENT LISTENER
 2. Selectors appear for password criteria... IF ELSE
 3. Click button to get password... another event listener?
 4. Display password on page

 */

 //Starting with generating the random characters

 function getRandomLowerLetter(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
/*string. returns a string rather than other data types;
    floor provides a whole number; random provides random number up to 26, letters in the alphabet
    +97 because that is where the lowercase letters start in the character code*/

function getRandomUpperLetter(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function getRandomSpecialCharacter(){
    var symbols = "!@#$%^&*?><"
    return symbols[Math.floor(Math.random() * symbols.length)]
}
/* TESTING FUNCTIONS
console.log(getRandomLowerLetter());
console.log(getRandomUpperLetter());
console.log(getRandomNumber());
console.log(getRandomSpecialCharacter());
*/

var randomFunctions = {
    lower: getRandomLowerLetter,
    upper: getRandomUpperLetter,
    number: getRandomNumber,
    specialCharacter: getRandomSpecialCharacter,
}