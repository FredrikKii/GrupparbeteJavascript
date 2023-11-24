
import {words} from "./ordlista.js"
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
const spelOrd = slumpaOrd();
let listaBokstav = [];

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("letter-input").focus();
});
let inputElement = document.getElementById('letter-input');

inputElement.addEventListener('input', function () {
    inputValue = inputElement.value.toUpperCase();
    inputElement.value = inputValue;
});


document.getElementById('letter-input').addEventListener('keydown', function (e)  {
	if (e.key === 'Enter') {
    
    ordet.innerText = "";

    spelOrd.split("").forEach((correctLetter) => {
       
        let bokstav = document.createElement("p");

		if (listaBokstav.includes(correctLetter)) {
			bokstav.innerText = correctLetter;
		} else {
			bokstav.innerText = "_";
		}
        ordet.appendChild(bokstav);
    });

    // Lägg till rätt gissade bokstäver i listan
    if (spelOrd.includes(inputValue)) {
        listaBokstav.push(inputValue);
    }
    else {
        // Lägg till felgissade bokstäver i en annan sektion för felgissningar
        // Exempel: felGissningarSection.appendChild(document.createTextNode(inputValue));
    }
	}
    // Återställ input
    inputElement.value = "";

    console.log(`Det rätta ordet är ${spelOrd}`);
});

