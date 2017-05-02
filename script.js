//global variables//

var userInput = document.querySelector('.user-input');

var guessButton = document.getElementById('guess-button');

var clearButton = document.getElementById('clear-button');

var resetButton = document.getElementById('reset-button');

// var randomNum = Math.floor(Math.random() * (max - min)) + min;

//event listeners//

window.addEventListener('load', function(){
  generateRandomNumber();
})

guessButton.addEventListener('click', function(){
  evaluateGuess()
})


//function//

function generateRandomNumber(min, max){
  var min = 1;
  var max = 100;
  var randomNum = Math.floor(Math.random() * (max - min)) + min;
  console.log(randomNum)
}


// function evaluateGuess()
//   if (parseInt) {
//
//   }
