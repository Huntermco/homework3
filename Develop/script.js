// Assignment Code
var generateBtn = document.querySelector("#generate");

// GIVEN I need a new, secure password
var password = "";
var lowerArr = ["a", "b", "c"];
var upperArr = ["A", "B", "C"];
var numArr = [1, 2, 3];
var specArr = ["!", "@", "#"];
var userArr = [];

// ```

// Write password to the #password input
function writePassword() {
  // when user onclicks the btn this fx triggers
  // WHEN I click the button to generate a password

  // WHEN prompted for the length of the password
  var length = prompt("Length?"); //remember this is a string will need to parseInt() later
  // THEN I choose a length of at least 8 characters and no more than 128 characters (later)

  // THEN I choose lowercase,
  var isLower = confirm("Would you like lowercase?");
  // uppercase,
  var isUpper = confirm("Would you like uppercase?");
  // numeric,
  var isNum = confirm("Would you like numbers?");
  // and / or special characters
  var isSpecial = confirm("Would you like special characters");

  //update our user array based on the yes and no's

  if (isLower == true) {
    for (var i = 0; i < lowerArr.length; i++) {
      userArr.push(lowerArr[i]);
    }
    console.log(userArr);
  }

  if (isUpper == true) {
    for (var i = 0; i < upperArr.length; i++) {
      userArr.push(upperArr[i]);
    }
    console.log(userArr);
  }
  if (isNum == true) {
    for (var i = 0; i < numArr.length; i++) {
      userArr.push(numArr[i]);
    }
    console.log(userArr);
  }
  if (isSpecial == true) {
    for (var i = 0; i < specArr.length; i++) {
      userArr.push(specArr[i]);
    }
    console.log(userArr);
  }
  // THEN my input should be validated and at least one character type should be selected (validation later)
  // WHEN all prompts are answered

  // THEN a password is generated that matches the selected criteria
  //how to create our pw?
  //1. we needed to know the min and max to get the specific index vals
  //min=0
  //max = userArr.length-1
  //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  //userArr=['a','b','c','A','B','C'];
  // userArr[0]
  //userArr[5]
  // userArr.length=6;
  //Math.floor(Math.random() * (max - min + 1) + min);
  //console.log(Math.floor(Math.random() * (userArr.length - 1 - 0 + 1) + 0));
  //2. verify we were getting random values from our userArr
  //console.log(userArr[Math.floor(Math.random() * (userArr.length - 1 - 0 + 1) + 0)]);

  //length
  password = "";
  //3. randomly generate password values based on the user's length and add it all to the password variable
  for (var x = 0; x < parseInt(length); x++) {
    //console.log(userArr[Math.floor(Math.random() * (userArr.length - 1 - 0 + 1) + 0)]);
    password +=
      userArr[Math.floor(Math.random() * (userArr.length - 1 - 0 + 1) + 0)];
  }
  console.log(password);

  //userArr which contains all the datatypes that the user wants
  //length of pw
  //you will randomly select the specified chars based on length and userArr

  //var password = generatePassword();
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  var passwordText = document.querySelector("#password");
  //4. append password to the page
  passwordText.value = password;
}

function generatePassword() {
  //later once everything works put the stuff to generate the pw here
  return "generatepwfx";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
