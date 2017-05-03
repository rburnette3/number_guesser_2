//global variables//

var userInput = document.querySelector('.user-input');
var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');
var userGuessNumber = document.getElementById('user-guess-number')
var responseGuessText = document.getElementById('response-guess-text')

//event listeners//

window.addEventListener('load', function(){
  generateRandomNumber();
})

guessButton.addEventListener('click', function(){
  evaluateGuess()
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
    userGuessNumber.innerText = "I Pity the Fool Who Can't Read"
}  else if (userGuess > randomNum){
    console.log('your guess is too high');
    responseGuessText.innerText = "TOO HIGH FOOL"
} else if (userGuess < randomNum){
    console.log('your guess is too low');
    responseGuessText.innerText = "TOO LOW SUCKA"
  }else {
    responseGuessText.innerText = "BOOM"
    console.log('boom')
}
}
