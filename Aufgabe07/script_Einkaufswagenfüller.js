"use strict";
var A07;
(function (A07) {
    A07.gesamtpreis = 0;
    A07.aufgezählt = [];
    //Ablauf
    listeBeginnen();
    auflisten();
    function auflisten() {
        for (let i = 0; i < localStorage.length; i++) {
            let aufbau = localStorage.getItem(localStorage.key(i));
            let aufbauString = aufbau.split(",");
            let name = aufbauString[0];
            let bild = aufbauString[1];
            let a = new A07.ImEinkaufsWagen(Number(localStorage.key(i)), name, bild);
            A07.gesamtpreis += a.preis;
            A07.aufgezählt.push(a);
            a.einTrag(i);
        }
        listeBeenden(A07.gesamtpreis);
        befindetSichBereitsWasImEinkaufswagenfürAlleAnderen();
    }
    function listeBeginnen() {
        let ersteZeile = document.createElement("tr");
        ersteZeile.id = "anfang";
        let großvater = document.getElementById("derEinkaufBeginne");
        if (großvater)
            großvater.appendChild(ersteZeile);
        let stornoÜberschrift = document.createElement("th");
        stornoÜberschrift.innerHTML = "Storno";
        let bild = document.createElement("th");
        bild.innerHTML = "Bild";
        let name = document.createElement("th");
        name.innerHTML = "Artikel";
        let preis = document.createElement("th");
        preis.innerHTML = "Preis";
        ersteZeile.appendChild(stornoÜberschrift);
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
        let platzhalter = document.createElement("td");
        platzhalter.innerHTML = "";
        let name = document.createElement("th");
        name.innerHTML = "Gesamtpreis:";
        let preis = document.createElement("th");
        preis.innerHTML = "" + _gesamtpreis + " €";
        letzteZeile.appendChild(stornoAlle);
        letzteZeile.appendChild(platzhalter);
        letzteZeile.appendChild(name);
        letzteZeile.appendChild(preis);
    }
    A07.listeBeenden = listeBeenden;
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
})(A07 || (A07 = {}));
//# sourceMappingURL=script_Einkaufswagenfüller.js.map