//Array  functions 
let countries_chaine = "Maroc,Algerie,Tunisie"

// arrayFrom => returns Array.from each char of chaine
const charsArray = Array.from(countries_chaine)
//console.table(charsArray)

// split => returns an array from string and seperator
const countriesArray = countries_chaine.split(",")
//console.table(countriesArray)
//for(let countrie of  countriesArray.keys()) = for(let countrie in  countriesArray) => loop on keys
//for(let countrie of  countriesArray.values()  ) = for(  let countrie of  countriesArray  )  => loop on values
for(  let countrie of  countriesArray  )  
{
	console.log(countrie)
}