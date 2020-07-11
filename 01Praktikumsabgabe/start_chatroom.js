"use strict";
var P01;
(function (P01) {
    P01.person = "";
    let abmeldenKnopf = document.getElementById("abmelden");
    abmeldenKnopf.addEventListener("click", hndl_abmelden);
    let senden = document.getElementById("Senden");
    senden.addEventListener("click", hndl_senden);
    let chatroom1 = document.getElementById("Chatroom1Change");
    chatroom1.addEventListener("click", hndl_changeRoomto1);
    let chatroom2 = document.getElementById("Chatroom2Change");
    chatroom2.addEventListener("click", hndl_changeRoomto2);
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //Ablauf
    ///////////////////////////////////////////////////////////////////////////////////////////////
    main();
    function main() {
        if (localStorage.getItem("login") == null) {
            let anfang = window.confirm("bist du neu hier?");
            if (anfang)
                if (anmelden())
                    window.alert("Sei gegrüßt im HFU Chat!");
                else {
                    window.alert("Das Passwort oder der Benutzername existiert bereits");
                    location.reload();
                }
            else if (einloggen())
                window.alert("Wilkommen zurück!");
            else {
                window.alert("Das Passwort oder dein Benutzername stimmt nicht");
                location.reload();
            }
        }
        if (localStorage.getItem("room") == null)
            localStorage.setItem("room", "1");
        load(localStorage.getItem("room"));
        console.log(localStorage.getItem("login"));
        console.log(localStorage.getItem("room"));
        //setTimeout(load, 15000);
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //Funktionen
    ///////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////
    //Funktionseinheiten
    ///////////////////////////////////////////////////////////////////////////////////////
    /*function erkennung (): void {
            while (person == "") {
                person = prompt("gib deinen Namen ein");
                if (person != "") {
                    window.alert("Heelloo " + person);
                    localStorage.setItem("login", "" + person);
                } else {
                    window.alert("geben Sie einen Namen ein um zu chatten!");
                }
            }
    }*/
    function hndl_changeRoomto1() {
        localStorage.setItem("room", "1");
        location.reload();
    }
    function hndl_changeRoomto2() {
        localStorage.setItem("room", "2");
        location.reload();
    }
    function anmelden() {
        let einloggenGeklappt = true;
        let neuerBenutzername = window.prompt("Wie soll dein Chatname sein?");
        let neuespasswort = "";
        if (neuerBenutzername == null) {
            window.alert("du musst einen Benutzernamen eingeben!");
            anmelden();
        }
        else {
            neuespasswort = window.prompt("gebe dir ein Passwort welches du dir merken kannst!");
            while (neuespasswort == null) {
                neuespasswort = window.prompt("Gib dir ein Passwort! Mensch!!");
            }
        }
        if (comunicate_anmelden(neuerBenutzername, neuespasswort)) {
            einloggenGeklappt = false;
        }
        else {
            member_einschreiben(neuerBenutzername, neuespasswort);
            localStorage.setItem("login", "" + neuerBenutzername);
        }
        return einloggenGeklappt;
    }
    function einloggen() {
        let einloggenGeklappt = true;
        let alterBenutzername = window.prompt("Wie ist dein Chatname?");
        let altespasswort;
        while (alterBenutzername == null) {
            alterBenutzername = window.prompt("Safe nicht dein Benutzername...gib dein Benutzername ein!");
        }
        altespasswort = window.prompt("passwort!");
        while (altespasswort == null) {
            altespasswort = window.prompt("Wo ist dein Passwort? Des war es sicher nicht...gib mir dein Passwort jetzt!");
        }
        if (!comunicate_einloggen(alterBenutzername, altespasswort)) {
            einloggenGeklappt = false;
        }
        localStorage.setItem("login", "" + alterBenutzername);
        return einloggenGeklappt;
    }
    function converter(_nachricht) {
        for (let i = _nachricht.length - 1; i > 0; i--) {
            let a = new P01.Nachricht(_nachricht[i].id, _nachricht[i].login, _nachricht[i].nachricht);
            a.anzeigen(i);
        }
    }
    function converterPlatzhalter(_nachricht) {
        let a = new P01.Nachricht(_nachricht[0].id, _nachricht[0].login, _nachricht[0].nachricht);
        a.anzeigen(0);
    }
    function hndl_abmelden() {
        localStorage.removeItem("login");
        location.reload();
    }
    ///////////////////////////////////////////////////////////////////////////////////////
    //Kommunikationseinheiten
    ///////////////////////////////////////////////////////////////////////////////////////
    function hndl_senden() {
        let zuverschicken = document.getElementById("input");
        let aktuelleNachricht = zuverschicken.value;
        if (aktuelleNachricht != null) {
            send(aktuelleNachricht, localStorage.getItem("login"), localStorage.getItem("room"));
            console.log(aktuelleNachricht, localStorage.getItem("login"));
        }
    }
    async function send(_aktuelleNachricht, _login, _chatroom) {
        let url = "http://localhost:8101/send/" + _chatroom;
        url += "?login=" + "" + _login + "&nachricht=" + "" + _aktuelleNachricht;
        //console.log("es wird geladen");
        //console.log("ich bin am warten...");
        let antwort = await fetch(url);
        let antwortString = await antwort.text();
        console.log(antwortString);
        let antwortanUser = await JSON.parse(antwortString);
        console.log(antwort);
        if (antwortString == "[]") {
            converterPlatzhalter([{ "id": "000", "login": "keinChat", "nachricht": "noch hat niemand was geschrieben" }]);
        }
        else {
            converter(antwortanUser);
        }
    }
    async function load(_chatroom) {
        let url = "http://localhost:8101/load/" + _chatroom;
        console.log("es wird geladen");
        let antwort = await fetch(url);
        let antwortString = await antwort.text();
        //console.log(antwortString);
        let antwortanUser = await JSON.parse(antwortString);
        //console.log(antwort);
        if (antwortString == "[]") {
            //platzhalter();
            converterPlatzhalter([{ "id": "000", "login": "keinChat", "nachricht": "noch hat niemand was geschrieben" }]);
        }
        else {
            converter(antwortanUser);
        }
    }
    async function comunicate_anmelden(_neuerBenutzer, _neuesPasswort) {
        //window.alert("Hallo " + _neuerBenutzer + " dein Passwort ist" +  _neuesPasswort);
        let benutzerVorhanden = false;
        let url = "http://localhost:8101/signIn";
        console.log("es wird angemeldet");
        url += "?login=" + "" + _neuerBenutzer + "&passwort=" + "" + _neuesPasswort;
        let antwort = await fetch(url);
        let antwortString = await antwort.text();
        let antwortanUser = await JSON.parse(antwortString);
        console.log(antwort);
        for (let i = 0; i < antwortanUser.length; i++) {
            if (antwortanUser[i].login == _neuerBenutzer && antwortanUser[i].passwort == _neuesPasswort)
                benutzerVorhanden = true;
        }
        console.log(benutzerVorhanden);
        return benutzerVorhanden;
    }
    async function comunicate_einloggen(_alterBenutzer, _altesPasswort) {
        //window.alert("Wilkommen zurück " + _alterBenutzer + " dein Passwort ist " +  _altesPasswort);
        let validierung = false;
        let url = "http://localhost:8101/verifizieren";
        console.log("es wird verifiziert");
        url += "?login=" + "" + _alterBenutzer + "&passwort=" + "" + _altesPasswort;
        let antwort = await fetch(url);
        let antwortString = await antwort.text();
        let antwortanUser = await JSON.parse(antwortString);
        console.log(antwort);
        for (let i = 0; i < antwortanUser.length; i++) {
            if (antwortanUser[i].login == _alterBenutzer && antwortanUser[i].passwort != _altesPasswort)
                validierung = false;
            else if (antwortanUser[i].login == _alterBenutzer && antwortanUser[i].passwort == _altesPasswort) {
                validierung = true;
                break;
            }
            else {
                validierung = false;
            }
        }
        return validierung;
    }
    async function member_einschreiben(_alterBenutzer, _altesPasswort) {
        //window.alert("Wilkommen zurück " + _alterBenutzer + " dein Passwort ist " +  _altesPasswort);
        let url = "http://localhost:8101/einschreiben";
        console.log("es wird verifiziert");
        url += "?login=" + "" + _alterBenutzer + "&passwort=" + "" + _altesPasswort;
        let antwort = await fetch(url);
        let antwortString = await antwort.text();
        console.log(antwortString);
    }
})(P01 || (P01 = {}));
//# sourceMappingURL=start_chatroom.js.map