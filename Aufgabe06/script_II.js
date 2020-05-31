"use strict";
var A06_I;
(function (A06_I) {
    let rollband = 0;
    let einkUms = 0;
    for (let i = 0; i < A06_I.list.length; i++) {
        let kasten = document.createElement("div");
        kasten.setAttribute("class", "ag");
        if (A06_I.list[i].kathegorie == "Soziales") {
            document.getElementById("soziales")?.appendChild(kasten);
        }
        if (A06_I.list[i].kathegorie == "Technik") {
            document.getElementById("technik")?.appendChild(kasten);
        }
        if (A06_I.list[i].kathegorie == "eine Person") {
            document.getElementById("person")?.appendChild(kasten);
        }
        if (A06_I.list[i].kathegorie == "mehrere Personen") {
            document.getElementById("personen")?.appendChild(kasten);
        }
        let bild = document.createElement("img");
        bild.setAttribute("src", "Bilder/" + A06_I.list[i].bild);
        bild.setAttribute("alt", "ag1_" + i + 1);
        kasten.appendChild(bild);
        let aNam = document.createElement("h3");
        kasten.appendChild(aNam);
        aNam.innerHTML = "" + A06_I.list[i].name;
        let liste = document.createElement("ul");
        kasten.appendChild(liste);
        let beschreib1 = document.createElement("li");
        liste.appendChild(beschreib1);
        beschreib1.innerHTML = A06_I.list[i].beschreibung;
        let beschreib2 = document.createElement("li");
        liste.appendChild(beschreib2);
        beschreib2.innerHTML = A06_I.list[i].beschreibeung2;
        let beschreib3 = document.createElement("li");
        liste.appendChild(beschreib3);
        beschreib3.innerHTML = A06_I.list[i].beschreibung3;
        let beschreib4 = document.createElement("li");
        liste.appendChild(beschreib4);
        beschreib4.innerHTML = A06_I.list[i].beschreibung4;
        let price = document.createElement("p");
        price.setAttribute("class", "Preis");
        kasten.appendChild(price);
        price.innerHTML = "" + A06_I.list[i].preis + ",00 €";
        let knopf = document.createElement("button");
        knopf.innerHTML = "In den Einkaufswagen";
        kasten.appendChild(knopf);
        knopf.addEventListener("click", hndl);
    }
    function hndl(_event) {
        let geklickterKaschten = _event.target;
        let prdNm = "";
        if (geklickterKaschten.previousSibling?.previousSibling?.previousSibling?.firstChild?.textContent)
            prdNm = "" + geklickterKaschten.previousSibling?.previousSibling?.previousSibling?.firstChild?.textContent;
        if (window.confirm("bisch sicher dass " + prdNm + " brauchsch?...")) {
            rollband++;
            let einkaufsWagen = document.getElementById("imEinkaufswagen");
            let einkaufsWagenII = document.getElementById("imEinkaufswagenII");
            if (rollband != 0) {
                if (einkaufsWagen) {
                    einkaufsWagen.setAttribute("style", "visibility: visible");
                    einkaufsWagen.innerHTML = "" + rollband;
                }
                if (einkaufsWagenII) {
                    einkaufsWagenII.setAttribute("style", "visibility: visible");
                    einkaufsWagenII.innerHTML = "" + rollband;
                }
            }
            window.alert("...na dann");
            if (geklickterKaschten.previousSibling?.firstChild?.nodeValue)
                einkUms += parseFloat(geklickterKaschten.previousSibling?.firstChild?.nodeValue);
            console.log("Stabile Ware im Wert von: " + einkUms + "€ im Warenkorb");
        }
        else {
            window.alert("besser is es!");
        }
    }
})(A06_I || (A06_I = {}));
//# sourceMappingURL=script_II.js.map