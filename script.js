// Assignment Code
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// ask for the length of the password
//prompt function, save to a variable
// check if value is valid( between 8 - 128) if else statement

 // ask for lower, upper, numbers, symbols
 // confirm function - returns true or false
  //var includeUpper = confirm("message");
 // repeat for other char types

 // check if user aswers no to all questions
 // if statement to check that at least 1 value is true

 // var uppercase = ["A","B"...."Z"];
 // var lower = ["a","b"...."z"];
  //numbers and symbols

 // var availableCharacters = []

 // check if user wants uppers, if so, add uppers to availableCharacters array 
  //check if user wants lowers, if so, add lowers to availableCharacters array
 // etc
  //to join two arrays, concat()

  //availableCharacters = ["A","B"... "1","2"]

  //var password = ""

 // for loop, starting at 0, ending at password length
 // inside the for loop
  //select a character out of the array.
 // Add it to the password (use the += operator to add a character to a string)
//  snippet to generate a random index in an array:
 // Math.floor(Math.random() * availableCharacters.length)

 // Check that there is at least one value of each selected type in the password, if not, generate again.

  //return the password value