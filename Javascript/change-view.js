import { userInfo } from "./type-in-letter.js"
const wordDisplay = document.querySelector('.type-in-letter');
const startContent = document.querySelector('.start-content');
const topplistaBtn = document.querySelector(".topplista")
const hangman = document.querySelector(".game-content")
const spelaBtn = document.querySelector(".spela")
const startagain = document.querySelector('.start-again');
const ordet = document.querySelector(".ordet");


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
topplistaBtn.addEventListener
	("click", () => {
		startContent.style.display = 'none'
		wordDisplay.style.display = 'none';
		startagain.style.display = 'none'
		hangman.style.display = 'none'
		ordet.style.display = 'none'
		
		
		remakeToppList()
		
		if (!redanSkapadLista) {
			createTopList();
			redanSkapadLista = true;
		}
	
		
		hangman.style.display = "none"
		
			function createTopList () {
			toppListaBack = document.createElement("div")
			let toppListaHeadDiv = document.createElement("div")
			let toppListaHeadh1 = document.createElement("h1")
			toppListaHeadh1.innerText = "TOPPLISTA"
			
			let sortedScore = userInfo.sort((a, b) => b.score - a.score)
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
					toppListaHeadP.innerText = "Poäng"
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
				toppListItems = document.createElement("li")
				toppListItems.classList.add("list-columner")
				SkapaPtaggar()
				toppListItems.innerText = userInfo[i].user
				scoreItem.innerText = userInfo[i].score
				scoreDate.innerText = userInfo[i].date
				// scoreTime.innerText = userInfo[i].time
				scoreguess.innerText = "Antal gissningar: " + userInfo[i].guesses
				scorelength.innerText = "ordlängd: " + userInfo[i].wordLegnth
				scoreLoss.innerText = userInfo[i].loss

			
				addElementsBackInToppList()
			}

			toppListaBack.appendChild(toppListaNr)
			document.body.appendChild(toppListaBack)

		
		toppListaHeadPPoints.addEventListener("click", () => {
			
			toppListaHeadPPoints.classList.remove("alt")
			toppListaHeadPDate.classList.add("alt")
			sortedScore = userInfo.sort((a, b) => b.score - a.score);

			// Töm den befintliga listan
			while (toppListaNr.firstChild) {
				toppListaNr.removeChild(toppListaNr.firstChild);
			}

			for (let i = 0; i < sortedScore.length; i++) {
				toppListItems = document.createElement("li");
				toppListItems.classList.add("list-columner");
				SkapaPtaggar()
				toppListItems.innerText = sortedScore[i].user;
				scoreItem.innerText = sortedScore[i].score;
				scoreDate.innerText = sortedScore[i].date;
				// scoreTime.innerText = sortedScore[i].time;
				scoreguess.innerText = "Antal gissningar: " + sortedScore[i].guesses
				scorelength.innerText = "ordlängd: " + sortedScore[i].wordLegnth
				scoreLoss.innerText = sortedScore[i].loss

				addElementsBackInToppList()
			}
		})
		
		toppListaHeadPDate.addEventListener("click", () => {
			console.log("Clickat");
			toppListaHeadPPoints.classList.add("alt")
			toppListaHeadPDate.classList.remove("alt")
			const sortedDate = userInfo.sort((a, b) => b.date - a.date);

			// Töm den befintliga listan
			while (toppListaNr.firstChild) {
				toppListaNr.removeChild(toppListaNr.firstChild);
			}
			
			for (let i = 0; i < sortedDate.length; i++) {
				toppListItems = document.createElement("li");
				toppListItems.classList.add("list-columner");
				
				SkapaPtaggar()
				toppListItems.innerText = sortedDate[i].user;
				scoreItem.innerText = sortedDate[i].score;
				scoreDate.innerText = sortedDate[i].date;
				// scoreTime.innerText = sortedDate[i].time;
				scoreguess.innerText = "Antal gissningar: " + sortedDate[i].guesses
				scorelength.innerText = "ordlängd: " + sortedDate[i].wordLegnth
				scoreLoss.innerText = sortedDate[i].loss

				addElementsBackInToppList()
			}
		});

		redanSkapadLista = true
	}
	})

spelaBtn.addEventListener("click", () => {
	startContent.style.display = 'none';
	hangman.style.display = 'none';
	wordDisplay.style.display = 'block';
	startagain.style.display = 'none';
	ordet.style.display = 'flex'
	if (toppListaBack) {
		toppListaBack.style.display = 'none';
	}

})

function remakeToppList() {
    if (redanSkapadLista) {
        if (toppListaBack) {
            toppListaBack.remove();
        }
       
        redanSkapadLista = false;
    }
}
function addElementsBackInToppList () {
	toppListItems.appendChild(scoreItem);
	toppListItems.appendChild(scoreDate);
	// toppListItems.appendChild(scoreTime)
	toppListItems.appendChild(scoreguess)
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
