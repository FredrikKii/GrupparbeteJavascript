const inputName = document.querySelector('#input-name');
const startGameBtn = document.querySelector('#start-game');
const menu = document.querySelector('.parent');
const hangman = document.querySelector('.game-content');
const error = document.querySelector('#error');
const startContent = document.querySelector('.start-content');

menu.style.display = 'none';
hangman.style.display = 'none';

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
        localStorage.setItem('users', inputValue);
        hangman.style.display = 'grid';
        menu.style.display = 'grid';
        startContent.innerHTML = "<h3>Välkommen</h3>" + inputValue
        console.log(localStorage);
    }
});
