const numberToGuess =  Math.floor(Math.random() * 100) + 1;
console.log(numberToGuess);
let guessesContainer = document.getElementById('guesses');
const button = document.getElementById('button');
const userGuess = document.getElementById('guessField');

const lastResult = document.getElementById('lastResult');
const lowerOrHigher = document.getElementById('lowerorhigher');
const newGame = document.getElementById('newGame');
const guessesArray = [];
let attempts = 1;

function guessNumber() {
  let inputValue = Number(userGuess.value);
  guessesArray.push(" " + inputValue);
  guessesContainer.textContent = "Your previous guesses: "; 
  guessesContainer.textContent += guessesArray + ' ';

    if (numberToGuess === inputValue) { 
      lastResult.style.background = "green";
      lastResult.style.color = "white";
      lastResult.style.padding = "20px";
      lastResult.innerHTML = 'Congratulations! You got it right!';
      lowerOrHigher.textContent = '';
    } else if (attempts === 1) {
      lastResult.textContent = 'GAME OVER';
      lowerOrHigher.textContent = '';
      setGameOver();
    }
    else {
      lastResult.style.background = "red";
      lastResult.style.color = "white";
      lastResult.style.padding = "20px";
      lastResult.innerHTML = 'You are close, but no close enough! Try again!';
      if (numberToGuess > inputValue) {
        lastResult.innerHTML = 'Last guess was too low!';
      }
      else if (numberToGuess < inputValue) {
        lastResult.innerHTML = 'Last guess was too high!';
        }
      }
    userGuess.value = "";
    userGuess.focus;
    attempts++;
  }

  function setGameOver() {
    button.disabled = true;
    userGuess.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", function(){
      newG();
    }) 
  }

  function newG() {
    button.disabled = false;
    userGuess.disabled = false;
    document.body.removeChild(resetButton);
    lastResult.textContent = '';
    guessesContainer.textContent = ""; 
    guessesArray.splice(0, guessesArray.length);
  }

  button.addEventListener("click", function() {
    guessNumber();

 });