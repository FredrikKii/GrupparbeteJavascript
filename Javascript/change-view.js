import { gameContentSection, userInfo } from "./type-in-letter.js"
import { difficulty } from "./start-game.js"
import { gameresults } from "./win-lose.js"
const wordDisplay = document.querySelector('.type-in-letter');
const startContent = document.querySelector('.start-content');
const topplistaBtn = document.querySelector(".topplistaBtn")
const hangman = document.querySelector(".game-content")
const spelaBtn = document.querySelector(".spela")
const backBtn = document.querySelector(".goBack")
const ordet = document.querySelector(".ordet");
let toppListaSection = document.querySelector(".topplista-section");

backBtn.style.display = 'none'
let toppListaNr = 0
// let element = 0
let toppListItems
let scoreItem 
let scoreDate 
let scoreTime 
let scoreguess 
let scorelength
let scoreLoss 
let toppListaBack 
let toppListaHeadPDate
let toppListaHeadPPoints
let toppListaHeadPTime
let redanSkapadLista = false



let focusElement = document.querySelector(".topplistaBtn");
// focusElement.focus()


// Lägg till klickhändelse på dokumentet för att fokusera på input när någon klickar var som helst på sidan
// document.addEventListener("click", function () {
// 	focusElement.focus()
// });


topplistaBtn.addEventListener
("click", () => {
		focusElement.blur();
		startContent.style.display = 'none'
		difficulty.style.display = 'none'
		topplistaBtn.style.display = 'none'
		backBtn.style.display = 'block'
		hangman.style.display = "none"
		// gameresults.style.display = "none"
		// gameContentSection.style.display = 'none'
    	// ordet.style.display = 'none'

		

		// wordDisplay.style.display = 'none';
		// ordet.style.display = 'none'
		// gameContentSection.style.display = 'none'

		
		// difficulty.remove('difficulty')
		
		
		remakeToppList()
		
		if (!redanSkapadLista) {
			createTopList();
			redanSkapadLista = true;
		}
	
		
		
		function createTopList () {
			toppListaBack = document.createElement("div")
			let toppListaHeadDiv = document.createElement("div")
			let toppListaHeadh1 = document.createElement("h1")
			toppListaHeadh1.innerText = "TOPPLISTA"
			
			let sortedScore = userInfo.sort((a, b) => a.guesses - b.guesses)
			console.log(userInfo)
			toppListaHeadDiv.classList.add("div-header")
			let toppListaHeadP = 0
			for (let p = 0; p < 4; p++) {
				if (p === 0) {
					toppListaHeadP = document.createElement("p")
					toppListaHeadP.innerText = "Namn"
					toppListaHeadDiv.appendChild(toppListaHeadP)
				}
				else if (p === 1) {
					toppListaHeadP = document.createElement("p")
					toppListaHeadPPoints = toppListaHeadP
					toppListaHeadPPoints.classList.add("point-date")
					toppListaHeadP.innerText = "Gissningar"
					toppListaHeadDiv.appendChild(toppListaHeadP)
				}
				else if (p === 2) {
					toppListaHeadP = document.createElement("p")
					toppListaHeadPDate = toppListaHeadP
					toppListaHeadPDate.classList.add("point-date")
					toppListaHeadP.innerText = "Datum"
					toppListaHeadDiv.appendChild(toppListaHeadP)

				}
				// else if (p === 3){
					// 	toppListaHeadP = document.createElement("p")
					// 	toppListaHeadPTime = toppListaHeadP
					// 	toppListaHeadP.innerText = "Tid"
				// 	toppListaHeadDiv.appendChild(toppListaHeadP)
				// }

				toppListaBack.appendChild(toppListaHeadh1)
				toppListaBack.appendChild(toppListaHeadDiv)
			}

			toppListaHeadPDate.classList.toggle("alt")
			toppListaBack.classList.add("back-style-list")
			toppListaNr = document.createElement("ol")
			toppListaNr.classList.add("topplista-style")
			

			
			for (let i = 0; i < userInfo.length; i++) {
				toppListItems = document.createElement("p")
				toppListItems.classList.add("list-columner")
				SkapaPtaggar()
				toppListItems.innerText = userInfo[i].user
				scoreItem.innerText = "poäng: " + userInfo[i].score
				scoreDate.innerText = userInfo[i].date
				// scoreTime.innerText = userInfo[i].time
				scoreguess.innerText = userInfo[i].guesses
				scorelength.innerText = "ordlängd: " + userInfo[i].wordLegnth
				scoreLoss.innerText = userInfo[i].loss
				
			
				addElementsBackInToppList()
			}

			toppListaBack.appendChild(toppListaNr)
			toppListaSection.append(toppListaBack)
			
		
			toppListaHeadPPoints.addEventListener("click", () => {
				
				toppListaHeadPPoints.classList.remove("alt")
				toppListaHeadPDate.classList.add("alt")
				sortedScore = userInfo.sort((a, b) => a.guesses - b.guesses);
				
			// Töm den befintliga listan
			while (toppListaNr.firstChild) {
				toppListaNr.removeChild(toppListaNr.firstChild);
			}

			for (let i = 0; i < sortedScore.length; i++) {
				toppListItems = document.createElement("p");
				toppListItems.classList.add("list-columner");
				SkapaPtaggar()
				toppListItems.innerText = sortedScore[i].user;
				scoreItem.innerText = "poäng: " + sortedScore[i].score;
				scoreDate.innerText = sortedScore[i].date;
				// scoreTime.innerText = sortedScore[i].time;
				scoreguess.innerText = sortedScore[i].guesses
				scorelength.innerText = "ordlängd: " + sortedScore[i].wordLegnth
				scoreLoss.innerText = sortedScore[i].loss
				
				addElementsBackInToppList()
			}
		})
		
		let datumSortVariabel = 0
		toppListaHeadPDate.addEventListener("click", () => {
			console.log("Clickat");
			toppListaHeadPPoints.classList.add("alt")
			toppListaHeadPDate.classList.remove("alt")
			let sortedDate
			if (datumSortVariabel === 0 ){
				sortedDate = userInfo.sort((a, b) => {
					const dateA = a.date.split(", ")[0]; // 
					const timeA = a.date.split(", ")[1]; // 
					const dateB = b.date.split(", ")[0];
					const timeB = b.date.split(", ")[1];
					
					datumSortVariabel = 1
					return new Date(dateB + " " + timeB) - new Date(dateA + " " + timeA);
				});
			}
				else {
					sortedDate = userInfo.sort((a, b) => {
						const dateA = a.date.split(", ")[0]; // 
						const timeA = a.date.split(", ")[1]; // 
						const dateB = b.date.split(", ")[0];
						const timeB = b.date.split(", ")[1];
						datumSortVariabel = 0
						return new Date(dateA + " " + timeA) - new Date(dateB + " " + timeB);
					})}
					

			// Töm den befintliga listan
			while (toppListaNr.firstChild) {
				toppListaNr.removeChild(toppListaNr.firstChild);
			}
			
			for (let i = 0; i < sortedDate.length; i++) {
				toppListItems = document.createElement("p");
				toppListItems.classList.add("list-columner");
				
				SkapaPtaggar()
				toppListItems.innerText = sortedDate[i].user;
				scoreItem.innerText = "poäng: " + sortedDate[i].score;
				scoreDate.innerText = sortedDate[i].date;
				// scoreTime.innerText = sortedDate[i].time;
				scoreguess.innerText = sortedDate[i].guesses
				scorelength.innerText = "ordlängd: " + sortedDate[i].wordLegnth
				scoreLoss.innerText = sortedDate[i].loss

				addElementsBackInToppList()
			}
		});
		
		redanSkapadLista = true
	}
})

