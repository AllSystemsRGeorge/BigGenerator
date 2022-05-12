var generatedPassword;
var alpha;

function makePassword(maxLengthPass) {
    var collectionOfLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    generatedPassword = "";
    var size = collectionOfLetters.length;
    for (var i = 0; i < maxLengthPass; ++i) {
       generatedPassword = generatedPassword + collectionOfLetters.charAt(Math.floor(Math.random() * size));
    }
    return generatedPassword;
 }
 console.log(makePassword(5));

// document.getElementsById("myBtn").addEventListener("click", () => {
//     let characters = alpha;
//     incNumbers.checked ? (characters += numbers) : "";
//     incSymbols.checked ? (characters += symbols) : "";
//     passwordTxt.value = generatePassword(length.value, characters);
//   }); 


document.getElementById("myBtn").addEventListener("click", function() {
   let characters = alpha;
   incNumbers.checked ? (characters += numbers) : "";
   incSymbols.checked ? (characters += symbols) : "";
   passwordTxt.value = generatePassword(length.value, characters);
 });

 document.getElementById("Password").innerHTML(generatedPassword);