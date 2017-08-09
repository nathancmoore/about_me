'use strict';

alert('Welcome to the EXTREME CHEDDAR guessing game!!');
var score = 0;

var username = prompt('What is your name?');
console.log("The user\'s name is " + username + ".");

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

var random = (Math.floor(Math.random() * 100)) + 1;
console.log("The random number is " + random + ".");

for (var attempts = 0; attempts < 4; attempts++) {
  var usernumber = prompt("Choose an integer between 1-100. You have " + (4-attempts) + " guess(es) remaining!");
  console.log("The number selected by the user is " + usernumber + ".");
  if (usernumber == random) {
    alert("DINGDINGDING! Correct!")
    score++;
    break;
  } else if (usernumber > 100 || usernumber < 1 || usernumber === NaN) {
    alert("Invalid entry! Try again!")
    continue;
  } else if (random > usernumber) {
    alert("Too Low! Try again.")
  } else if (random < usernumber) {
    alert("Too High! Try again.")
  }
}

alert('Your final score is ' + score + ' out of 5!');
