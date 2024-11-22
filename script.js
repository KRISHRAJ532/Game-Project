
'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {

  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // When there is no input
    
  if (!guess) {
   
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
   
    displayMessage('🍕Currect Number');

    document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor ='rgb(5, 240, 44)';

      document.querySelector('.number').style.width = '12rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      //  when guess is worng
    } else if(guess !== secretNumber) {

      if (score > 1) {
       
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
        score--;
   
        document.querySelector('.score').textContent = score;
    } else {
       
        displayMessage('🎆 You lost the game!')
        document.querySelector('.score').textContent = 0;
       }
      }

 
     

      });
    document.querySelector('.again').addEventListener('click', function(){
      score = 20;
      let secretNumber = Math.trunc(Math.random() * 20) + 1;

    
      displayMessage('Start guessing...');
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';


      document.querySelector('body').style.backgroundColor ='#222';
      document.querySelector('.number').style.width = '6rem';
    });





    
