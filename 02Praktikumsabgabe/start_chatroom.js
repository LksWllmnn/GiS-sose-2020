"use strict";
var P02;
(function (P02) {
    let auswahlmodus = "";
    let angezeigteNachrichten = [];
    let abmeldenKnopf = document.getElementById("abmelden");
    abmeldenKnopf.addEventListener("click", hndl_abmelden);
    let senden = document.getElementById("Senden");
    senden.addEventListener("click", hndl_senden);
    let chatroom1 = document.getElementById("Chatroom1Change");
    if (localStorage.getItem("room") == "1")
        chatroom1.setAttribute("class", "activ");
    chatroom1.addEventListener("click", hndl_changeRoomto1);
    let chatroom2 = document.getElementById("Chatroom2Change");
    if (localStorage.getItem("room") == "2")
        chatroom2.setAttribute("class", "activ");
    chatroom2.addEventListener("click", hndl_changeRoomto2);
    let zweiteÜberschrift = document.getElementById("aktuellerChatroom");
    zweiteÜberschrift.innerHTML = "Chatroom " + localStorage.getItem("room");
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //Ablauf
    ///////////////////////////////////////////////////////////////////////////////////////////////
    main();
    function main() {
        if (localStorage.getItem("login") == null) {
            /*let anfang: boolean = window.confirm("bist du neu hier? \n >OK< zum anmelden \n >abbrechen< um dich einzuloggen, wenn du schonmal da warst");
            if (anfang)
                anmelden();
            else
                einloggen();*/
            promptersatz();
        }
        if (localStorage.getItem("room") == null)
            localStorage.setItem("room", "1");
        if (localStorage.getItem("login") != null && localStorage.getItem("login") != "") {
            communicate("load", "", "", "");
            console.log(localStorage.getItem("login"));
            console.log(localStorage.getItem("room"));
            setInterval(aktualisieren, 5000);
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //Funktionen
    ///////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////
    //Funktionseinheiten
    ///////////////////////////////////////////////////////////////////////////////////////
    function promptersatz() {
        console.log("wir sind in der funktion");
        let großvater = document.getElementById("Background");
        let schutz = document.createElement("div");
        schutz.id = "schutz";
        if (großvater)
            großvater.appendChild(schutz);
        if (localStorage.getItem("Name") == null) {
            schutz.setAttribute("display", "block");
        }
        else {
            schutz.setAttribute("display", "hidden");
        }
        if (auswahlmodus == "anmelden") {
            schutz.style.backgroundColor = "rgba(150, 76, 42, 0.8)";
        }
        if (auswahlmodus == "einloggen") {
            schutz.style.backgroundColor = "rgba(0, 253, 114, 0.8)";
        }
        if (auswahlmodus == "") {
            schutz.style.backgroundColor = "rgba(0, 255, 255, 0.8)";
        }
        let auswahl = document.createElement("div");
        auswahl.id = "asuwahlFlex";
        schutz.appendChild(auswahl);
        let anmeldenDiv = document.createElement("div");
        anmeldenDiv.id = "anmeldenDiv";
        anmeldenDiv.innerHTML = "hier klicken zum Erstenmal anmelden";
        anmeldenDiv.className = "auswahl";
        anmeldenDiv.addEventListener("click", hndl_anmelden);
        let einloggenDiv = document.createElement("div");
        einloggenDiv.id = "einloggenDiv";
        einloggenDiv.innerHTML = "hier klicken zum einloggen";
        einloggenDiv.className = "auswahl";
        einloggenDiv.addEventListener("click", hndl_einloggen);
        auswahl.appendChild(anmeldenDiv);
        auswahl.appendChild(einloggenDiv);
        let info = document.createElement("p");
        info.id = "info";
        if (auswahlmodus == "")
            info.innerHTML = "Wollen sie sich anmelden oder einloggen?";
        if (auswahlmodus != "")
            info.innerHTML = "Du willst dich gerade: " + auswahlmodus;
        schutz.appendChild(info);
        let eingabeDiv = document.createElement("div");
        eingabeDiv.id = "EingabeDiv";
        schutz.appendChild(eingabeDiv);
        let eingabeName = document.createElement("input");
        eingabeName.id = "eingabeName";
        eingabeName.setAttribute("placeholder", "Name!");
        let eingabepasswort = document.createElement("input");
        eingabepasswort.id = "eingabePasswort";
        eingabepasswort.setAttribute("placeholder", "Passwort!");
        let eingabeReinkommen = document.createElement("button");
        eingabeReinkommen.innerHTML = "lass mich Rein!";
        eingabeDiv.appendChild(eingabeName);
        eingabeDiv.appendChild(eingabepasswort);
        eingabeDiv.appendChild(eingabeReinkommen);
        eingabeReinkommen.addEventListener("click", hndl_einlasscheck);
    }
    function hndl_anmelden() {
        auswahlmodus = "anmelden";
        console.log(auswahlmodus);
        let background = document.getElementById("Background");
        let schutz = document.getElementById("schutz");
        background.removeChild(schutz);
        promptersatz();
    }
    function hndl_einloggen() {
        auswahlmodus = "einloggen";
        console.log(auswahlmodus);
        let background = document.getElementById("Background");
        let schutz = document.getElementById("schutz");
        background.removeChild(schutz);
        promptersatz();
    }
    function hndl_einlasscheck() {
        let nameInput = document.getElementById("eingabeName");
        let name = nameInput.value;
        let passwortInput = document.getElementById("eingabePasswort");
        let passwort = passwortInput.value;
        if (name == "" || name == null || name == undefined) {
            window.alert("Das ist kein zulässiger name! probier es erneut.");
            location.reload();
        }
        console.log(name);
        console.log(auswahlmodus);
        console.log(passwort);
        if (auswahlmodus == "einloggen")
            communicate("verifizieren", "", name, passwort);
        if (auswahlmodus == "anmelden")
            communicate("signIn", "", name, passwort);
    }
    /*function hndl_abmelden(): void {
        localStorage.removeItem("name");
        location.reload();
    }*/
    ///////////////////////////////////////////////////////////////////////////////////////
    function aktualisieren() {
        communicate("load", "", "", "");
    }
    function hndl_changeRoomto1() {
        localStorage.setItem("room", "1");
        location.reload();
    }
    function hndl_changeRoomto2() {
        localStorage.setItem("room", "2");
        location.reload();
    }
    /*function anmelden(): void {
        let neuerBenutzername: string | null = window.prompt("Wie soll dein Chatname sein?");
        let neuespasswort: string | null = "";
        while (neuerBenutzername == "" || neuerBenutzername == null) {
            neuerBenutzername = window.prompt("Diesen >>Namen<< kannst du nicht verwenden. Gib einen neuen ein!");
        }
        neuespasswort = window.prompt("gebe dir ein Passwort welches du dir merken kannst!");
        while (neuespasswort == "" || neuespasswort == null) {
            neuespasswort = window.prompt("Gib dir ein gescheites Passwort! Mensch!!");
        }
        communicate("signIn", "", neuerBenutzername, neuespasswort);
    }*/
    /*function einloggen(): void {
        let alterBenutzername: string | null = window.prompt("Wie ist dein Chatname?");
        let altespasswort: string | null;
        while (alterBenutzername == null || alterBenutzername == "") {
            alterBenutzername = window.prompt("Safe nicht dein Benutzername...gib dein Benutzername ein!");
        }
        altespasswort = window.prompt("passwort!");
        while (altespasswort == null || altespasswort == "") {
            altespasswort = window.prompt("Wo ist dein Passwort? Des war es sicher nicht...gib mir dein Passwort jetzt!");
        }
        communicate("verifizieren", "", alterBenutzername, altespasswort);
    }*/
    /*function converter(_nachricht: Chatting[]): void {
        console.log("es wird convertiert");
        if (_nachricht.length > angezeigteNachrichten.length) {
            for (let i: number = angezeigteNachrichten.length; i < _nachricht.length; i++)
                angezeigteNachrichten.push(_nachricht[i]);
            for (let i: number = angezeigteNachrichten.length - 1; i >= 0; i--) {
                let a: Nachricht = new Nachricht (angezeigteNachrichten[i]._id, angezeigteNachrichten[i].login, angezeigteNachrichten[i].nachricht);
                a.anzeigen(i);
            }
        }
    }*/
    /*function converterPlatzhalter(_nachricht: Chatting[]): void {
        let a: Nachricht = new Nachricht (_nachricht[0]._id, _nachricht[0].login, _nachricht[0].nachricht);
        a.anzeigen(0);
    }*/
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
        if (aktuelleNachricht != null && aktuelleNachricht != "") {
            communicate("send", aktuelleNachricht, "", "");
            console.log(aktuelleNachricht, localStorage.getItem("login"));
        }
    }
    async function send(_url) {
        await fetch(_url);
    }
    async function load(_url) {
        console.log("es wird geladen");
        let antwort = await fetch(_url);
        let antwortString = await antwort.text();
        let antwortanUser = await JSON.parse(antwortString);
        if (antwortString == "[]") {
            //converterPlatzhalter([{"_id": "000", "login": "keinChat", "nachricht": "noch hat niemand was geschrieben"}]);
        }
        else {
            console.log("es wird convertiert");
            if (antwortanUser.length > angezeigteNachrichten.length) {
                let altelänge = angezeigteNachrichten.length;
                for (let i = angezeigteNachrichten.length; i < antwortanUser.length; i++)
                    angezeigteNachrichten.push(antwortanUser[i]);
                for (let i = altelänge; i <= antwortanUser.length; i++) { //let i: number = angezeigteNachrichten.length - 1; i >= angezeigteNachrichten.length - dazukommend; i--
                    let a = new P02.Nachricht(angezeigteNachrichten[i]._id, angezeigteNachrichten[i].login, angezeigteNachrichten[i].nachricht);
                    a.anzeigen(i);
                }
            }
        }
    }
    async function comunicate_anmelden(_url, _benutzer) {
        let antwort = await fetch(_url);
        let antwortString = await antwort.text();
        if (antwortString == "Anmeldung akzeptiert") {
            console.log("wir sind drin");
            localStorage.setItem("login", "" + _benutzer);
            location.reload();
            communicate("load", "", "", "");
        }
        else {
            console.log("nichtgeklappt");
            window.alert("versuche einen anderen Nutzernamen");
            location.reload();
        }
        console.log(antwort);
    }
    async function comunicate_einloggen(_url, _benutzer) {
        let antwort = await fetch(_url);
        let antwortString = await antwort.text();
        if (antwortString == "Erfolgreich eingeloggt") {
            console.log("wir sind drin");
            localStorage.setItem("login", "" + _benutzer);
            location.reload();
            communicate("load", "", "", "");
        }
        else {
            console.log("Einloggen nicht geklappt");
            window.alert("schau nochmal deinen benutzernamen und dein passwort nach");
            location.reload();
        }
    }
    function communicate(_function, _chatroomNachricht, _benutzer, _passwort) {
        //http://localhost:8101 | https://testgissose2020lw.herokuapp.com
        let url = "https://testgissose2020lw.herokuapp.com";
        url += "/" + _function;
        switch (_function) {
            case "load":
                url += "/" + localStorage.getItem("room");
                load(url);
                break;
            case "send":
                url += "/" + localStorage.getItem("room");
                url += "?login=" + "" + localStorage.getItem("login") + "&nachricht=" + "" + _chatroomNachricht;
                send(url);
                break;
            case "verifizieren":
                url += "?login=" + _benutzer + "&passwort=" + _passwort;
                comunicate_einloggen(url, _benutzer);
                break;
            case "signIn":
                url += "?login=" + _benutzer + "&passwort=" + _passwort;
                comunicate_anmelden(url, _benutzer);
                break;
            default:
                console.log("diese kommunikations-funktion gibt es nicht");
                break;
        }
    }
})(P02 || (P02 = {}));
//# sourceMappingURL=start_chatroom.js.map