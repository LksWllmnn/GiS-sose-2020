"use strict";
var A07;
(function (A07) {
    let rollband = 0;
    let myJSONRollband = JSON.stringify(rollband);
    A07.rollbandOver = JSON.parse(myJSONRollband);
    A07.einkUms = 0;
    for (let i = 0; i < A07.liste.length; i++) {
        if (A07.liste[i].kathegorie == "Soziales") {
            const großVater = document.getElementById("soziales");
            A07.liste[i].div_erstellen("soziales", i, großVater);
        }
        if (A07.liste[i].kathegorie == "Technik") {
            const großVater = document.getElementById("technik");
            A07.liste[i].div_erstellen("technik", i, großVater);
        }
        if (A07.liste[i].kathegorie == "eine Person") {
            const großVater = document.getElementById("person");
            A07.liste[i].div_erstellen("person", i, großVater);
        }
        if (A07.liste[i].kathegorie == "mehrere Personen") {
            const großVater = document.getElementById("personen");
            A07.liste[i].div_erstellen("personen", i, großVater);
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
        for (let i = 0; i < A07.liste.length; i++)
            A07.liste[i].hndl_Hide("Technik");
    }
    function hndlII_hide(_event) {
        for (let i = 0; i < A07.liste.length; i++)
            A07.liste[i].hndl_Hide("Soziales");
    }
    function hndlIII_hide(_event) {
        for (let i = 0; i < A07.liste.length; i++)
            A07.liste[i].hndl_Hide("eine Person");
    }
    function hndlIIII_hide(_event) {
        for (let i = 0; i < A07.liste.length; i++)
            A07.liste[i].hndl_Hide("mehrere Personen");
    }
    function hndl_showAll(_event) {
        for (let i = 0; i < A07.liste.length; i++)
            A07.liste[i].hndl_Hide("alle sind da...jipieieieie!!");
    }
    //A07 Teilaufgabe 2
    for (let i = 0; i < A07.einkaufArtikelAnzeige.length; i++) {
        A07.einkaufArtikelAnzeige[i].einTrag();
    }
})(A07 || (A07 = {}));
//# sourceMappingURL=script_main.js.map