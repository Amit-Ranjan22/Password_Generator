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

    let passwordLength = prompt("password length must be between 8 & 128 characters! How long would you like your password to be?");

    let lowerChar = confirm("Do you want lower-case letter to be included?");
    if (lowerChar){
        passwordChar += lowCaseAlpha;
    };

    let upperChar = confirm("Do you want upper-case letter to be included?");
    if (upperChar){
        passwordChar += upprCaseAlpha;
    };

    let numericChar = confirm("Do you want a number to be included?");
    if (numericChar){
        passwordChar += numbers;
    };

    let specialChar = confirm("Do you want special character to be included?");
    if (specialChar){
        passwordChar += specialCharacters;
    };

    if (passwordLength >= 8 && passwordLength <= 128) {
        for (let i = 0; i < passwordLength; i++) {
            password += passwordChar.charAt(
                Math.floor(Math.random() * passwordChar.length)
            );
        };
    }else {
        alert("passowrd must be between 8 & 128 characters!");
        return;
    };
    prompt("Click ok to view the generated password!");
    return password;
};



    
