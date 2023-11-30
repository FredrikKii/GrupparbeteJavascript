import { spelOrd, points, guessedLetters, gameContentSection,
    ordet, guessesMade } from "./type-in-letter.js";

const startagain = document.querySelector('.start-again');
const gameresults = document.querySelector(".game-over");
const inputDisplay = document.querySelector('.type-in-letter');
// const gameContentSection = document.querySelector('.felGissingSec');

const poäng = document.createElement('p');
const ord = document.createElement('p');
const felBokstav = document.createElement('p');
const tittel = document.createElement('h1');

export function gameover() {
    inputDisplay.style.display = 'none'
    gameContentSection.style.display = 'none'
    // ordet.style.display = 'none'
    gameresults.style.display = 'block';
    startagain.style.display = 'block'
    ord.innerText = `Det rätta ordet var: ${spelOrd}`;
    poäng.innerText = `Du fick: ${points} poäng.`;
    // felBokstav.innerText = `Din gissning: ${guessedLetters}.`;
    felBokstav.innerText = `Ditt antal gissningar: ${guessesMade}.`;
    // felBokstav.innerText = `Din gissning var: ${guessedLetters.join(', ').toUpperCase()}.`;

    tittel.innerText = 'Game over';
    gameresults.appendChild(tittel);
    gameresults.appendChild(poäng);
    gameresults.appendChild(ord);
    gameresults.appendChild(felBokstav);
}

export function gameWin() {
    gameresults.style.display = 'block';
    inputDisplay.style.display = 'none'
    gameContentSection.style.display = 'none'
    // ordet.style.display = 'none'
    
    poäng.innerText = `Du fick: ${points} poäng.`;
    // felBokstav.innerText = `Din gissning var: ${guessedLetters.join(', ').toUpperCase()}.`;
    felBokstav.innerText = `Ditt antal gissningar: ${guessesMade}.`;
    tittel.innerText = 'Du Vann!!!';
    gameresults.appendChild(tittel);
    gameresults.appendChild(poäng);
    gameresults.appendChild(felBokstav);
    
}



export{gameresults}
