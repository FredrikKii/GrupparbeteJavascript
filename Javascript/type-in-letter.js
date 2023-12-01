
import { words } from "./ordlista.js"
import { difficulty } from "./start-game.js"
import { wordDisplay } from "./change-view.js"

import { gameresults, gameWin, gameover } from "./win-lose.js";
// import { fellista } from "./wrong-letter.js";
import { loadUserInfoFromLocalStorage, saveUserToLocalStorage } from "./script.js";
import { storedUserData } from "./start-game.js";
let userInfo = loadUserInfoFromLocalStorage()


let ordLista = words;
let inputValue;
let ordet = document.querySelector(".ordet");
let wordlength = 10
let spelOrd = slumpaOrd();

function slumpaOrd() {
	let tempOrd = wordlength;
	let ord;
	do {
		ord = ordLista[Math.floor(Math.random() * ordLista.length)];
	} while (ord.length !== tempOrd);

	ord = ord.toUpperCase();
	
	return ord
}
 


let listaBokstav = [];

let hangman = document.querySelector('.game-content');
let marken = document.querySelector('#ground');
let scaffold = document.querySelector('#scaffold');
let benen = document.querySelector('#legs');
let kropen = document.querySelector('#body');
let armen = document.querySelector('#arms');
let huvud = document.querySelector('#head');
let huvudorange = document.querySelector('.huvudorange');
let inputDisplay = document.querySelector('.type-in-letter')
let startagain = document.querySelector('.start-again');
let spelaOmBtn = document.querySelector(".spela")
let easy = document.querySelector(".easy")
let hard = document.querySelector(".hard")


// const stängAv = document.querySelector('.exit');

let showPoints = document.createElement("h2")
let parent = document.querySelector(".type-in-letter")
let hintIcon = document.createElement("p")
hintIcon.innerText = "HINT ( -20p)"
hintIcon.classList.add("hint")
parent.appendChild(hintIcon)
let hintBokstav
let visadeLetters = []
let LocalSWordLength 
easy.addEventListener("click", () => {
    wordDisplay.style.display = 'block'
	difficulty.style.display = 'none'
	wordlength = 10
	console.log("clickat");
	console.log(spelOrd);
	LocalSWordLength = 10
	spelOrd.split("").forEach((correctLetter) => {    
		let bokstav = document.createElement("p");
		bokstav.innerText = "_";
		ordet.appendChild(bokstav);})
		spelOrd = slumpaOrd()

})
hard.addEventListener("click", () => {
    wordDisplay.style.display = 'block'  
	difficulty.style.display = 'none'
	wordlength = 5
	console.log("clickat");
	LocalSWordLength = 5
	spelOrd = slumpaOrd()
	console.log(spelOrd);
	spelOrd.split("").forEach((correctLetter) => {    
		let bokstav = document.createElement("p");
		bokstav.innerText = "_";
		ordet.appendChild(bokstav);})
		spelOrd = slumpaOrd()
		console.log(LocalSWordLength);
})

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("letter-input").focus();
// });
console.log(`Det rätta ordet är ${spelOrd}`);

let inputElement = document.querySelector('#letter-input');
inputElement.focus()

// Lägg till klickhändelse på dokumentet för att fokusera på input när någon klickar var som helst på sidan
document.addEventListener("click", function () {
    inputElement.focus()
});


inputElement.addEventListener('input', function () {
    inputValue = inputElement.value.toUpperCase();
    inputElement.value = inputValue;
});
let allaLetters = []
let correct
let points = 0
let hint = -20
let bokstav
let gameContentSection = document.querySelector(".felGissingSec")
spelOrd.split("").forEach((bokstavlista) => {
    allaLetters.push(bokstavlista)

})
let guessesMade = 0;
let guessedLetters = []
function checkWin() {
    for (let i = 0; i < spelOrd.length; i++) {
        if (!listaBokstav.includes(spelOrd[i])) {
            return false; // Om någon bokstav saknas har spelaren inte vunnit än
        }
    }
    return true; // Alla bokstäver finns, spelaren har vunnit
}

