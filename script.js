// odkazy na HTML objekty
const figurky = document.getElementById("figurky");
const pocetPat = document.getElementById("pocetPat");
const pocetMat = document.getElementById("pocetMat");

// kód vykreslení obrázků
const pat = "<img src='img/pat.png'>";
const mat = "<img src='img/mat.png'>";

let kodFigurek = "";
let i=0;
let patMat;
pocetPat = 0
while (Math.random()*20) {
  i++; 
  if (Math.random()<0.5) {
    patMat = pat;
    pPat++;
    }
  else {
   patrMat = mat;
   pMat++;
  }
  kodFigurek += "<div>" + patMat + "</div>";
}
figurky.innerHTML = kodFigurek; // vloží kód řady obrázků, kterou požadujeme vykreslit
pocetPat.innerText = i;         // vypíše počet vykreslených figurek Pata (všech deset)
pocetMat.innerText = 0;         // vypíše počet vykreslenách figurek Mata (žádný)

