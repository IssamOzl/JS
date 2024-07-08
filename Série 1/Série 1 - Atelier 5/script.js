 var Ht;
 Ht="<table>" ;
 
 for(var j =1;j<=10;j++)
{
	Ht+="<tr>"
	for(var i =1;i<=10;i++)
	{
		Ht+="<td>"+j +"x"+ i+" = "+i*j+"<br/>"+"</td>"
		 
	}
	Ht+="</tr>"
	 
}
Ht+="</table>"
document.writeln(Ht);