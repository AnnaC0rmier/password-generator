var generateBtn = document.querySelector("#generate");

function buttonClick()
{
let choices =
{
uppercase: prompt("should the password include uppercase?") === "yes",
lowercase: prompt("should the password include lowercase?") === "yes",
special: prompt("should the password include special characters?") === "yes",
numeric: prompt("should the password include numeric characters?") === "yes",
numChar: parseInt( prompt("how many characters should the password be?")),
};

console.log("number of characters", choices.numChar);
return choices;

}

function writePassword() 

{
var passwordText = document.querySelector("#password")
var chosenChar = buttonClick();
var upp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var spc = ["!", "@", "#", "$", "%", "^", "&", "*" ];
var numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var password = [""];

if (chosenChar.uppercase) {
  password = password.concat(upp);
}
if (chosenChar.lowercase) {
  password = password.concat(low);
}
if (chosenChar.special) {
  password = password.concat(spc);
}
if (chosenChar.numeric) {
  password = password.concat(numb);
}
var generatedPassword = "";
  for (let i = 0; i < chosenChar.numChar; i++) {
    var randomIndex = Math.floor(Math.random() * password.length);
    generatedPassword += password[randomIndex];
  }
  passwordText.value = generatedPassword;
}
generateBtn.addEventListener("click", writePassword);