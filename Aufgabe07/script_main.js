"use strict";
var A07;
(function (A07) {
    A07.rollband = 0;
    A07.einkUms = 0;
    A07.rollbandOver = 0;
    let liste = [];
    let listFinal = [];
    communicate("Liste.json");
    async function communicate(_url) {
        let response = await fetch(_url);
        liste = await response.json();
        converter(liste);
    }
    function converter(_liste) {
        for (let i = 0; i < liste.length; i++) {
            let a = new A07.ArtikelClass(_liste[i].kathegorie, _liste[i].bild, _liste[i].name, _liste[i].beschreibung, _liste[i].beschreibeung2, _liste[i].beschreibung3, _liste[i].beschreibung4, _liste[i].preis);
            listFinal.push(a);
        }
        aufbau(listFinal);
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
    let hideI = document.getElementById("hideTechnik");
    if (hideI)
        hideI.addEventListener("click", hndl_hide);
    let hideII = document.getElementById("hideSoziales");
    if (hideII)
        hideII.addEventListener("click", hndlII_hide);
    let hideIII = document.getElementById("hidePerson");
    if (hideIII)
        hideIII.addEventListener("click", hndlIII_hide);
    let hideIIII = document.getElementById("hidePersonen");
    if (hideIIII)
        hideIIII.addEventListener("click", hndlIIII_hide);
    let showAllI = document.getElementById("renew_I");
    if (showAllI)
        showAllI.addEventListener("click", hndl_showAll);
    let showAllII = document.getElementById("renew_II");
    if (showAllII)
        showAllII.addEventListener("click", hndl_showAll);
    function hndl_hide(_event) {
        for (let i = 0; i < listFinal.length; i++)
            listFinal[i].hndl_Hide("Technik");
    }
    function hndlII_hide(_event) {
        for (let i = 0; i < listFinal.length; i++)
            listFinal[i].hndl_Hide("Soziales");
    }
    function hndlIII_hide(_event) {
        for (let i = 0; i < listFinal.length; i++)
            listFinal[i].hndl_Hide("eine Person");
    }
    function hndlIIII_hide(_event) {
        for (let i = 0; i < listFinal.length; i++)
            listFinal[i].hndl_Hide("mehrere Personen");
    }
    function hndl_showAll(_event) {
        for (let i = 0; i < listFinal.length; i++)
            listFinal[i].hndl_Hide("alle sind da...jipieieieie!!");
    }
    function localStorageSpeicher(_name, _preis, _bild) {
        localStorage.setItem("" + _preis, "" + _name + "," + _bild);
        console.log(localStorage.length);
    }
    A07.localStorageSpeicher = localStorageSpeicher;
})(A07 || (A07 = {}));
//# sourceMappingURL=script_main.js.map