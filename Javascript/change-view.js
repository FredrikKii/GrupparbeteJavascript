
let userInfo = [
	{user: "Kalle",
	score: "300p",
	date: "23-11-03"},
	
	{user: "Anna",
	score: "250p",
	date: "23-10-22"},
	{user: "Andreas",
	score: "50p",
	date: "23-11-21"},
	{user: "Carolina",
	score: "290p",
	date: "23-11-07"},
	{user: "Hampus",
	score: "320p",
	date: "23-10-03"},
	{user: "Kim",
	score: "20p",
	date: "23-11-15"},
	{user: "Kalle",
	score: "70p",
	date: "23-11-05"},
	{user: "Linn",
	score: "400p",
	date: "23-11-03"},
	{user: "Kalle",
	score: "150p",
	date: "23-11-02"},
	{user: "Kalle",
	score: "200p",
	date: "23-11-03"
},

]
const startContent = document.querySelector('.start-content');
const topplistaBtn = document.querySelector(".topplista")
const hangman = document.querySelector(".game-content")
const spelaBtn = document.querySelector(".spela")
let toppListaNr = 0
let element = 0 
let toppListaBack
let toppListaHeadPDate
let toppListaHeadPPoints

topplistaBtn.addEventListener
("click", () =>{
	
	// Function för sortering efter score:
	function sortByScore(a, b) {
		const scoreA = parseInt(a.score.split(' ')[0]) 
		const scoreB = parseInt(b.score.split(' ')[0]); 
	
	  
		if (scoreA > scoreB) {
			return -1;
		}
		if (scoreA < scoreB) {
			return 1;
		}
		return 0;
	}
	
	const sortedScore = userInfo.sort(sortByScore);
	
	
	// sortedScore.forEach(score => {
	// 	const userScore = score.score;
		
	// }
	// );

	startContent.style.display = 'none'
	hangman.style.display = "none"
	if (element === 0){

		toppListaBack = document.createElement("div")
		let toppListaHeadDiv = document.createElement("div")
		let toppListaHeadh1 = document.createElement("h1")
		toppListaHeadh1.innerText = "TOPP 10"
		
		toppListaHeadDiv.classList.add("div-header")
		let toppListaHeadP = 0
		for (let p = 0; p <= 3; p++){
			if(p===0){
				toppListaHeadP = document.createElement("p")
				toppListaHeadP.innerText = "Namn"
				toppListaHeadDiv.appendChild(toppListaHeadP)
			}
			else if (p===1){
				toppListaHeadP = document.createElement("p")
				toppListaHeadPPoints = toppListaHeadP
				toppListaHeadPPoints.classList.add("point-date")
				toppListaHeadP.innerText = "Poäng"
				toppListaHeadDiv.appendChild(toppListaHeadP)
			}
			else if(p === 2) {
				toppListaHeadP = document.createElement("p")
				toppListaHeadPDate = toppListaHeadP
				toppListaHeadPDate.classList.add("point-date")
				toppListaHeadP.innerText = "Datum"
				toppListaHeadDiv.appendChild(toppListaHeadP)
				
			}
	
			toppListaBack.appendChild(toppListaHeadh1)
			toppListaBack.appendChild(toppListaHeadDiv)
		}

		toppListaHeadPDate.classList.toggle("alt")
		toppListaBack.classList.add("back-style-list")
		toppListaNr = document.createElement("ol")
		toppListaNr.classList.add("topplista-style")
		element++
	
	
		for(let i=1; i <userInfo.length; i++){
			let toppListItems = document.createElement("li")
			toppListItems.classList.add("list-columner")
			let scoreItem = document.createElement("p")
			let scoreDate = document.createElement("p")
			toppListItems.innerText = userInfo[i].user
			scoreItem.innerText = userInfo[i].score
			scoreDate.innerText = userInfo[i].date

			toppListItems.appendChild(scoreItem)
			toppListItems.appendChild(scoreDate)
			toppListaNr.appendChild(toppListItems)
		
	}
	
	toppListaBack.appendChild(toppListaNr)
	document.body.appendChild(toppListaBack)
	
}else {
	// toppListaNr.style.display = "block";
	toppListaBack.style.display = "block"
}
toppListaHeadPPoints.addEventListener("click", () => {
    function sortByScore(a, b) {
        const scoreA = parseInt(a.score.split(' ')[0]);
        const scoreB = parseInt(b.score.split(' ')[0]);

        if (scoreA > scoreB) {
            return -1;
        }
        if (scoreA < scoreB) {
            return 1;
        }
        return 0;
    }
	toppListaHeadPPoints.classList.remove("alt")
	toppListaHeadPDate.classList.add("alt")
    const sortedScore = userInfo.sort(sortByScore);

    // Töm den befintliga listan
    while (toppListaNr.firstChild) {
        toppListaNr.removeChild(toppListaNr.firstChild);
    }

    for (let i = 1; i < sortedScore.length; i++) {
        let toppListItems = document.createElement("li");
        toppListItems.classList.add("list-columner");
        let scoreItem = document.createElement("p");
        let scoreDate = document.createElement("p");
        toppListItems.innerText = sortedScore[i].user;
        scoreItem.innerText = sortedScore[i].score;
        scoreDate.innerText = sortedScore[i].date;

        toppListItems.appendChild(scoreItem);
        toppListItems.appendChild(scoreDate);
        toppListaNr.appendChild(toppListItems);
    }})

toppListaHeadPDate.addEventListener("click", () => {
    function sortByDate(a, b) {
        const dateA = a.date.split(' ')[0];
        const dateB = b.date.split(' ')[0];

        if (dateA > dateB) {
            return -1;
        }
        if (dateA < dateB) {
            return 1;
        }
        return 0;
    }
	toppListaHeadPPoints.classList.add("alt")
	toppListaHeadPDate.classList.remove("alt")
    const sortedDate = userInfo.sort(sortByDate);

    // Töm den befintliga listan
    while (toppListaNr.firstChild) {
        toppListaNr.removeChild(toppListaNr.firstChild);
    }

    for (let i = 1; i < sortedDate.length; i++) {
        let toppListItems = document.createElement("li");
        toppListItems.classList.add("list-columner");
        let scoreItem = document.createElement("p");
        let scoreDate = document.createElement("p");
        toppListItems.innerText = sortedDate[i].user;
        scoreItem.innerText = sortedDate[i].score;
        scoreDate.innerText = sortedDate[i].date;

        toppListItems.appendChild(scoreItem);
        toppListItems.appendChild(scoreDate);
        toppListaNr.appendChild(toppListItems);
    }
});


})
spelaBtn.addEventListener("click", () =>{
	hangman.style.display = "block"
	toppListaBack.style.display = "none"
	startContent.style.display = 'none'
})

