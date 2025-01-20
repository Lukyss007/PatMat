// odkazy na HTML objekty
let figurky = document.getElementById("figurky");
let pocetPat = document.getElementById("pocetPat");
let pocetMat = document.getElementById("pocetMat");

// kód vykreslení obrázků
let pat = "<img src='img/pat.png'>";

let kodFigurek = "";
let i=0;
while (i<10) {
  i++;
  kodFigurek += "<div>" + pat + "</div>";
}
figurky.innerHTML = kodFigurek; // vloží kód řady obrázků, kterou požadujeme vykreslit
pocetPat.innerText = i;         // vypíše počet vykreslených figurek Pata (všech deset)
pocetMat.innerText = 0;         // vypíše počet vykreslenách figurek Mata (žádný)

