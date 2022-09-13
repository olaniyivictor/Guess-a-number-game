'use strict';
const SecretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(SecretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no guess input
  if (!guess) {
    document.querySelector('.message').textContent = '👌No Number';
    // when player wins
  } else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = `👌Correct Answer1!`;
    document.querySelector(`body`).style.backgroundColor = '#60b347';
    document.querySelector(`.number`).style.width = '30rem';
    document.querySelector(`.number`).textContent = SecretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
    //when guess is wrong
    
  } else if (guess !== SecretNumber){
    if (score > 1) {
      score = score - 1;
      document.querySelector(`.score`).textContent = score;
      document.querySelector(`.message`).textContent = guess >SecretNumber ?`Too high`: `Too low` ;
    } else {
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`.message`).textContent = `You have lost the game!`;
    }
  }
});
document.querySelector(`.again`).addEventListener(`click`, function () {
  let score = 20;
  const SecretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(SecretNumber);
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
