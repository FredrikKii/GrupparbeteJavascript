
const inputName = document.querySelector('#input-name');
const startGameBtn = document.querySelector('#start-game');
const menu = document.querySelector('.parent');
const hangman = document.querySelector('.game-content');
const error = document.querySelector('#error');
const startContent = document.querySelector('.start-content');
const startagain = document.querySelector('.start-again');
const difficulty = document.querySelector('.difficultySec');
const wordDisplay = document.querySelector('.type-in-letter');
// const lastresults = document.querySelector('#game-win');
// lastresults.classList.remove('game-win');
const gameWinElement = document.querySelector('#game-win');
gameWinElement.classList.remove('game-win');

menu.style.display = 'none';
hangman.style.display = 'none';
wordDisplay.style.display = 'none';
startagain.style.display = 'none'
difficulty.style.display = 'none'

let input = document.querySelector("#input-name");
input.focus()

document.addEventListener("click", function () {
    input.focus();
});
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector("#start-game").click();
    }
});
let storedUserData
startGameBtn.addEventListener('click', () => {
	let userName = inputName.value.trim();
    let onlyLettersRegex = /^[A-Za-zÖÄÅöäå]+$/;

    if (userName === "") {
        error.innerText = 'Skriv ditt namn tack.';
    }
    else if (!onlyLettersRegex.test(userName)) {
        error.innerText = "Ange endast bokstäver i ditt namn.";
    }
    else if (userName.length > 12) {
        error.innerText = "Namnet får inte vara längre än 12 bokstäver.";
    }
    else {
        try {
            localStorage.setItem('users', JSON.stringify(userName));
			console.log(userName)
			
            hangman.style.display = 'grid';
            menu.style.display = 'grid';
            startContent.innerHTML = "<h3>Välkommen</h3>" + userName;
            console.log(localStorage);
        } catch (error) {
            console.error("Ett fel uppstod:", error);
        }
        // console.log(localStorage, userInfo);
    }
});
export{gameWinElement, storedUserData, difficulty}
