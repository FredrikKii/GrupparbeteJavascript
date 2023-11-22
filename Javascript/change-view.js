const topplistaBtn = document.querySelector(".topplista")
const hangman = document.querySelector(".game-content")
const spelaBtn = document.querySelector(".spela")

topplistaBtn.addEventListener("click", () =>{
	hangman.style.display = "none"
	
	// console.log("Fungerar")
})
spelaBtn.addEventListener("click", () =>{
	hangman.style.display = "block"
	
	// console.log("Fungerar")
})
