"use strict";
var A07_III;
(function (A07_III) {
    A07_III.einkUms = 0;
    let liste = [];
    A07_III.listFinal = [];
    communicate("Liste.json");
    async function communicate(_url) {
        let response = await fetch(_url);
        liste = await response.json();
        befindetSichBereitsWasImEinkaufswagen();
        converter(liste);
    }
    function converter(_liste) {
        for (let i = 0; i < liste.length; i++) {
            let a = new A07_III.ArtikelClass(_liste[i].kathegorie, _liste[i].bild, _liste[i].name, _liste[i].beschreibung, _liste[i].beschreibeung2, _liste[i].beschreibung3, _liste[i].beschreibung4, _liste[i].preis, i);
            A07_III.listFinal.push(a);
        }
        aufbau(A07_III.listFinal);
    }
    function aufbau(_liste) {
        for (let i = 0; i < _liste.length; i++) {
            if (_liste[i].kathegorie == "Soziales") {
                const großVater = document.getElementById("soziales");
                _liste[i].div_erstellen("soziales", i, großVater);
            }
            if (_liste[i].kathegorie == "Technik") {
                const großVater = document.getElementById("technik");
                _liste[i].div_erstellen("technik", i, großVater);
            }
            if (_liste[i].kathegorie == "eine Person") {
                const großVater = document.getElementById("person");
                _liste[i].div_erstellen("person", i, großVater);
            }
            if (_liste[i].kathegorie == "mehrere Personen") {
                const großVater = document.getElementById("personen");
                _liste[i].div_erstellen("personen", i, großVater);
            }
        }
    }
    //A06 Teil 2
    let hideI = document.getElementById("showSoziales");
    if (hideI)
        hideI.addEventListener("click", hndl_hide);
    let hideII = document.getElementById("showTechnik");
    if (hideII)
        hideII.addEventListener("click", hndlII_hide);
    let hideIII = document.getElementById("showPersonen");
    if (hideIII)
        hideIII.addEventListener("click", hndlIII_hide);
    let hideIIII = document.getElementById("showPerson");
    if (hideIIII)
        hideIIII.addEventListener("click", hndlIIII_hide);
    let showAllI = document.getElementById("renew_I");
    if (showAllI)
        showAllI.addEventListener("click", hndl_showAll);
    let showAllII = document.getElementById("alles");
    if (showAllII)
        showAllII.addEventListener("click", hndl_showAll);
    function hndl_hide(_event) {
        for (let i = 0; i < A07_III.listFinal.length; i++)
            A07_III.listFinal[i].hndl_Hide("Soziales");
    }
    function hndlII_hide(_event) {
        for (let i = 0; i < A07_III.listFinal.length; i++)
            A07_III.listFinal[i].hndl_Hide("Technik");
    }
    function hndlIII_hide(_event) {
        for (let i = 0; i < A07_III.listFinal.length; i++)
            A07_III.listFinal[i].hndl_Hide("eine Person");
    }
    function hndlIIII_hide(_event) {
        for (let i = 0; i < A07_III.listFinal.length; i++)
            A07_III.listFinal[i].hndl_Hide("mehrere Personen");
    }
    function hndl_showAll(_event) {
        for (let i = 0; i < A07_III.listFinal.length; i++)
            A07_III.listFinal[i].hndl_Hide("alle");
    }
    function befindetSichBereitsWasImEinkaufswagen() {
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
//# sourceMappingURL=script_main.js.map