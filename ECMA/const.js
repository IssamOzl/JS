// EMA SCRIPT -> CONST 
/*
Utilisation CONST

1-Array
2-Object
3-Function
4-regExp
*/

const PI = 3.14
// ça fonctionne pas
//PI=10

// ******* 1-Array ******* 
const countries = ["Maroc","Algerie"]
// on peut modifier le element du tableau mais pas le tableau directement
// ça fonctionne
countries[0]="Test"
countries.push("Tunisie")
// ça fonctionne pas
//countries = []

console.table(countries)

// same works for object

// ******* 2-Object ******* 
const animal = {
	race:"Pitbull",
	couleur:"nooir"
}
// ça fonctionne
animal.couleur ="Blanc"

// ça fonctionne pas
//animal={}


// ******* 3-Function ******* 
// const displayAnimal = function(animal){} == function displayAnimal (animal){}
const displayAnimal = function(animal){
	document.write(JSON.stringify(animal))
}
displayAnimal(animal)