spelaBtn.addEventListener("click", () => {
	gameContentSection.style.display = 'flex'
	backBtn.style.display = 'none'
	startContent.style.display = 'none';
	hangman.style.display = 'block';
	ordet.style.display = 'block'
	// wordDisplay.style.display = 'none';
	// gameContentSection.style.display = 'block'
	difficulty.style.display = 'block'
	if (toppListaBack) {
		toppListaBack.style.display = 'none';
	}
	topplistaBtn.style.display = 'block'
})

backBtn.addEventListener('click', function() {
	backBtn.style.display = 'none';
	hangman.style.display = 'block';
	topplistaBtn.style.display = 'block'
	toppListaBack.style.display = 'none'
	// gameresults.style.display = "block"

	// ordet.style.display = 'flex'

	// startContent.style.display = 'block';
	// topplistaBtn.style.display = 'block'
	// startContent.style.display = 'block';
	// wordDisplay.style.display = 'block';

});

function remakeToppList() {
	if (redanSkapadLista) {
		if (toppListaBack) {
			toppListaBack.remove();
        }
       
        redanSkapadLista = false;
    }
}
function addElementsBackInToppList () {
	toppListItems.appendChild(scoreguess)
	toppListItems.appendChild(scoreDate);
	// toppListItems.appendChild(scoreTime)
	toppListItems.appendChild(scoreItem);
	toppListItems.appendChild(scorelength)
	toppListItems.appendChild(scoreLoss)
	toppListaNr.appendChild(toppListItems);
}

function SkapaPtaggar () {
	scoreItem = document.createElement("p")
	scoreDate = document.createElement("p")
	scoreTime = document.createElement("p")
	scoreguess = document.createElement("p")
	scorelength = document.createElement("p")
	scoreLoss = document.createElement("p")
}
export{wordDisplay, backBtn, topplistaBtn}
