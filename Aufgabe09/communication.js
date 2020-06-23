"use strict";
var A09;
(function (A09) {
    //https://testgissose2020lw.herokuapp.com/
    //https://gis-example.herokuapp.com/
    //http://localhost:8100
    let formData;
    let versenden = document.getElementById("NachrichtSenden1");
    versenden.addEventListener("click", hndl_senden);
    let versenden2 = document.getElementById("NachrichtSenden2");
    versenden2.addEventListener("click", hndl_senden_html);
    let versenden3 = document.getElementById("NachrichtSenden3");
    versenden3.addEventListener("click", hndl_senden_url);
    function hndl_senden() {
        serverf("https://testgissose2020lw.herokuapp.com/");
    }
    function hndl_senden_html() {
        serverg("https://testgissose2020lw.herokuapp.com/");
    }
    function hndl_senden_url() {
        serverh("https://testgissose2020lw.herokuapp.com/");
    }
    async function serverf(_url) {
        formData = new FormData(document.forms[0]);
        let url = "" + _url;
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let antwort = await fetch(url);
        let antwortString = await antwort.text();
        let split = antwortString.split("|");
        let antwortAlert = split[0];
        let antwortanUser = JSON.parse(split[1]);
        if (antwort)
            bestätigung(antwortanUser);
        console.log(antwortanUser);
        alert(antwortAlert);
    }
    async function serverg(_url) {
        formData = new FormData(document.forms[0]);
        let url = "" + _url;
        url += "/html";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let antwort = await fetch(url);
        let antwortString = await antwort.text();
        let großvater = document.getElementById("Sprich");
        let füllung = document.createElement("pre");
        großvater.appendChild(füllung);
        füllung.innerHTML = antwortString;
    }
    async function serverh(_url) {
        formData = new FormData(document.forms[0]);
        let url = "" + _url;
        url += "/json";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let antwort = await fetch(url);
        let antwortString = await antwort.json();
        console.log(antwortString);
    }
    function bestätigung(_antwort) {
        let kasten = document.createElement("div");
        let großvater = document.getElementById("Sprich");
        if (großvater)
            großvater.appendChild(kasten);
        let tabelle = document.createElement("table");
        kasten.appendChild(tabelle);
        let zeileÜ = document.createElement("tr");
        tabelle.appendChild(zeileÜ);
        let überschr = document.createElement("th");
        überschr.innerHTML = "Bestätigung";
        zeileÜ.appendChild(überschr);
        /*let überschr1: HTMLElement = document.createElement("th");
        überschr1.innerHTML = " ";
        zeileÜ.appendChild(überschr1);*/
        let zeile1 = document.createElement("tr");
        tabelle.appendChild(zeile1);
        let anrede = document.createElement("td");
        anrede.innerHTML = "Anrede:";
        zeile1.appendChild(anrede);
        let anredeRückm = document.createElement("td");
        anredeRückm.innerHTML = "" + _antwort.Anrede;
        zeile1.appendChild(anredeRückm);
        let zeile2 = document.createElement("tr");
        tabelle.appendChild(zeile2);
        let name = document.createElement("td");
        name.innerHTML = "Name:";
        zeile2.appendChild(name);
        let nameRückm = document.createElement("td");
        nameRückm.innerHTML = "" + _antwort.Name;
        zeile2.appendChild(nameRückm);
        let zeile3 = document.createElement("tr");
        tabelle.appendChild(zeile3);
        let vorname = document.createElement("td");
        vorname.innerHTML = "Vorname:";
        zeile3.appendChild(vorname);
        let vornameRückm = document.createElement("td");
        vornameRückm.innerHTML = "" + _antwort.VorName;
        zeile3.appendChild(vornameRückm);
        let zeile4 = document.createElement("tr");
        tabelle.appendChild(zeile4);
        let nachricht = document.createElement("td");
        nachricht.innerHTML = "Ihre Nachricht an uns:";
        zeile4.appendChild(nachricht);
        let nachrichtRückm = document.createElement("td");
        nachrichtRückm.innerHTML = "" + _antwort.Nachricht;
        zeile4.appendChild(nachrichtRückm);
        let zeile5 = document.createElement("tr");
        tabelle.appendChild(zeile5);
        let email = document.createElement("td");
        email.innerHTML = "Ihr EMail:";
        zeile5.appendChild(email);
        let emailRückm = document.createElement("td");
        emailRückm.innerHTML = "" + _antwort.Kontakt;
        zeile5.appendChild(emailRückm);
    }
})(A09 || (A09 = {}));
//# sourceMappingURL=communication.js.map