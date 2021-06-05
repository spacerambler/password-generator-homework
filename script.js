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

STEPS BRAINSTORM:
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
 function generatePassword(hasLower, hasUpper, hasNumbers, hasSymbols, length){
 
     let generatedPassword = "";
 
     var typesCount = hasLower + hasUpper + hasNumbers + hasSymbols;
        //this is showing what has been checked

     console.log("typesCount:" + typesCount);

     //Add in an array here using object literals aka curly brackets around types which will be used in the loop
     //also need to add in a filter on the var for the items... if they aren't selected then they won't show in the array
     //filter creates a new array with all the elements that pass through the function

     var typesArray = [{hasLower}, {hasUpper}, {hasNumbers}, {hasSymbols}].filter(item => Object.values(item)[0])
        //in filter... object/valuse/item are all pre-prescribed syntax within the array


     //For each loop using types array, types count is the increment
     //need to create a new var in the loop 


     //append the generatedPassword created in this function to randomize 
 }

/*Input the generatedPassword string into the HTML*/


//NICE TO HAVES... come back after assignment is turned in 
//Add validation for the length requirements
//
