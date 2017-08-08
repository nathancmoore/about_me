'use strict'

alert("Welcome to the EXTREME CHEDDAR guessing game!!");
var score = 0;
var tall = prompt("Is Nathan more than 20 feet tall?").toLowerCase();
console.log(tall);
if (tall == "yes" ) {
  alert("INCORRECT!")
}
if (tall == "no" ) {
  alert("CORRECT!")
  score++
}
console.log("Current score: " + score)

var pickles = prompt("Does Nathan love pickles?").toLowerCase();
console.log(pickles);
if (pickles == "no" ) {
  alert("INCORRECT!")
}
if (pickles == "yes" ) {
  alert("CORRECT!")
  score++
}
console.log("Current score: " + score)

var vampire = prompt("Is Nathan secretly a vampire?").toLowerCase();
console.log(vampire);
if (vampire == "yes" ) {
  alert("INCORRECT!")
}
if (vampire == "no" ) {
  alert("CORRECT!")
  score++
}
console.log("Current score: " + score)

var helicopter = prompt("Can Nathan safely pilot a helicopter?").toLowerCase();
console.log(helicopter);
if (helicopter == "yes" ) {
  alert("INCORRECT!")
}
if (helicopter == "no" ) {
  alert("CORRECT!")
  score++
}
console.log("Current score: " + score)

var mommy = prompt("Does Nathan love his mommy?").toLowerCase();
console.log(mommy);
if (mommy == "no" ) {
  alert("INCORRECT!")
}
if (mommy == "yes" ) {
  alert("CORRECT!")
  score++
}
console.log("Current score: " + score)

alert("Your final score is " + score + " out of 5!");
