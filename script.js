//Accessing the button through id
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
    let lowCaseAlpha = "abcdefghijklmnopqrstuvwxyz"
    let upprCaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialCharacters = "!@#$%^&*()_=+-:;><?/{}";
    let passwordChar = "";
    let password = "";
};
