//global variables//

var userInput = document.querySelector('.user-input');
var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');
var userGuessNumber = document.getElementById('user-guess-number')
var responseGuessText = document.getElementById('response-guess-text')
//event listeners//

var buttons = document.querySelectorAll('button');

userInput.addEventListener('input' , function() {
  console.log(this.value);

  // assign min and max
})

function button() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled;
  }
}



window.addEventListener('load', function(){
  generateRandomNumber();
  enableButton();
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
  generateRandomNumber();
  reset();

})


//functions//

function generateRandomNumber(min, max){
  var min = 1;
  var max = 100;
  randomNum = Math.floor(Math.random() * (100 - 1)) + 1;
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
    responseGuessText.innerText = "BOOM"
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
