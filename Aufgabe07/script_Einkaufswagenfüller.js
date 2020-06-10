"use strict";
var A07;
(function (A07) {
    A07.aufzählung = Number(localStorage.getItem("Einkaufswagen"));
    A07.gesamtpreis = Number(localStorage.getItem("Gesamtpreis"));
    A07.aufgezählt = [];
    //Ablauf
    listeBeginnen();
    auflisten();
    function listeBeginnen() {
        let ersteZeile = document.createElement("tr");
        ersteZeile.id = "anfang";
        let großvater = document.getElementById("derEinkaufBeginne");
        if (großvater)
            großvater.appendChild(ersteZeile);
        let stornoÜberschrift = document.createElement("th");
        stornoÜberschrift.innerHTML = "Storno";
        let name = document.createElement("th");
        name.innerHTML = "Artikel";
        let preis = document.createElement("th");
        preis.innerHTML = "Preis";
        ersteZeile.appendChild(stornoÜberschrift);
        ersteZeile.appendChild(name);
        ersteZeile.appendChild(preis);
    }
    function auflisten() {
        for (let i = 1; i <= A07.aufzählung; i++) {
            let a = new A07.ImEinkaufsWagen(Number(localStorage.getItem("Preis" + i)), localStorage.getItem("Artikel" + i), i);
            a.einTrag(i);
            A07.aufgezählt.push(a);
            console.log(A07.aufgezählt);
        }
        listeBeenden(A07.gesamtpreis);
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
        let name = document.createElement("th");
        name.innerHTML = "Gesamtpreis:";
        let preis = document.createElement("th");
        preis.innerHTML = "" + _gesamtpreis;
        letzteZeile.appendChild(stornoAlle);
        letzteZeile.appendChild(name);
        letzteZeile.appendChild(preis);
    }
    A07.listeBeenden = listeBeenden;
    function hndl_entfernenAlle(_event) {
        for (let i = 0; i <= A07.aufzählung; i++) {
            localStorage.removeItem("Gesamtpreis");
            localStorage.removeItem("Artikel" + i);
            localStorage.removeItem("Preis" + i);
            localStorage.removeItem("Einkaufswagen" + i);
            let listeLöschen = document.getElementById("" + i);
            if (listeLöschen)
                listeLöschen.remove();
        }
        let ende = document.getElementById("ende");
        if (ende)
            ende.remove();
        let anfang = document.getElementById("anfang");
        if (anfang)
            anfang.remove();
        listeBeginnen();
        listeBeenden(0);
    }
})(A07 || (A07 = {}));
//# sourceMappingURL=script_Einkaufswagenfüller.js.map