// difference between var and let

// JS:globale scope => accesible partout dans le code
var age=20;
function test ()
{
	// JS:function scope = local scope => var age declaré dans la fonction pas accesible hors de cette fonction
	var age2 = 12;
	//alert(age);
	
	// new with ECMA script => BLOCK Scope EX
	//***** EX1 :
	/*
	if(age2 = 12)
	{
		// var res declaré dans le block condition
		var res = "VRAI"
	}
	// var res accesible ici
	alert(res);*/
	
	// ****  EX2 => utilisation let a la place de var dans la scope 
	if(age2 = 12)
	{
		// var res declaré dans le block condition
		let res = "VRAI"
		// let res est accesible ici uniquement
		alert(res);
	}
	// let res n'est pas accesible ici
	//alert(res);
}

test ()