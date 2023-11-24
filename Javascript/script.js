import { words } from "./ordlista.js"
let inputValue 
let gissa = document.querySelector(".gissa")
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("letter-input").focus();
  });

  
  let inputElement = document.getElementById('letter-input');

 
  inputElement.addEventListener('input', function() {
   
    inputValue = inputElement.value.toUpperCase();
    

    inputElement.value = inputValue;
  });
  inputElement.addEventListener("keyup", event => {
	if(event.key === "Enter"){
		gissa.click()
	}
})
const ordLista = words
const ordet = document.querySelector(".ordet")
let ordLängd = 10
//TODO, fixa så att koden tar inputs så användaren kan välja längd på ord


function slumpaOrd() {
let tempOrd = ordLängd
let ord;
	do {
    	ord = ordLista[Math.floor(Math.random() * ordLista.length)];
	} while (ord.length !== tempOrd);

ord = ord.toUpperCase()
return ord 
}

const spelOrd = slumpaOrd();

gissa.addEventListener("click", () =>{
spelOrd.split("").forEach(letter => {

	if (spelOrd.includes(inputValue)){
	let bokstav = document.createElement("p")
	bokstav.innerText = letter
	ordet.appendChild(bokstav)}
	// lägg for each utanför if satsen? 
	else {
		console.log("Fel")
		//Lägg till  append för att spara bokstaven i en annan section för felgissningar. 
	}

});

console.log(`Det rätta ordet är ${spelOrd}`);
})