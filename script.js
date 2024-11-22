'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🍕Currect Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value =23;
console.log(document.querySelector('.guess').value);

*/


// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// let secore = 20;

// document.querySelector('.number').textContent = secretNumber;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value); 

//    console.log(guess, typeof guess);
   
//    if (!guess) {
//     document.querySelector('.message').textContent = '⛔ No number!';
//    } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '🍕 Correct Number!';
//     if (secore > 1){
//         document.querySelector('.message').textContent = '📈 Too high!';
//     secore--;
//     document.querySelector('.secore').textContent = secore;
//     } else {
//         document.querySelector('.message').textContent ='💥 You lost the game!';
//     }
//    } else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = '📉 Too Low!';

//     secore--;
//     document.querySelector('.secore').textContent = secore;
//    }
// });


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
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🍕Currect Number';
    displayMessage('🍕Currect Number');

    document.querySelector('.number').textContent = secretNumber;


      // document.querySelector('body').style.backgroundColor ='#60b375';
      document.querySelector('body').style.backgroundColor ='rgb(5, 240, 44)';

      document.querySelector('.number').style.width = '12rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      //  when guess is worng
    } else if(guess !== secretNumber) {

      if (score > 1) {
        // document.querySelector('.message').textContent =guess >  secretNumber ? '📈 Too high!' : '📉 Too Low!';
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
        score--;
   
        document.querySelector('.score').textContent = score;
    } else {
        // document.querySelector('.message').textContent = '🎆 You lost the game!';
        displayMessage('🎆 You lost the game!')
        document.querySelector('.score').textContent = 0;
       }
      }

  //   //When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too high!';
  //       score--;
   
  //       document.querySelector('.score').textContent = score;
  //   } else {
  //       document.querySelector('.message').textContent = '🎆 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //      }

  //      // When guess is too low
  //   }  else if (guess < secretNumber) {

  //       if (score > 1) {
  //           document.querySelector('.message').textContent = '📉 Too Low!';
  //           score--;
       
  //           document.querySelector('.score').textContent = score;
  //       } else {
  //           document.querySelector('.message').textContent = '🎆 You lost the game!';
  //           document.querySelector('.score').textContent = 0;
            
  //          }
  //      }
      });
    document.querySelector('.again').addEventListener('click', function(){
      score = 20;
      let secretNumber = Math.trunc(Math.random() * 20) + 1;

      // document.querySelector('.message').textContent = 'Start guessing...';
      displayMessage('Start guessing...');
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';


      document.querySelector('body').style.backgroundColor ='#222';
      document.querySelector('.number').style.width = '6rem';
    });





    