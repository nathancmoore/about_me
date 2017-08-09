'use strict';

alert('Welcome to the EXTREME CHEDDAR guessing game!!');
var score = 0;

var userName = prompt('What is your name?');
console.log("The user\'s name is " + userName + ".");

var tall = prompt('Is Nathan more than 20 feet tall?').toLowerCase();
console.log(tall);
if (tall == 'yes' || tall == 'y') {
  alert('INCORRECT!');
}
if (tall == 'no' || tall == 'n') {
  alert('CORRECT!');
  score++;
}
console.log('Current score: ' + score);

var pickles = prompt('Does Nathan love pickles?').toLowerCase();
console.log(pickles);
if (pickles == 'no' || pickles == 'n') {
  alert('INCORRECT!');
}
if (pickles == 'yes' || pickles == 'y') {
  alert('CORRECT!');
  score++;
}
console.log('Current score: ' + score);

var vampire = prompt('Is Nathan secretly a vampire?').toLowerCase();
console.log(vampire);
if (vampire == 'yes' || vampire == 'y') {
  alert('INCORRECT!');
}
if (vampire == 'no' || vampire == 'n') {
  alert('CORRECT!');
  score++;
}
console.log('Current score: ' + score);

var helicopter = prompt('Can Nathan safely pilot a helicopter?').toLowerCase();
console.log(helicopter);
if (helicopter == 'yes' || helicopter == 'y') {
  alert('INCORRECT!');
}
if (helicopter == 'no' || helicopter == 'n') {
  alert('CORRECT!');
  score++;
}
console.log('Current score: ' + score);

var mommy = prompt('Does Nathan love his mommy?').toLowerCase();
console.log(mommy);
if (mommy == 'no' || mommy == 'n') {
  alert('INCORRECT!');
}
if (mommy == 'yes' || mommy == 'y') {
  alert('CORRECT!');
  score++;
}
console.log('Current score: ' + score);

var correctNum = (Math.floor(Math.random() * 100)) + 1;
console.log("The random number is " + correctNum + ".");

for (var attemptsNum = 0; attemptsNum < 4; attemptsNum++) {
  var userNum = prompt("Choose an integer between 1-100. You have " + (4-attemptsNum) + " guess(es) remaining!");
  console.log("The number selected by the user is " + userNum + ".");
  if (userNum == correctNum) {
    alert("DINGDINGDING! Correct!")
    score++;
    console.log('Current score: ' + score);
    break;
  } else if (userNum > 100 || userNum < 1 || (userNum - Math.floor(userNum)) != 0) {
    alert("Invalid entry! Try again!")
    continue;
  } else if (correctNum > userNum) {
    alert("Too Low! Try again.")
  } else if (correctNum < userNum) {
    alert("Too High! Try again.")
  }
}

var correctCar = ["honda", "toyota", "ford", "volvo"];
console.log("Correct car brands are " + correctCar + ".")

for (var attemptsCar = 0; attemptsCar < 6; attemptsCar++) {
  var userCar = prompt("Now for the ultimate challenge: try to guess one of the brands of car that I have owned? You have " + (6-attemptsCar) + " guesses remaining!");
  console.log("The user guessed " + userCar + ".")
  if (correctCar.includes(userCar)) {
    alert("DINGDINGDING! Correct! The possible correct answers were: Toyota, Volvo, Ford, and Honda.")
    score++;
    console.log('Current score: ' + score);
    break;
  } else {
    alert("Incorrect! Guess again!")
  }

}


alert('Thanks for playing, ' + userName + " !" + 'Your final score is ' + score + ' out of 7!');
