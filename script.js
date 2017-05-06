//global variables//

var userInput = document.querySelector('.user-input');
var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');
var submitButton = document.getElementById('submit-button');
var userGuessNumber = document.getElementById('user-guess-number');
var responseGuessText = document.getElementById('response-guess-text');
var lowRangeNumber = document.getElementById('low-range-number');
var highRangeNumber = document.getElementById('high-range-number');
var buttons = document.querySelectorAll('button');


// userInput.addEventListener('input' , function() {
//   console.log(this.value);
// })
//
// function button() {
//   for (var i = 0; i < buttons.length; i++) {
//     buttons[i].disabled;
//   }
// }

submitButton.addEventListener('click', function(){
  generateRandomNumber();
})

guessButton.addEventListener('click', function(){
  evaluateGuess();
})

userInput.addEventListener('input', function(){
  enableButton();
})

clearButton.addEventListener('click', function(){
  clearInput();
})

resetButton.addEventListener('click', function(){
  reset();
})

//functions//

function generateRandomNumber(min, max){
  var lowNumber = parseInt(lowRangeNumber.value);
  var highNumber = parseInt(highRangeNumber.value);
  randomNum = Math.floor(Math.random() * (highNumber - lowNumber)) + lowNumber;
  console.log(randomNum)
}

function evaluateGuess() {
  var userGuess = parseInt(userInput.value);
  console.log(userGuess)
  userGuessNumber.innerText = userGuess;
  if (userGuess > 100) {
    userGuessNumber.innerText = "ERROR"
}  else if (userGuess > randomNum){
    console.log('your guess is too high');
    responseGuessText.innerText = "TOO HIGH"
} else if (userGuess < randomNum){
    console.log('your guess is too low');
    responseGuessText.innerText = "TOO LOW"
  }else {
    responseGuessText.innerText = "CONGRATULATIONS!! Your 
    console.log('boom')
  }
}

function enableButton() {
  if (userInput.value === ''){
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  } else {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
      }
    }
  }

  function clearInput() {
    userInput.value = '';
    userGuessNumber.innerText = '?';
  }

  function reset() {
    userInput.value = '';
    userGuessNumber.innerText = '?';
    guessButton.disabled = true;
    clearButton.disabled = true;
    resetButton.disabled = true;
  }
