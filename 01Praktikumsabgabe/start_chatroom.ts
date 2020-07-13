namespace P01 {
///////////////////////////////////////////////////////////////////////////////////////////////
//globale Variabeln
///////////////////////////////////////////////////////////////////////////////////////////////
    export interface Chatting {
        id: string;
        login: string|null;
        nachricht: string;
    }
    export interface Members {
        id: string;
        login: string;
        passwort: string;
    }
    
    let angezeigteNachrichten: Chatting[] = [];


    let abmeldenKnopf: HTMLButtonElement = <HTMLButtonElement>document.getElementById("abmelden");
    abmeldenKnopf.addEventListener("click", hndl_abmelden);

    let senden: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Senden");
    senden.addEventListener("click", hndl_senden);

    let chatroom1: HTMLDivElement = <HTMLDivElement>document.getElementById("Chatroom1Change");
    if (localStorage.getItem("room") == "1")
        chatroom1.setAttribute("class", "activ");
    chatroom1.addEventListener("click", hndl_changeRoomto1);

    let chatroom2: HTMLDivElement = <HTMLDivElement>document.getElementById("Chatroom2Change");
    if (localStorage.getItem("room") == "2")
        chatroom2.setAttribute("class", "activ");
    chatroom2.addEventListener("click", hndl_changeRoomto2);

    let zweiteÜberschrift: HTMLElement = <HTMLElement>document.getElementById("aktuellerChatroom");
    //if (zweiteÜberschrift)
    zweiteÜberschrift.innerHTML = "Chatroom " + localStorage.getItem("room");

    /*let chatroomDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("drop");
    chatroomDiv.addEventListener("click", handle_drop);*/

///////////////////////////////////////////////////////////////////////////////////////////////
//Ablauf
///////////////////////////////////////////////////////////////////////////////////////////////
    main();
    function main(): void {
        if (localStorage.getItem("login") == null) {
            let anfang: boolean = window.confirm("bist du neu hier? \n >OK< zum anmelden \n >abbrechen< um dich einzuloggen, wenn du schonmal da warst");
            if (anfang)
                anmelden();
            else
                einloggen();
        }
        if (localStorage.getItem("room") == null)
            localStorage.setItem("room", "1");
        if (localStorage.getItem("login") != null && localStorage.getItem("login") != "" ) {
            communicate("load", "", "", "");
        }
        console.log(localStorage.getItem("login"));
        console.log(localStorage.getItem("room"));
        
        setInterval(aktualisieren, 5000);
    }
    
///////////////////////////////////////////////////////////////////////////////////////////////
//Funktionen
///////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////
        //Funktionseinheiten
        ///////////////////////////////////////////////////////////////////////////////////////
    /*function handle_drop(): void {
        let dropeinheit: HTMLDivElement = <HTMLDivElement>document.getElementById("dropinhalt");
        if
    }*/

    function aktualisieren(): void {
        communicate("load", "", "", "");
    }

    function hndl_changeRoomto1(): void {
        localStorage.setItem("room", "1");
        location.reload();
    }

    function hndl_changeRoomto2(): void {
        localStorage.setItem("room", "2");
        location.reload();
    }

    function anmelden(): void {
        let neuerBenutzername: string | null = window.prompt("Wie soll dein Chatname sein?");
        let neuespasswort: string | null = "";
        if (neuerBenutzername == "") {
            window.alert("du musst einen Benutzernamen eingeben!");
            anmelden();
        } else {
            neuespasswort = window.prompt("gebe dir ein Passwort welches du dir merken kannst!");
            while (neuespasswort == "") {
                neuespasswort = window.prompt("Gib dir ein Passwort! Mensch!!");
            }
        }
        communicate("signIn", "", neuerBenutzername, neuespasswort);
    }

    function einloggen(): void {
        //let einloggenGeklappt: boolean | Promise<boolean> = true;
        let alterBenutzername: string | null = window.prompt("Wie ist dein Chatname?");
        let altespasswort: string | null;
        while (alterBenutzername == null) {
            alterBenutzername = window.prompt("Safe nicht dein Benutzername...gib dein Benutzername ein!");
        }
        altespasswort = window.prompt("passwort!");
        while (altespasswort == null) {
            altespasswort = window.prompt("Wo ist dein Passwort? Des war es sicher nicht...gib mir dein Passwort jetzt!");
        }
        communicate("verifizieren", "", alterBenutzername, altespasswort);
        //if (!einloggenGeklappt) {
            //einloggenGeklappt = false;
        //}
        //localStorage.setItem("login", "" + alterBenutzername);
        //return einloggenGeklappt;
    }

    function converter(_nachricht: Chatting[]): void {
        if (_nachricht.length > angezeigteNachrichten.length) {
            for (let i: number = angezeigteNachrichten.length; i < _nachricht.length; i++)
                angezeigteNachrichten.push(_nachricht[i]);
            for (let i: number = angezeigteNachrichten.length - 1; i >= 0; i--) {
                let a: Nachricht = new Nachricht (angezeigteNachrichten[i].id, angezeigteNachrichten[i].login, angezeigteNachrichten[i].nachricht);
                a.anzeigen(i);
            }
        }
    }

    function converterPlatzhalter(_nachricht: Chatting[]): void {
        let a: Nachricht = new Nachricht (_nachricht[0].id, _nachricht[0].login, _nachricht[0].nachricht);
        a.anzeigen(0);
    }
     
    function hndl_abmelden(): void {
        localStorage.removeItem("login");
        location.reload();
    }

        ///////////////////////////////////////////////////////////////////////////////////////
        //Kommunikationseinheiten
        ///////////////////////////////////////////////////////////////////////////////////////

    function hndl_senden(): void {
        let zuverschicken: HTMLInputElement = <HTMLInputElement>document.getElementById("input");
        let aktuelleNachricht: string | null = zuverschicken.value;
        if (aktuelleNachricht != null && aktuelleNachricht != "" ) {
            communicate("send", aktuelleNachricht, "", "");
            console.log(aktuelleNachricht, localStorage.getItem("login"));
        }
    }

    async function send(_url: string): Promise<void> {
        await fetch(_url);
    }

    async function load(_url: string): Promise<void> {
        console.log("es wird geladen");
        let antwort: Response = await fetch(_url);
        let antwortString: string = await antwort.text();
        let antwortanUser: Chatting[] = await JSON.parse(antwortString);
        if (antwortString == "[]") {
            converterPlatzhalter([{"id": "000", "login": "keinChat", "nachricht": "noch hat niemand was geschrieben"}]);
        } else {
            converter(antwortanUser);
        }
    }

    async function comunicate_anmelden(_url: string, _benutzer: string | null): Promise <void> {
        let antwort: Response = await fetch(_url);
        let antwortString: string = await antwort.text();
        if (antwortString == "Anmeldung akzeptiert") {
            console.log("wir sind drin");
            localStorage.setItem("login", "" + _benutzer);
            communicate("load", "", "", "");
        }
        else {
            console.log("nichtgeklappt");
            window.alert("versuche einen anderen Nutzernamen");
            location.reload();
        }
        console.log(antwort);
    }
        
    async function comunicate_einloggen(_url: string, _benutzer: string | null): Promise <void>  {
        let antwort: Response = await fetch(_url);
        let antwortString: string = await antwort.text();
        
        if (antwortString == "Erfolgreich eingeloggt") {
            console.log("wir sind drin");
            localStorage.setItem("login", "" + _benutzer);
            communicate("load", "", "", "");
        } else {
            console.log("Einloggen nicht geklappt");
            window.alert("schau nochmal deinen benutzernamen und dein passwort nach");
            location.reload();
        }
    }

    function communicate (_function: string, _chatroomNachricht: string, _benutzer: string | null, _passwort: string | null): void {
        //http://localhost:8101
        let url: string = "https://testgissose2020lw.herokuapp.com";
        url += "/" + _function;

        switch (_function) {
            case "load":
                url += "/" + localStorage.getItem("room");
                load(url);
                break;
            case "send":
                url += "/" + localStorage.getItem("room");
                url += "?login=" + "" + localStorage.getItem("login") + "&nachricht=" + "" + _chatroomNachricht ;
                send(url);
                break;
            case "verifizieren":
                url += "?login=" + _benutzer + "&passwort" + _passwort;
                comunicate_einloggen(url, _benutzer);
                break;
            case "signIn":
                url += "?login=" + _benutzer + "&passwort" + _passwort;
                comunicate_anmelden(url, _benutzer);
                break;
            default:
                console.log("diese kommunikations-funktion gibt es nicht");
                break;
        }
    }
}