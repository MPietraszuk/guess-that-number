'use strict';
let score = 20;
let highscore = 0;
// DRY with functions
const getSecretNumber = function(max, min) {
  return Math.trunc(Math.random()*max)+min;
}
const yourScore = function(score) {
  document.querySelector('.score').textContent = score;
}
const styleBorder = function(width) {
  document.querySelector('.number').style.width = width;
}
const styleBody = function(css) {
  document.querySelector('body').style.backgroundColor = css;
}
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}
const placeSecretNumber = function (squareBoxQuestionMark) {
  document.querySelector('.number').textContent = squareBoxQuestionMark;
}
let placeHighScore = function (thescore) {
  document.querySelector('.highscore').textContent = thescore;
}
const stylesYouLose = function (css1, css2, css3) {
  document.querySelector('body').style.backgroundColor = css1;
  document.querySelector('.number').style.backgroundColor = css2;
  document.querySelector('header').style.borderBottomColor = css3;
}
let secretNumber = getSecretNumber(20, 1)
document.querySelector('.check').addEventListener
// Check the Number
('click', function() {
  let guess = Number(document.querySelector('.guess').value);
  // NO Input
  if (!guess) {
    displayMessage('⛔️ No Number!');
  // Player Wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    placeSecretNumber(secretNumber);
    styleBody('#60b347');
    styleBorder('30rem');

    if (score > highscore) {
      highscore = score;
      placeHighScore(highscore);
    }
  // Guess is wrong.
  } else if (guess != highscore) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔺 Too High!' : '🔻 Too Low!');
    score--;
    yourScore(score);
    } else {
      displayMessage('💥 You Lose ☹️');
      yourScore(0);
      stylesYouLose('#8C3039', '#D93F4E', '#D93F4E');
    }
  } 
});
// Try Again
document.querySelector('.again').addEventListener
('click', function() {
  score = 20;
  secretNumber = getSecretNumber(20, 1)
  displayMessage('🧐 Start Guessing...');
  stylesYouLose('#222', '#fff', '#fff');
  styleBorder('15rem');
  yourScore(score);
  placeSecretNumber('?');
  document.querySelector('.guess').value = '';
});