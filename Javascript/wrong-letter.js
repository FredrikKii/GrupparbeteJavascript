//Ta ut det slumpade ordet
//gör det till en var
//gör det en list
//matcha den gissade bokstaven mot innehållet i listan
//om det inte matchar, och det inte redan finns fel-ordlistan:
//lägg till i fel-ordlistan


let felGissningar = []
let facit = spelOrd.split('')
const gameContentSection = document.querySelector('.game-content')

function fellista() {

	if((!facit.includes(inputValue)) && (!felGissningar.includes(varValue))) {
	felGissningar.push(inputValue)
}

let felListaDiv = document.getElementById("felLista");
let överStrykt = felGissningar.map(abc => `<s>${abc}</s>`)

felListaDiv.innerHTML = överStrykt.join(', ')


gameContentSection.lastChild.innerHTML += överStrykt

}