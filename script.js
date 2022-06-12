// Assignment Code
var generateBtn = document.querySelector("#generate");
var requirements = {
  optNumLength: "",
  optLowercase: "",
  optUppercase: "",
  optNumeric: "",
  optSpecial: ""
};
const randomFunctions = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  special: randomSpecial
};
 
// Write password to the #password input
function writePassword() {

    requirements.optNumLength = window.prompt("How many characters would you like your password to have? You can choose any number between 8 and 128");
    console.log(requirements.optNumLength);

    requirements.optLowerCase = window.confirm("Do you want to include lowercase characters?");
    console.log(requirements.optLowerCase);

    requirements.optUppercase = window.confirm("Do you want to include uppercase characters?");
    console.log(requirements.optUppercase);

    requirements.optNumeric = window.confirm("Do you want to include numeric characters?");
    console.log(requirements.optNumeric);

    requirements.optSpecial = window.confirm("Do you want to include special characters?");
    console.log(requirements.optSpecial);


  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
