// Assignment Code
var generateBtn = document.querySelector("#generate");
var optLowercase, optUppercase, optNumeric, optSpecial, passLength, countTypes;
let passwordArray = [], passwordSlice, password;
 
// Write password to the #password input
function writePassword() {

  getRequirements();
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Requesting parameters for password creation (length, numbers, letters and special characters)
function getRequirements(){
  countTypes = 0, passLength = 0;
  passLength = window.prompt("How many characters would you like your password to have? You can choose any number between 8 and 128");

    if(passLength < 8 || passLength > 128){
      window.alert("Please select a number of characters between 8 and 128");
      return false;
    } else {

    optLowercase = window.confirm("Do you want to include lowercase characters?");
    if (optLowercase === true) {++countTypes};

    optUppercase = window.confirm("Do you want to include uppercase characters?");
    if (optUppercase === true) {++countTypes};

    optNumeric = window.confirm("Do you want to include numeric characters?");
    if (optNumeric === true) {++countTypes};

    optSpecial = window.confirm("Do you want to include special characters?");
    if (optSpecial === true) {++countTypes};

    if (countTypes != 0) {
    creatingPassword();
    } else {
      window.alert("You must select at least one type of characters to use.")
    }
  }
}

// Generating random characters by type
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randomSpecial() {
  const specialChar = '!@#$%^&*(){}[]<>';
  return specialChar[Math.floor(Math.random() * 16)];
}

// Concatenating random characters to the final password string
function creatingPassword(){

  passwordArray = [];

  for (let i = passLength; i > 0; i -= countTypes) {

    if(optLowercase === true){

      passwordArray = passwordArray.concat(randomLower());
    }

    if(optUppercase === true){

      passwordArray = passwordArray.concat(randomUpper());
    }

    if(optNumeric === true){

      passwordArray = passwordArray.concat(randomNumber());
    }

    if(optSpecial === true){

      passwordArray = passwordArray.concat(randomSpecial());
    }
  }

  passJoin();

}

// Slicing and joining final password array
function passJoin() {

  passwordSlice = passwordArray.slice(0, passLength);
  password = passwordSlice.join("");

}