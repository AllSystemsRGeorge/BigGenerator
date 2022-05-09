function makePassword(maxLengthPass) {
    var collectionOfLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var generatedPassword = "";
    var size = collectionOfLetters.length;
    for (var i = 0; i < maxLengthPass; ++i) {
       generatedPassword = generatedPassword + collectionOfLetters.charAt(Math.floor(Math.random() * size));
    }
    return generatedPassword;
 }
 console.log(makePassword(5));

document.getElementById(button).addEventListener("click", () => {
    let characters = alpha;
    incNumbers.checked ? (characters += numbers) : "";
    incSymbols.checked ? (characters += symbols) : "";
    passwordTxt.value = generatePassword(length.value, characters);
  });