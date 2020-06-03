"use strict";
var A06_I;
(function (A06_I) {
    let rollband = 0;
    let einkUms = 0;
    for (let i = 0; i < A06_I.list.length; i++) {
        let kasten = document.createElement("div");
        kasten.setAttribute("class", "ag");
        if (A06_I.list[i].kathegorie == "Soziales") {
            let großVater = document.getElementById("soziales");
            großVater.appendChild(kasten);
            kasten.id = "soziales_" + i;
        }
        if (A06_I.list[i].kathegorie == "Technik") {
            let großVater = document.getElementById("technik");
            großVater.appendChild(kasten);
            kasten.id = "technik_" + i;
        }
        if (A06_I.list[i].kathegorie == "eine Person") {
            let großVater = document.getElementById("person");
            großVater.appendChild(kasten);
            kasten.id = "person_" + i;
        }
        if (A06_I.list[i].kathegorie == "mehrere Personen") {
            let großVater = document.getElementById("personen");
            großVater.appendChild(kasten);
            kasten.id = "personen_" + i;
        }
        let bild = document.createElement("img");
        bild.setAttribute("src", "Bilder/" + A06_I.list[i].bild);
        bild.setAttribute("alt", "ag1_" + i);
        kasten.appendChild(bild);
        let artName = document.createElement("h3");
        kasten.appendChild(artName);
        artName.innerHTML = "" + A06_I.list[i].name;
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
        price.innerHTML = "" + A06_I.list[i].preis + " €";
        let knopf = document.createElement("button");
        knopf.innerHTML = "In den Einkaufswagen";
        kasten.appendChild(knopf);
        knopf.addEventListener("click", hndl_Einkauf);
    }
    //A06 Teil 1
    function hndl_Einkauf(_event) {
        let geklickterKaschten = _event.target;
        let nameMeldung = "";
        if (geklickterKaschten.previousSibling?.previousSibling?.previousSibling?.firstChild?.textContent)
            nameMeldung = "" + geklickterKaschten.previousSibling?.previousSibling?.previousSibling?.firstChild?.textContent;
        if (window.confirm("bisch sicher dass " + nameMeldung + " brauchsch?...")) {
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
        let kastenId;
        for (let i = 0; i < A06_I.list.length; i++) {
            kastenId = "technik_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt = document.getElementById(kastenId);
                technikArt?.setAttribute("style", "display: none");
            }
        }
        for (let i = 0; i < A06_I.list.length; i++) {
            kastenId = "soziales_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt = document.getElementById(kastenId);
                technikArt?.setAttribute("style", "display: block");
            }
        }
    }
    function hndlII_hide(_event) {
        let kastenId;
        for (let i = 0; i < A06_I.list.length; i++) {
            kastenId = "soziales_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt = document.getElementById(kastenId);
                technikArt?.setAttribute("style", "display: none");
            }
        }
        for (let i = 0; i < A06_I.list.length; i++) {
            kastenId = "technik_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt = document.getElementById(kastenId);
                technikArt?.setAttribute("style", "display: block");
            }
        }
    }
    function hndlIII_hide(_event) {
        let kastenId;
        for (let i = 0; i < A06_I.list.length; i++) {
            kastenId = "person_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt = document.getElementById(kastenId);
                technikArt?.setAttribute("style", "display: none");
            }
        }
        for (let i = 0; i < A06_I.list.length; i++) {
            kastenId = "personen_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt = document.getElementById(kastenId);
                technikArt?.setAttribute("style", "display: block");
            }
        }
    }
    function hndlIIII_hide(_event) {
        let kastenId;
        for (let i = 0; i < A06_I.list.length; i++) {
            kastenId = "personen_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt = document.getElementById(kastenId);
                technikArt?.setAttribute("style", "display: none");
            }
        }
        for (let i = 0; i < A06_I.list.length; i++) {
            kastenId = "person_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt = document.getElementById(kastenId);
                technikArt?.setAttribute("style", "display: block");
            }
        }
    }
    function hndl_showAll(_event) {
        let kastenId;
        for (let i = 0; i < A06_I.list.length; i++) {
            kastenId = "personen_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt = document.getElementById(kastenId);
                technikArt?.setAttribute("style", "display: block");
            }
        }
        for (let i = 0; i < A06_I.list.length; i++) {
            kastenId = "person_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt = document.getElementById(kastenId);
                technikArt?.setAttribute("style", "display: block");
            }
        }
        for (let i = 0; i < A06_I.list.length; i++) {
            kastenId = "technik_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt = document.getElementById(kastenId);
                technikArt?.setAttribute("style", "display: block");
            }
        }
        for (let i = 0; i < A06_I.list.length; i++) {
            kastenId = "soziales_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt = document.getElementById(kastenId);
                technikArt?.setAttribute("style", "display: block");
            }
        }
    }
})(A06_I || (A06_I = {}));
//# sourceMappingURL=script_Ablauf.js.map