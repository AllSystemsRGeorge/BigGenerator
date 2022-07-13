// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
   if (!max) {
      max = min
      min = 0
   }
   var rand = Math.random()
   return Math.floor(min*(1 - rand) + rand*max)
};

function randomItem(list) {
   return list[randomInt(0, list.length -1)]
};

function generatePassword() {
  
   var userInput = window.prompt("How long do you want your password to be?");
   var passwordLength = parseInt(userInput);  

   if (isNaN(passwordLength)) {
      window.alert("That's not a number!")
      return
   };

   if (passwordLength < 8 || passwordLength > 128) {
      window.alert('Password length must be between 8 and 128 characters!')
      return
   };

   var userNumbers = window.confirm('Would you like to include numbers in your password?')
   var userUpperCase = window.confirm('Would you like to include uppercase letters in your password?')
   var userLowerCase = window.confirm('Would you like to include lowercase letters in your password?')
   var userSymbols = window.confirm('Would you like to include symbols in your password?')

   var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
   var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
   var symbols = ['!','@','#','$','%','&','*','+','?']
   var numbers = ['0','1','2','3','4','5','6','7','8','9']
   var options = []

   if (userNumbers === true) {
      options.push(numbers)
   };

   if (userUpperCase === true) {
      options.push(upperCase)
   };

   if (userLowerCase === true) {
      options.push(lowerCase)
   };

   if (userSymbols === true) {
      options.push(symbols)
   };

   if (options.length === 0) {
      options.push(lowerCase)
   };

   var generatedPassword = ""

   for (var i = 0; i < passwordLength; i++) {
      var randomList = randomItem(options)
      var randomChar = randomItem(randomList)
      generatedPassword += randomChar
   };
   
   return generatedPassword
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);