const inputName = document.querySelector('#input-name');
const startGameBtn = document.querySelector('#start-game');
const menu = document.querySelector('.parent');
const hangman = document.querySelector('.game-content');
const error = document.querySelector('#error');
const startContent = document.querySelector('.start-content');
const startagain = document.querySelector('.start-again');
const wordDisplay = document.querySelector('.type-in-letter');

menu.style.display = 'none';
hangman.style.display = 'none';
wordDisplay.style.display = 'none';
startagain.style.display = 'none'

let input = document.querySelector("#input-name");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector("#start-game").click();
  }
});


startGameBtn.addEventListener('click', () => {
    const inputValue = inputName.value.trim();
    const onlyLettersRegex = /^[A-Za-zÖÄÅöäå]+$/;
    if (inputValue === "") {
        error.innerText = 'Skriv ditt namn tack.';
        
    }
    else if (!onlyLettersRegex.test(inputValue)) {
        error.innerText = "Ange endast bokstäver i ditt namn.";
    }
    else if (inputValue.length > 12) {
        error.innerText = "Namnet får inte vara längre än 12 bokstäver.";
    }
    else {
        try {
            const userInfo = JSON.parse(localStorage.getItem('users')) || [];
            userInfo.push({ name: inputValue });
            localStorage.setItem('users', JSON.stringify(userInfo));
            
            hangman.style.display = 'grid';
            menu.style.display = 'grid';
            startContent.innerHTML = "<h3>Välkommen</h3>" + inputValue;
            console.log(localStorage);
        } catch (error) {
            console.error("Ett fel uppstod:", error);
        }
        console.log(localStorage);
    }
});
        // inputName.addEventListener("keypress", function(event) {
        //     if (event.key === "Enter") {
        //     document.getElementById("myBtn").click();
        //     }
        //     });
