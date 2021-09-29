// Assignment Code
var generateBtn = document.querySelector("#generate");
// defining paswoord charector variables
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "z"];
//numbers and symbols
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "+"];


function generatePassword() {

  // ask for the length of the password
  //prompt function, save to a variable
  var inputPasswordLength = prompt("please enter the enter length of the password ( between 8 t0 128 characters.)", "enter here");
  var passwordLength = parseInt(inputPasswordLength);

  // check if value is valid( between 8 - 128) if else statement
  if (passwordLength < 8 || passwordLength > 128) {
    alert("please choose the lenght at least 8 characters and no more than 128 characters ");
    return;
  }
  // ask for lower, upper, numbers, symbols
  // confirm function - returns true or false
  //check if user wants them, if so, add to availableCharacters array
  var availableCharacters = [];

  // check if user wants uppers, if so, add uppers to availableCharacters array
  var includeUpper = confirm("Confirm if you want uppercase letters");
  if (includeUpper) {
    availableCharacters = upperCase.concat(availableCharacters);
    console.log("Upercase " + includeUpper);
    console.log(availableCharacters);
  } else {
    console.log("Upercase " + includeUpper);
  };

  var includeLowerCase = confirm("Confirm if you want Lowercase letters");
  if (includeLowerCase) {
    availableCharacters = lowerCase.concat(availableCharacters);
    console.log("lowercase " + includeLowerCase);
    console.log(availableCharacters);
  } else {
    console.log("lowercase " + includeLowerCase);
  };

  var includeNumber = confirm("Confirm if you want Number");
  if (includeNumber) {
    console.log("Number " + includeNumber);
    availableCharacters = number.concat(availableCharacters);
    console.log(availableCharacters);
  } else {
    console.log("Number " + includeNumber);
  }

  var includeSymbol = confirm("Confirm if you want Symbols (ex. !, @, #, $, %, ^, &, *, -, +)");
  if (includeSymbol) {
    console.log("Symbol " + includeSymbol);
    availableCharacters = symbols.concat(availableCharacters);
    console.log(availableCharacters);
  } else {
    console.log("Symbol " + includeSymbol);
  };

  // Check that there is at least one value of each selected type in the password, if not, generate again.
  if (includeUpper == true || includeLowerCase == true || includeSymbol == true || includeNumber == true) {

    //for loop, starting at 0, ending at password length
    //snippet to generate a random index in an array:
    //inside the for loop select a character out of the array.
    //Add it to the password (use the += operator to add a character to a string)
    var password = "";

    for (var i = 0; i < passwordLength; i++) {


      password += availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
      console.log(password);

    }
    return password;

  } else {
    // check if user aswers no to all questions
    alert("At least one character type should be selected !!!");
    return;
  };
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);