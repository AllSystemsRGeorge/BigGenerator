// var generatedPassword;
// var alpha;

// function makePassword(maxLengthPass) {
//     var collectionOfLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     generatedPassword = "";
//     var size = collectionOfLetters.length;
//     for (var i = 0; i < maxLengthPass; ++i) {
//        generatedPassword = generatedPassword + collectionOfLetters.charAt(Math.floor(Math.random() * size));
//     }
//     return generatedPassword;
//  }
//  console.log(makePassword(5));

// document.getElementsById("myBtn").addEventListener("click", () => {
//     let characters = alpha;
//     incNumbers.checked ? (characters += numbers) : "";
//     incSymbols.checked ? (characters += symbols) : "";
//     passwordTxt.value = generatePassword(length.value, characters);
//   }); 


// document.getElementById("myBtn").addEventListener("click", function() {
//    // let characters = alpha;
//    // incNumbers.checked ? (characters += numbers) : "";
//    // incSymbols.checked ? (characters += symbols) : "";
//    // passwordTxt.value = generatePassword(length.value, characters);
//    var collectionOfLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     generatedPassword = "";
//     var size = collectionOfLetters.length;
//     for (var i = 0; i < maxLengthPass; ++i) {
//        generatedPassword = generatedPassword + collectionOfLetters.charAt(Math.floor(Math.random() * size));
//     }
//     return generatedPassword;
//  }
//  );

// //  document.getElementById("Password").outerHTML(generatedPassword);

// function print

// let smallLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// let capitalLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
// let signs = ['!','@','#','$','%','&','*','+','?']
// let figure = ['0','1','2','3','4','5','6','7','8','9']


let button = document.getElementById('myBtn')
button.addEventListener('click', generatePassword)
let result = document.getElementById('passwordContainer')
function generatePassword() {
   let smallLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
   let capitalLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
   let symbols = ['!','@','#','$','%','&','*','+','?']
   let numbers = ['0','1','2','3','4','5','6','7','8','9']
   let array = []

   let allDigits = [...smallLetter, ...capitalLetter, ...symbols, ...numbers]
   console.log(allDigits.length);

   for (let i = 0; i < allDigits.length; ++i) {

      let pick = Math.floor(Math.random() * allDigits.length)
      array.push(allDigits[pick])  
   }
   array.length = 8
   result.innerText = array.join

}