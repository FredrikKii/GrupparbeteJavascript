
import { words } from "./ordlista.js"
// import { fellista } from "./wrong-letter.js";
const ordLista = words;
let inputValue;
const ordet = document.querySelector(".ordet");
let ordLängd = 10;

function slumpaOrd() {
    let tempOrd = ordLängd;
    let ord;
    do {
        ord = ordLista[Math.floor(Math.random() * ordLista.length)];
    } while (ord.length !== tempOrd);

    ord = ord.toUpperCase();
    return ord;
}
let spelOrd = slumpaOrd();
let listaBokstav = [];
const hangman = document.querySelector('.game-content');
const marken = document.querySelector('#ground');
const scaffold = document.querySelector('#scaffold');
const benen = document.querySelector('#legs');
const kropen = document.querySelector('#body');
const armen = document.querySelector('#arms');
const huvud = document.querySelector('#head');
const huvudorange = document.querySelector('.huvudorange');
const inputDisplay = document.querySelector('.type-in-letter')
const startagain = document.querySelector('.start-again');
const spelaOmBtn = document.querySelector(".spela")

// const stängAv = document.querySelector('.exit');

let parent = document.querySelector(".type-in-letter")
let hintIcon = document.createElement("p")
hintIcon.innerText = "HINT ( -20p)"
hintIcon.classList.add("hint")
parent.appendChild(hintIcon)
let hintBokstav
let visadeLetters = []


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("letter-input").focus();
});
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


inputElement.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {

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
function displayHangman() {
    // marken.classList.add = "alt";
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
    }

    else if (felGissning === 2) {
        console.log('Visa scaffold');
        marken.style.display = 'block';
        scaffold.style.display = 'block';
        felGissning++;
    }
    else if (felGissning === 3) {
        console.log('Visa benen');
        marken.style.display = 'block';
        scaffold.style.display = 'block';
        benen.style.display = 'block';
        felGissning++;

    }
    else if (felGissning === 4) {
        console.log('Visa kroppen');
        marken.style.display = 'block';
        scaffold.style.display = 'block';
        benen.style.display = 'block';
        kropen.style.display = 'block';
        felGissning++;
    }
    else if (felGissning === 5) {
        console.log('Visa armen');
        marken.style.display = 'block';
        scaffold.style.display = 'block';
        benen.style.display = 'block';
        kropen.style.display = 'block';
        armen.style.display = 'block';

        felGissning++;
    }
    else if (felGissning === 6) {
        console.log('Visa huvudet');
        marken.style.display = 'block';
        scaffold.style.display = 'block';
        benen.style.display = 'block';
        kropen.style.display = 'block';
        armen.style.display = 'block';
        huvud.style.display = 'block';
        felGissning++;
    }
    else {
        console.log('Visa huvudet orange');
        marken.style.display = 'block';
        scaffold.style.display = 'block';
        benen.style.display = 'block';
        kropen.style.display = 'block';
        armen.style.display = 'block';
        huvud.style.display = 'block';
        huvudorange.style.display = 'block';
        felGissning++;
        inputDisplay.style.display = 'none'
        startagain.style.display = 'block';
    }
}

document.querySelector('.exit').addEventListener('click', function () {
    // window.location.reload();
     window.close();
});

function spelaOm() {
    displayHangman();
    inputDisplay.style.display = 'none';
    startagain.style.display = 'none';
    spelaOmBtn.innerText = 'Starta om';
    ordet.innerText = '';
	gameContentSection.innerHTML = ""
    felGissning = 1;
    listaBokstav = [];
    points = 0;
    showPoints.innerText = points;
    visadeLetters = [];
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

let showPoints = document.createElement("h2")
showPoints.innerText = points
parent.append(showPoints)

// export {inputValue}
// export{spelOrd}