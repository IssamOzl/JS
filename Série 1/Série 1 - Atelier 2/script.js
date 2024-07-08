function rayon() {
   var r = parseInt(prompt("sasir le rayon"));
   var p = 2*Math.PI * r;
   var s = Math.PI * Math.pow(r,2);
   Document.write("Perimetre : "+p);
   Document.write("Surface : "+s);
}