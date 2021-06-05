//testing
//console.log("is this thing on")

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

 var button = document.getElementById("btn");

 //Starting with generating the random characters
 /* Set up DOM elements, connected to form*/
 var resultEl = document.getElementById("result");
 var lengthEl = document.getElementById("length");
 var lowerEl = document.getElementById("lowercase");
 var upperEl = document.getElementById("uppercase");
 var numbersEl = document.getElementById("numbers");
 var symbolsEl = document.getElementById("symbols");
 var resultEl = document.getElementById("password-container")
 
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
 //TESTING FUNCTIONS
 console.log(getRandomLowerLetter());
 console.log(getRandomUpperLetter());
 console.log(getRandomNumber());
 console.log(getRandomSpecialCharacter());

 
 var randomFunctions = {
     lower: getRandomLowerLetter,
     upper: getRandomUpperLetter,
     number: getRandomNumber,
     specialCharacter: getRandomSpecialCharacter,
 }
 
 /* Add event listener */
   button.addEventListener("click", function() {
     var length = +lengthEl.value;
     var hasLower = lowerEl.checked;
     var hasUpper = upperEl.checked;
     var hasNumbers = numbersEl.checked;
     var hasSymbols = symbolsEl.checked;
 
     console.log(length, hasLower, hasUpper, hasNumbers, hasSymbols);
     //resultEl.appendChild.innertext = generatePassword(length, hasLower, hasUpper, hasNumbers, hasSymbols);
 });
 
 /*Password function*/
 function generatePassword(lower, upper, number, specialChracter, length){
 
     let generatedPassword = "";
 
     var typesCount = lower + upper + number + specialChracter;
 
     console.log("typesCount:" + typesCount);
 }
 
 