// fixa så man inte "kan" klicka i samma bokstav(alltså att den inte visas)
inputElement.addEventListener('keyup', function (e) {
    let letterPattern = /^[A-Za-zÖÄÅöäå]+$/;
    if (letterPattern.test(e.key) && !guessedLetters.includes(e.key)) {
        guessesMade++
        console.log(`antal gissning ${guessesMade}`);

        guessedLetters.push(e.key)
        ordet.innerText = "";
        // Lägg till rätt gissade bokstäver i listan
        if (spelOrd.includes(inputValue)) {
            listaBokstav.push(inputValue);
            correct = true
        }
        else {
            correct = false
            let felBokstav = document.createElement("p")
            felBokstav.innerText = inputValue
            gameContentSection.append(felBokstav)

        }
        spelOrd.split("").forEach((correctLetter) => {

            let bokstav = document.createElement("p");

            if (listaBokstav.includes(correctLetter)) {
                bokstav.innerText = correctLetter;

            }
            else {
                bokstav.innerText = "_";
            }
            ordet.appendChild(bokstav);
        });

        if (correct) {
            points += 29
            correct = 0
        }
        else {
            points -= 12
            correct = 0
            handleFelGissning();
        }
        console.log("din poäng är: ", points, correct);
        // Kontrollera om spelaren har vunnit efter varje korrekt gissning
        if (checkWin()) {
            console.log('Du har vunnit!');
            gameWin();
        }
    }

    // Återställ input

    inputElement.value = "";
    showPoints.innerText = `${points} p`
    console.log(`Det rätta ordet är ${spelOrd}`);

});

let felGissning = 1;
spelaOmBtn.addEventListener("click", function () {
    spelaOm();

});
export function displayHangman() {
    marken.style.display = 'none';
    scaffold.style.display = 'none';
    benen.style.display = 'none';
    kropen.style.display = 'none';
    armen.style.display = 'none';
    huvud.style.display = 'none';
    huvudorange.style.display = 'none';
    hangman.style.display = 'grid';
}

function handleFelGissning() {
    displayHangman();

    if (felGissning === 1) {
        console.log('Visa marken');
        marken.style.display = 'block';
        felGissning++;
    } else if (felGissning === 2) {
        console.log('Visa scaffold');
        marken.style.display = 'block';
        scaffold.style.display = 'block';
        felGissning++;
    } else if (felGissning === 3) {
        console.log('Visa benen');
        marken.style.display = 'block';
        scaffold.style.display = 'block';
        benen.style.display = 'block';
        felGissning++;
    } else if (felGissning === 4) {
        console.log('Visa kroppen');
        marken.style.display = 'block';
        scaffold.style.display = 'block';
        benen.style.display = 'block';
        kropen.style.display = 'block';
        felGissning++;
    } else if (felGissning === 5) {
        console.log('Visa armen');
        marken.style.display = 'block';
        scaffold.style.display = 'block';
        benen.style.display = 'block';
        kropen.style.display = 'block';
        armen.style.display = 'block';
        felGissning++;
    } else if (felGissning === 6) {
        console.log('Visa huvudet');
        marken.style.display = 'block';
        scaffold.style.display = 'block';
        benen.style.display = 'block';
        kropen.style.display = 'block';
        armen.style.display = 'block';
        huvud.style.display = 'block';
        felGissning++;
    } else {
        console.log('Visa huvudet orange');
        marken.style.display = 'block';
        scaffold.style.display = 'block';
        benen.style.display = 'block';
        kropen.style.display = 'block';
        armen.style.display = 'block';
        huvud.style.display = 'block';
        huvudorange.style.display = 'block';
        felGissning++;
        startagain.style.display = 'block';
        gameover();
		
    }

}



// document.querySelector('.exit').addEventListener('click', function () {
//     // window.location.reload();
//     //  window.close();
// });

function spelaOm() {
    displayHangman();
    gameresults.style.display = 'none';
    // inputDisplay.style.display = 'none';
    startagain.style.display = 'none';
    gameContentSection.style.display = 'flex';
    ordet.style.display = 'flex';
    spelaOmBtn.innerText = 'Starta om';
    ordet.innerText = '';
    gameContentSection.innerHTML = ""
    guessedLetters = []
    felGissning = 1;
    listaBokstav = [];
    points = 0;
    showPoints.innerText = points;
    visadeLetters = [];
    guessesMade = 0;

    spelOrd = slumpaOrd();
}

hintIcon.addEventListener("click", () => {
    // console.log("cklickat!!!!")
    points -= 20
    function slumpabokstav() {
        hintBokstav = allaLetters[Math.floor(Math.random() * allaLetters.length)];
        hintBokstav = hintBokstav.toUpperCase();
        return hintBokstav;
    }
    let insertBokstav = slumpabokstav()
    for (let i = 0; i < visadeLetters.length; i++) {
        while (visadeLetters.includes(insertBokstav)) {
            console.log("Inte", insertBokstav);
            insertBokstav = slumpabokstav();
            console.log("Utan: ", insertBokstav);
            //Kanske göra så att man tar ut de gissade bokstäverna ur listan ist.
        }
    }

    let hurmånga = allaLetters.filter(x => x === insertBokstav)
    visadeLetters.push(insertBokstav)
    // console.log(hintBokstav);
    console.log(insertBokstav);
    console.log(hurmånga)
})

showPoints.innerText = points
parent.append(showPoints)

// export {inputValue}
export { spelOrd, points, guessedLetters, gameContentSection, ordet, guessesMade, userInfo, LocalSWordLength}
