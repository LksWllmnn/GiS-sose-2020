"use strict";
var A11;
(function (A11) {
    let formData;
    let versenden = document.getElementById("NachrichtSenden1");
    versenden.addEventListener("click", hndl_senden);
    let versenden2 = document.getElementById("NachrichtSenden2");
    versenden2.addEventListener("click", hndl_senden_html);
    let allesLöschen = document.getElementById("terminieren");
    allesLöschen.addEventListener("click", hndl_terminieren);
    function hndl_senden() {
        serverf("https://testgissose2020lw.herokuapp.com/", "store");
        console.log(1.1);
    }
    function hndl_senden_html() {
        serverf("https://testgissose2020lw.herokuapp.com/", "retrive");
        console.log(2.1);
    }
    function hndl_terminieren() {
        serverf("https://testgissose2020lw.herokuapp.com/", "terminieren");
        console.log(3.1);
    }
    async function serverf(_url, _path) {
        formData = new FormData(document.forms[0]);
        let url = "" + _url;
        switch (_path) {
            case "store":
                url += "/store";
                console.log(1);
                break;
            case "retrive":
                url += "/retrive";
                console.log(2);
                break;
            case "terminieren":
                url += "/terminieren";
                console.log(3);
                break;
            default:
                url += "/store";
                break;
        }
        if (_path == "store") {
            // tslint:disable-next-line: no-any
            let query = new URLSearchParams(formData);
            url += "?" + query.toString();
            let antwort = await fetch(url);
            let antwortString = await antwort.text();
            //let what: string = JSON.parse(antwortString);
            console.log(antwort);
            console.log(antwortString);
            let ausgabeDiv = document.getElementById("Ausgabe");
            if (ausgabeDiv)
                ausgabeDiv.innerHTML = antwortString;
        }
        else if (_path == "retrive") {
            console.log("_path");
            let antwort = await fetch(url);
            let antwortString = await antwort.text();
            //console.log(antwort);
            //console.log(antwortString);
            let antwortanUser = await JSON.parse(antwortString);
            if (antwortanUser) {
                console.log(antwortanUser);
                verschicker(antwortanUser);
                let ausgabeDiv = document.getElementById("Ausgabe");
                if (ausgabeDiv)
                    ausgabeDiv.innerHTML = antwortString;
                //console.log(antwortString);
            }
        }
        else if (_path == "terminieren") {
            let antwort = await fetch(url);
            let antwortString = await antwort.text();
            console.log(antwortString);
        }
        else {
            console.log("Fehler");
        }
    }
    function verschicker(_daten) {
        console.log("weitergereicht");
        console.log(_daten.length);
        console.log(_daten[0].Anrede);
        for (let i = 0; i < _daten.length; i++) {
            bestätigung(_daten[i]);
            console.log("weitergereicht:");
        }
    }
    function bestätigung(_antwort) {
        console.log("in Methode");
        let kasten = document.createElement("div");
        let großvater = document.getElementById("Sprich1");
        if (großvater)
            großvater.appendChild(kasten);
        let tabelle = document.createElement("table");
        kasten.appendChild(tabelle);
        let zeileÜ = document.createElement("tr");
        tabelle.appendChild(zeileÜ);
        let überschr = document.createElement("th");
        überschr.innerHTML = "Bestätigung";
        zeileÜ.appendChild(überschr);
        let überschr1 = document.createElement("th");
        überschr1.innerHTML = " ";
        zeileÜ.appendChild(überschr1);
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
})(A11 || (A11 = {}));
//# sourceMappingURL=communication.js.map