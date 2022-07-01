var userChoice=$('.btn')
var startTest =$('#start-test');
var wrong = $('.wrong-answer');
var right = $('.right-answer');
var score = 00;
var secondsLeft = 60;
var timerEl = $('.timer')

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft --;
      timerEl.textContent = secondsLeft + 'remaining!'
  
      if( secondsLeft=== 0) {
        window.alert ('Test over!');
        window.prompt ('final score' + score);
        window.prompt('Enter initials');
      }
  
    }, 1000);

  }


userChoice.on('click', function (){
    // if (wrong) {
    //     // code to reduce timer and point
    //     score --;
        // secondsRemain --;
    // } 
    if(right) {
        score ++;
        // code to add poits to score
    } else{
        score --;
    }
    
}) 
console.log(score);

// collect/display user score
// alert user of final score and ask for initials
// ol of users 
// keep user score in local storage


