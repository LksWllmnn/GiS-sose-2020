"use strict";
var A07_III;
(function (A07_III) {
    A07_III.gesamtpreis = 0;
    A07_III.aufgezählt = [];
    let liste = [];
    //Ablauf
    listeBeginnen();
    communicate("Liste.json");
    async function communicate(_url) {
        let response = await fetch(_url);
        liste = await response.json();
        befindetSichBereitsWasImEinkaufswagenfürAlleAnderen();
        converter(liste);
    }
    function converter(_liste) {
        for (let i = 0; i < localStorage.length; i++) {
            let number = Number(localStorage.key(i));
            let a = new A07_III.ImEinkaufsWagen(_liste[number].preis, _liste[number].name, _liste[number].bild, Number(localStorage.getItem(localStorage.key(i))), number);
            A07_III.gesamtpreis += a.preis;
            a.einTrag(i);
            A07_III.aufgezählt.push(a);
        }
        listeBeenden(A07_III.gesamtpreis);
    }
    function listeBeginnen() {
        let ersteZeile = document.createElement("tr");
        ersteZeile.id = "anfang";
        let großvater = document.getElementById("derEinkaufBeginne");
        if (großvater)
            großvater.appendChild(ersteZeile);
        let stornoÜberschrift = document.createElement("th");
        stornoÜberschrift.innerHTML = "Storno";
        let stück = document.createElement("th");
        stück.innerHTML = "Anzahl";
        let bild = document.createElement("th");
        bild.innerHTML = "Bild";
        let name = document.createElement("th");
        name.innerHTML = "Artikel";
        let preis = document.createElement("th");
        preis.innerHTML = "€€€Preis€€€";
        ersteZeile.appendChild(stornoÜberschrift);
        ersteZeile.appendChild(stück);
        ersteZeile.appendChild(bild);
        ersteZeile.appendChild(name);
        ersteZeile.appendChild(preis);
    }
    function listeBeenden(_gesamtpreis) {
        let letzteZeile = document.createElement("tr");
        letzteZeile.id = "ende";
        let großvater = document.getElementById("derEinkaufBeginne");
        if (großvater)
            großvater.appendChild(letzteZeile);
        let stornoAlle = document.createElement("td");
        let stornoButton = document.createElement("button");
        stornoAlle.appendChild(stornoButton);
        stornoButton.addEventListener("click", hndl_entfernenAlle);
        stornoButton.innerHTML = "ALLE STORNOOOO!!";
        let platzhalterI = document.createElement("td");
        platzhalterI.innerHTML = "";
        let platzhalterII = document.createElement("td");
        platzhalterII.innerHTML = "";
        let name = document.createElement("th");
        name.innerHTML = "Gesamtpreis:";
        let preis = document.createElement("th");
        preis.innerHTML = "" + _gesamtpreis + " €";
        letzteZeile.appendChild(stornoAlle);
        letzteZeile.appendChild(platzhalterI);
        letzteZeile.appendChild(platzhalterII);
        letzteZeile.appendChild(name);
        letzteZeile.appendChild(preis);
    }
    A07_III.listeBeenden = listeBeenden;
    function hndl_entfernenAlle(_event) {
        localStorage.clear();
        listeBeginnen();
        listeBeenden(0);
        location.reload();
    }
    function befindetSichBereitsWasImEinkaufswagenfürAlleAnderen() {
        if (localStorage.length > 0) {
            let elementListe = document.getElementsByClassName("EinkaufswagenAnzeige");
            for (let i = 0; i < elementListe.length; i++) {
                if (elementListe[i]) {
                    elementListe[i].setAttribute("style", "visibility: visible");
                    elementListe[i].innerHTML = "" + localStorage.length;
                }
            }
        }
        else {
            let elementListe = document.getElementsByClassName("EinkaufswagenAnzeige");
            for (let i = 0; i < elementListe.length; i++) {
                if (elementListe[i]) {
                    elementListe[i].setAttribute("style", "visibility: hidden");
                }
            }
        }
    }
})(A07_III || (A07_III = {}));
//# sourceMappingURL=script_Einkaufswagenfüller.js.map