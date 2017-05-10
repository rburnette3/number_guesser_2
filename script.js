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
var rangeChange = document.getElementById('range-update-text');
var rangeInput = document.querySelectorAll('.range-input')
  // var submitRangeButton = getElementById('submit-button');
generateRandomNumber()
updateRangeFields()
//event listeners//

function updateRangeFields() {
for(var i = 0; i < rangeInput.length; i++) {
rangeInput[i].addEventListener('change', function(){
  generateRandomNumber()
})}}

submitButton.addEventListener('click', function() {
  generateRandomNumber();
})

guessButton.addEventListener('click', function() {
  evaluateGuess();
})

userInput.addEventListener('input', function() {
  enableButton();
})

clearButton.addEventListener('click', function() {
  clearInput();
})

resetButton.addEventListener('click', function() {
  reset();
})


//functions//

function generateRandomNumber(min, max) {
  var lowNumber = parseInt(lowRangeNumber.value);
  var highNumber = parseInt(highRangeNumber.value);
  randomNum = Math.floor(Math.random() * (highNumber - lowNumber)) + lowNumber;
  console.log(randomNum)
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

  // function enableRangeButton{
  //
  //   if (lowRangeNumber.value ==='' || highRangeNumber.value ==='')
  //
  // }

function evaluateGuess() {
  var userGuess = parseInt(userInput.value);
    userGuessNumber.innerText = userGuess;
  if (userGuess > highRangeNumber.value || userGuess <
    lowRangeNumber.value) {
    userGuessNumber.innerText = "Out of Range"
} else if (userGuess === NaN) {
    responseGuessText.innerText = "Not a Number!"
} else if (userGuess > randomNum){
    responseGuessText.innerText = "TOO HIGH"
} else if (userGuess < randomNum){
    responseGuessText.innerText = "TOO LOW"
} else {
    updateRange();
    userGuessNumber.innerText = "BOOM";
    responseGuessText.innerText = ''
    rangeChange.innerText = "Your Low Number Range has decreased by 10 and the High Number Range has increased by 10."
  }
}

function updateRange(){
  var changeLowNumber = parseInt(lowRangeNumber.value) - 10;
  var changeHighNumber = parseInt(highRangeNumber.value) +10;
  randomNum = Math.floor(Math.random() * (changeHighNumber - changeLowNumber)) + changeLowNumber;
  console.log(randomNum)
  changeHighNumber.toString();
  changeLowNumber.toString();
  lowRangeNumber.value = changeLowNumber;
  highRangeNumber.value = changeHighNumber;
}

// function enableButton() {
//   if (userInput.value === ''){
//     for (var i = 0; i < buttons.length; i++) {
//       buttons[i].disabled = true;
//     }
//   } else {
//     for (var i = 0; i < buttons.length; i++) {
//       buttons[i].disabled = false;
//       }
//     }
//   }

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
    rangeChange.innerText = '';
    lowRangeNumber.value = "1";
    highRangeNumber.value = "100";
  }
