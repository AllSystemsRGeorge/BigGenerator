var button = document.getElementById('myBtn')

button.addEventListener('click', generatePassword)

var result = document.getElementById('passwordContainer')
function generatePassword() {
   var smallLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
   var capitalLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
   var symbols = ['!','@','#','$','%','&','*','+','?']
   var numbers = ['0','1','2','3','4','5','6','7','8','9']
   var array = []

   var allDigits = [...smallLetter, ...capitalLetter, ...symbols, ...numbers]
   console.log(allDigits.length);

   for (let i = 0; i < allDigits.length; ++i) {

      var pick = Math.floor(Math.random() * allDigits.length)
      array.push(allDigits[pick])  
   }
   array.length = 8
   result.innerText = array.join('')

}