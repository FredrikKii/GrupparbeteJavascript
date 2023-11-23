const lista = require ('./svenska-ord.json')
const ordLista = lista.ordLista

let ordLängd = 10
//TODO, fixa så att koden tar inputs så användaren kan välja längd på ord


function slumpaOrd() {
let tempOrd = ordLängd
let ord;
	do {
    	ord = ordLista[Math.floor(Math.random() * ordLista.length)];
	} while (ord.length !== tempOrd);


return[ord]
}

const spelOrd = slumpaOrd();

console.log(`Det rätta ordet är ${spelOrd}`);