//Ta ut det slumpade ordet
//gör det till en var
//gör det en list
//matcha den gissade bokstaven mot innehållet i listan
//om det inte matchar, och det inte redan finns fel-ordlistan:
//lägg till i fel-ordlistan


let felGissningar = []
let facit = spelOrd.split('')
console.log(facit);

if((!facit.includes(inputValue)) && (!felGissningar.includes(varValue))) {
	felGissningar.push(inputValue)
}

let felListaDiv = document.getElementById("felLista");
let överStreckad = felGissningar.map(stryk => `<s>${stryk}</s>`)

felListaDiv.innerHTML = överStreckad.join(', ')

//<div id="felLista"></div>