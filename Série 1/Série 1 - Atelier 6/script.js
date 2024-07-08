var imageVide = new Image() ;var imagePrintemps = new Image() ;
var imageEte = new Image() ;var imageAutomne = new Image() ;
var imageHiver = new Image() ;
imageVide.src = "/images/photo_vide.jpg";
imagePrintemps.src = "/images/photo_printemps.jpg"
imageEte.src = "/images/photo_ete.jpg"
imageAutomne.src = "/images/photo_automne.jpg"
imageHiver.src = "/images/photo_hiver.jpg"
function afficheImage(saison){
	switch (saison) 
	{
		case 'printemps' :
		document.images[0].src = imagePrintempsVide.src
		break
		case 'ete' :
		document.images[0].src = imageEte.src
		break
		case 'automne' :
		document.images[0].src = imageAutomne.src
		break
		case 'hiver' :
		document.images[0].src = imageHiver.src
		break
		default :
		document.images[0].src = imageVide.src
	}
}