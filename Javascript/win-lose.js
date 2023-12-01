import { spelOrd, points, guessedLetters, gameContentSection,
    ordet, guessesMade, userInfo, displayHangman, LocalSWordLength } from "./type-in-letter.js";
	import { loadUserInfoFromLocalStorage, saveUserToLocalStorage } from "./script.js";
const startagain = document.querySelector('.start-again');
const gameresults = document.querySelector(".game-over");
const inputDisplay = document.querySelector('.type-in-letter');
// const gameContentSection = document.querySelector('.felGissingSec');

const gameWinDiv = document.createElement('div');
gameWinDiv.classList.add('gameWin'); 
const poäng = document.createElement('p');
const ord = document.createElement('p');
const felBokstav = document.createElement('p');
const tittel = document.createElement('h1');

export function gameover() {

    gameWinDiv.classList.remove('gameWin');
    gameWinDiv.classList.add('gameLose');
    inputDisplay.style.display = 'none'
    gameContentSection.style.display = 'none'
    // ordet.style.display = 'none'
    gameresults.style.display = 'block';
    startagain.style.display = 'block'
    poäng.innerText = `Du fick: ${points} poäng.`;
    ord.innerText = `Det rätta ordet var: ${spelOrd}`;
    // felBokstav.innerText = `Din gissning: ${guessedLetters}.`;
    felBokstav.innerText = `Ditt antal gissningar: ${guessesMade}.`;
    // felBokstav.innerText = `Din gissning var: ${guessedLetters.join(', ').toUpperCase()}.`;
    gameWinDiv.classList.add('gameLose'); 
    gameresults.appendChild(gameWinDiv);

    tittel.innerText = 'Game over';
    gameresults.appendChild(tittel);
    gameresults.appendChild(poäng);
    gameresults.appendChild(ord);
    gameresults.appendChild(felBokstav);
    displayHangman();
	try {
        	
		
		let userObj = {
			user: JSON.parse(localStorage.getItem('users')),
			score: points,
			date: new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString(),
			// time: new Date().toLocaleTimeString(),
			loss: "Förlorade", 
			guesses: guessesMade,
			wordLegnth: LocalSWordLength
		};
		saveUserToLocalStorage(userObj)
		userInfo.push(userObj)
		console.log(localStorage, userInfo);
	} catch (error) {
		console.error("Ett fel uppstod:", error);
	}
}

export function gameWin() {
    gameresults.style.display = 'block';
    inputDisplay.style.display = 'none'
    gameContentSection.style.display = 'none'
    // ord.style.display = 'none'
    gameWinDiv.classList.add('gameWin');

    poäng.innerText = `Du fick: ${points} poäng.`;
    // felBokstav.innerText = `Din gissning var: ${guessedLetters.join(', ').toUpperCase()}.`;
    felBokstav.innerText = `Ditt antal gissningar: ${guessesMade}.`;
    gameresults.appendChild(gameWinDiv);
    tittel.innerText = 'Du Vann!!!';
    gameresults.appendChild(tittel);
    gameresults.appendChild(poäng);
    gameresults.appendChild(felBokstav);
	try {
        	
		
		let userObj = {
			user: JSON.parse(localStorage.getItem('users')),
			score: points,
			date: new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString(),
			// time: new Date().toLocaleTimeString(),
			loss: "Vinnare", 
			guesses: guessesMade,
			wordLegnth: "10"
		};
		saveUserToLocalStorage(userObj)
		userInfo.push(userObj)
		console.log(localStorage, userInfo);
	} catch (error) {
		console.error("Ett fel uppstod:", error);
	}
    
}



export{gameresults}
