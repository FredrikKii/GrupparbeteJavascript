document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("letter-input").focus();
});

var wordToGuess = "HANGMAN"; 
var guessedLetters = [];

function updateWordDisplay() {
  var display = "";
  for (var i = 0; i < wordToGuess.length; i++) {
      if (guessedLetters.includes(wordToGuess[i])) {
          display += wordToGuess[i] + " ";
      } else {
          display += "_ ";
      }
  }
  document.getElementById("word-display").textContent = display.trim();
}

function guessLetter() {
  var inputElement = document.getElementById('letter-input');
  var inputValue = inputElement.value.toUpperCase();

  if (inputValue.length === 1 && inputValue.match(/[A-ZÅÄÖ]/)) {
      if (guessedLetters.includes(inputValue)) {
          alert("Du har redan gissat på denna bokstaven!");
      } else {
          guessedLetters.push(inputValue);

          if (wordToGuess.includes(inputValue)) {
              document.getElementById("result").textContent = "Bra jobbat!";
          } else {
              document.getElementById("result").textContent = "Försök igen!";
          }

          updateWordDisplay(); 
          inputElement.value = '';
      }
  } else {
      alert("Gissa på en bokstav!");
  }
}

document.getElementById('letter-input').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
      guessLetter();
  }
});


updateWordDisplay();