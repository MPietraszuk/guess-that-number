'use strict';
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener
('click', function() {
  let guess = Number(document.querySelector('.guess').value);
  // NO Input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
  // Player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  // Number Too High
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔺 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lose ☹️';
      document.querySelector('.score').textContent = 0;
    }
  // Number Too Low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔻 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lose ☹️';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener
('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector('.message').textContent = '🧐 Start Guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});