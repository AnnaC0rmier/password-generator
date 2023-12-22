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
{let uppercase = prompt("should i include uppercase");
let lowercase = prompt("should i include lowercase");
let special = prompt("should i include special characters");
let numeric = prompt("should i include numeric characters");
let numChar = prompt("how many characters ");

if (uppercase === "yes"){
  console.log("Including these characters");
} else{
  console.log("character type excluded")
}

if (lowercase === "yes"){
  console.log("Including these characters");
} else{
  console.log("character type excluded")
}

if (special === "yes"){
  console.log("Including these characters");
} else{
  console.log("character type excluded")
}

if (numeric === "yes"){
  console.log("Including these characters");
} else{
  console.log("character type excluded")
}

  console.log("number of characters", numChar);

}

generateBtn.addEventListener("click", buttonClick);



var password = generatePassword(){

upp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
spc = ["!", "@", "#", "$," "%", "^", "&", "*" ];
numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];



}