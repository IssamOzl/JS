 // ******** Template literals (Template strings) ***************
 
 // le mode simple JS
 let nom ="Issam"
 let prenom ="Ouzali"
 let age =26
 let isAdulte ="Adulte"
 
 if(age <18)
 {
	 isAdulte="Mineur"
 }
  let res = "Bonjour "+nom+" "+prenom+"\n "+age+" "+isAdulte;
  document.querySelector('#res').innerHTML = res;

// tout ça dans un seul ligne
let res2 = `Bonjour ${nom} ${prenom} ${age} ${(age<18 ? "Minuer": "Adulte").toUpperCase()}` 
 
  document.querySelector('#res2').innerHTML = res2;
