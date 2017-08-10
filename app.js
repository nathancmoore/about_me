'use strict';

alert('Welcome to the EXTREME CHEDDAR guessing game!!');
var score = 0;

var userName = prompt('What is your name?');
console.log('The user\'s name is ' + userName + '.');

var questions = ['Is Nathan more than 20 feet tall?', 'Does Nathan love pickles?', 'Is Nathan secretly a vampire?', 'Can Nathan safely pilot a helicopter?', 'Does Nathan love his mommy?'];

var anwsers1 = ['no', 'n', 'yes', 'y', 'no', 'n','no', 'n', 'yes', 'y'];

var anwsers3 = ['honda', 'toyota', 'ford', 'volvo'];

var responses1 = ['INCORRECT!', 'CORRECT!'];

var responses2 = ['DINGDINGDING! Correct!', 'Invalid entry! Try again!', 'Too Low! Try again.','Too High! Try again.'];

var userInput1;

var userInput2;

var userInput3;

var correctNum = (Math.floor(Math.random() * 100)) + 1;

var correctCar = ['honda', 'toyota', 'ford', 'volvo'];

function quizOne (userInput1) {
  for (var qcount = 0; qcount < 5; qcount ++) {
    var acount = qcount * 2;
    userInput1 = prompt(questions[qcount]);
    console.log(userInput1);
    console.log(userInput1.toLowerCase());
    console.log('acount is ' + acount);
    console.log('qcount is ' + qcount);
    if (userInput1.toLowerCase() === anwsers1[acount] || userInput1.toLowerCase() === anwsers1[acount + 1]) {
      alert(responses1[1]);
      score++;
      console.log('Current score: ' + score);
    }
    else {
      alert(responses1[0]);
    }
  }
}

function quizTwo (userInput2) {
  console.log('The random number is ' + correctNum + '.');
  for (var attemptsNum = 0; attemptsNum < 4; attemptsNum++) {
    var userInput2 = prompt('Choose an integer between 1-100. You have ' + (4 - attemptsNum) + ' guess(es) remaining!');
    console.log('The number selected by the user is ' + userInput2 + '.');
    if (userInput2 == correctNum) {
      alert(responses2[0]);
      score++;
      console.log('Current score: ' + score);
      break;
    } else if (userInput2 > 100 || userInput2 < 1 || (userInput2 - Math.floor(userInput2)) != 0) {
      alert(responses2[1]);
      continue;
    } else if (correctNum > userInput2) {
      alert(responses2[2]);
    } else if (correctNum < userInput2) {
      alert(responses2[3]);
    }
  }
}

function quizThree (userInput3) {
  console.log('Correct car brands are ' + anwsers3 + '.');

  for (var attemptsCar = 0; attemptsCar < 6; attemptsCar++) {
    var userInput3 = prompt('Now for the ultimate challenge: try to guess one of the brands of car that I have owned? You have ' + (6 - attemptsCar) + ' guesses remaining!');
    console.log('The user guessed ' + userInput3 + '.');
    if (anwsers3.includes(userInput3.toLowerCase())) {
      alert('DINGDINGDING! Correct! The possible correct answers were: Toyota, Volvo, Ford, and Honda.');
      score++;
      console.log('Current score: ' + score);
      break;
    } else {
      alert('Incorrect! Guess again!');
    }
  }
}

quizOne();
quizTwo();
quizThree();
alert('Thanks for playing, ' + userName + '!' + ' Your final score is ' + score + ' out of 7!');
