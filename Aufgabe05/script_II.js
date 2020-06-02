"use strict";
var A05_I;
(function (A05_I) {
    for (let i = 0; i < A05_I.list.length; i++) {
        let kasten = document.createElement("div");
        kasten.setAttribute("class", "ag");
        if (A05_I.list[i].kathegorie == "Soziales") {
            document.getElementById("soziales")?.appendChild(kasten);
        }
        if (A05_I.list[i].kathegorie == "Technik") {
            document.getElementById("technik")?.appendChild(kasten);
        }
        if (A05_I.list[i].kathegorie == "eine Person") {
            document.getElementById("person")?.appendChild(kasten);
        }
        if (A05_I.list[i].kathegorie == "mehrere Personen") {
            document.getElementById("personen")?.appendChild(kasten);
        }
        let bild = document.createElement("img");
        bild.setAttribute("src", "Bilder/" + A05_I.list[i].bild);
        bild.setAttribute("alt", "ag1_" + i + 1);
        kasten.appendChild(bild);
        let aNam = document.createElement("h3");
        kasten.appendChild(aNam);
        aNam.innerHTML = A05_I.list[i].name;
        let liste = document.createElement("ul");
        kasten.appendChild(liste);
        let beschreib1 = document.createElement("li");
        liste.appendChild(beschreib1);
        beschreib1.innerHTML = A05_I.list[i].beschreibung;
        let beschreib2 = document.createElement("li");
        liste.appendChild(beschreib2);
        beschreib2.innerHTML = A05_I.list[i].beschreibeung2;
        let beschreib3 = document.createElement("li");
        liste.appendChild(beschreib3);
        beschreib3.innerHTML = A05_I.list[i].beschreibung3;
        let beschreib4 = document.createElement("li");
        liste.appendChild(beschreib4);
        beschreib4.innerHTML = A05_I.list[i].beschreibung4;
        let price = document.createElement("p");
        price.setAttribute("class", "Preis");
        kasten.appendChild(price);
        price.innerHTML = "" + A05_I.list[i].preis + " €";
        let knopf = document.createElement("button");
        knopf.innerHTML = "In den Einkaufswagen";
        kasten.appendChild(knopf);
    }
})(A05_I || (A05_I = {}));
//# sourceMappingURL=script_II.js.map