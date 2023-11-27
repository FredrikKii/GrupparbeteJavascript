
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
console.log(`Det rätta ordet är ${spelOrd}`);
let inputElement = document.getElementById('letter-input');
inputElement.focus()

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("letter-input").focus();
//   });


inputElement.addEventListener('input', function () {
    inputValue = inputElement.value.toUpperCase();
    inputElement.value = inputValue;
});
let allaLetters = []
let correct 
let points = 0
let hint = -20
let bokstav 
spelOrd.split("").forEach((bokstavlista) => {
	allaLetters.push(bokstavlista)
})


inputElement.addEventListener('keydown', function (e)  {
	if (e.key === 'Enter') {
	
    ordet.innerHTML = "";
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
	showPoints.innerText = `${points} p`

});


// hint-system
let parent = document.querySelector(".type-in-letter")
let hintIcon = document.createElement("p")
hintIcon.innerText = "HINT ( -20p)"
hintIcon.classList.add("hint")
parent.appendChild(hintIcon)
let hintBokstav 
let visadeLetters = []
hintIcon.addEventListener("click", () =>{
	// console.log("cklickat!!!!")
	points -= 20
	function slumpabokstav() {
		
		hintBokstav = allaLetters[Math.floor(Math.random() * allaLetters.length)];
		
			
		hintBokstav = hintBokstav.toUpperCase();
		return hintBokstav;
		
	}
	let insertBokstav = slumpabokstav()
	
	
	// for (let i = 0; i < visadeLetters.length; i++) {
	// 	// let x = insertBokstav
    //     if (visadeLetters.slice(i + 1).some( x => x === insertBokstav)) {
    //         console.log("Inte", insertBokstav);
    //         insertBokstav = slumpabokstav();
    //         console.log("Utan: ", insertBokstav);
    //     }
		
    // }
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


