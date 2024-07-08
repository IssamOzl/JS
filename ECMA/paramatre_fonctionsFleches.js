// Declaration forme 1
function sum(a,b){
	return a+b;
}

// Declaration forme 2
const sum2 = function(a,b){
	return a+b;
}

// Declaration forme 3 - arrow function
const sum3 = (a,b) =>   a+b;
 
 // ***** paramatres *******
// paramatre par defaut
const sum4 = (a=0,b=0) =>   a+b;
//alert(sum4())

//Rest parametre
const sumRest = (...numbers) => {
	for (var i=0;i<numbers.length;i++)
		document.writeln(numbers[i]);
	
}
sumRest(1,2,3,5);
