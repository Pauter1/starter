/*'use strict';
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number! B)';
document.querySelector('.number').textContent = 14;
document.querySelector('.guess').value = 19;
console.log(document.querySelector('.guess').value);
*/ ////
'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const losingGame = function () {
    if (score <= 0) {
      document.querySelector('.message').textContent =
        'Unfortunately you lose. Shame';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#DB2722';
    }
  };
  const scoreChecker = function () {
    if (score > 0) {
      score--;
    }
    document.querySelector('.score').textContent = score;
  };
  //if number is not actually a number
  if (!guess) {
    document.querySelector('.message').textContent =
      'Nawet nie wybrałeś liczby, plz';
    scoreChecker();
    losingGame();
  }

  //if number is bigger
  else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Co tak dużo?!';
    scoreChecker();
    losingGame();
  }

  //if number is smaller
  else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Niech urośnie :))';
    scoreChecker();
    losingGame();

    //if number is right
  } else {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#65F049';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = 'GG WP! B)';
    document.querySelector('.check').disabled = true;
    if (score > document.querySelector('.highscore').textContent) {
      document.querySelector('.highscore').textContent = score;
    }
  }
});

//again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'No wybierz coś...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.check').disabled = false;
});
