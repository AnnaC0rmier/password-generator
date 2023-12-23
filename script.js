// // // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



// my code starts here 


var generateBtn = document.querySelector("#generate")


function buttonClick()
{

let uppercase = prompt("should the password include uppercase?");
let lowercase = prompt("should the password include lowercase?");
let special = prompt("should the password include special characters?");
let numeric = prompt("should the password include numeric characters?");
let numChar = prompt("how many characters should the password be?");



if (uppercase === "yes"){
  return {uppercase};

}

if (lowercase === "yes"){
 return {lowercase}
}

if (special === "yes"){
 return {special}
}

if (numeric === "yes"){
 return {numeric}
}
  console.log("number of characters", numChar);
}

generateBtn.addEventListener("click", buttonClick);





function writePassword() 

{
var chosenChar = buttonClick({ uppercase: "yes", lowercase: "yes", special: "yes", numeric: "yes"});
var upp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var spc = ["!", "@", "#", "$", "%", "^", "&", "*" ];
var numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var password = [""]


if (chosenChar.uppercase === "yes") {
  password = password.concat(upp);
}
if (chosenChar.lowercase === "yes") {
  password = password.concact(low);
}
if (chosenChar.special === "yes") {
  password = password.concat(spc);
}
if (chosenChar.numChar === "yes") {
  password = password.concat(numChar);
}
}

console.log(writePassword(password.join ("")));






// if (uppercase === "yes"){
//   return upp[i];
// }
// if (lowercase === "yes"){
//   return low[i];
// }
// if (special === "yes"){
//   return spc[i];
// }
// if (numChar === "yes"){
//   return numb[i];
// }

// for (let i = 0; i < numcChar, i++){

// }

// console.log(password)
// }