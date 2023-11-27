
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
let allaBokstäver = []
let correct 
let points = 0
let hint = -20
spelOrd.split("").forEach((bokstavlista) => {
	allaBokstäver.push(bokstavlista)
})

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
		correct = true
    }
    else {
		correct = false
        // Lägg till felgissade bokstäver i en annan sektion för felgissningar
        // Exempel: felGissningarSection.appendChild(document.createTextNode(inputValue));
    }
	if(correct){
		points += 29
		correct = 0
	}
	else{
		points -= 12
		correct = 0
	}
	console.log("din poäng är: ", points, correct);
}
    // Återställ input
    inputElement.value = "";

    console.log(`Det rätta ordet är ${spelOrd}`);
});


// hint-system
let parent = document.querySelector(".type-in-letter")
let hintIcon = document.createElement("p")
hintIcon.innerText = "HINT ( -20p)"
hintIcon.classList.add("hint")
parent.appendChild(hintIcon)
let hintBokstav 
hintIcon.addEventListener("click", () =>{
	console.log("cklickat!!!!")
	points -= 20
	function slumpabokstav() {
		
		hintBokstav = allaBokstäver[Math.floor(Math.random() * allaBokstäver.length)];
		
			
		hintBokstav = hintBokstav.toUpperCase();
		return hintBokstav;
		
	}
	let insertBokstav = slumpabokstav()
	let visadeBokstäver = []
	visadeBokstäver.push[hintBokstav]
	
	let hurmånga = allaBokstäver.filter(x => x === insertBokstav)
	console.log(hurmånga)
})