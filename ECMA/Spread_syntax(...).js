// ****** Spread syntax (...) ****** 

const countries1 = ["Maroc","Algerie","Tunisie"]
const countries2 = ["Usa","Canada"]

//console.table(countries1);

//Spread syntax like creating new array
//console.table([...countries1]);

// will concat
//console.table([...countries1,...countries2]);

// same use for object
const fruit={
	color:"RED",
	weight:0.25
}
const fruit2={
	color:"GREEN",
	weight:0.5,
	price:0.30
}

console.log(fruit)
//Spread syntax
console.log({...fruit,...fruit2})