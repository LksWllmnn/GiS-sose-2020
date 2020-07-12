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
    export let person: string|null = "";

    //let aktuellerChatverlauf: Chatting[];

    let abmeldenKnopf: HTMLButtonElement = <HTMLButtonElement>document.getElementById("abmelden");
    abmeldenKnopf.addEventListener("click", hndl_abmelden);

    let senden: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Senden");
    senden.addEventListener("click", hndl_senden);

    let chatroom1: HTMLDivElement = <HTMLDivElement>document.getElementById("Chatroom1Change");
    chatroom1.addEventListener("click", hndl_changeRoomto1);

    let chatroom2: HTMLDivElement = <HTMLDivElement>document.getElementById("Chatroom2Change");
    chatroom2.addEventListener("click", hndl_changeRoomto2);

///////////////////////////////////////////////////////////////////////////////////////////////
//Ablauf
///////////////////////////////////////////////////////////////////////////////////////////////
    main();
    function main(): void {
        if (localStorage.getItem("login") == null) {
            let anfang: boolean = window.confirm("bist du neu hier?");
            if (anfang)
                if (anmelden() )
                    window.alert("Sei gegrüßt im HFU Chat!");
                    
                else {
                    window.alert("Das Passwort oder der Benutzername existiert bereits");
                    location.reload();
                }
            else
                if (einloggen())
                    window.alert("Wilkommen zurück!");
                else {
                    window.alert("Das Passwort oder dein Benutzername stimmt nicht");
                    location.reload();
                }
        }
        if (localStorage.getItem("room") == null)
            localStorage.setItem("room", "1");
        communicate("load", "");
        //load(localStorage.getItem("room"));
        //load(localStorage.getItem("room"));
        console.log(localStorage.getItem("login"));
        console.log(localStorage.getItem("room"));
        
        //window.setTimeout(location.reload, 5000);
    }
    
///////////////////////////////////////////////////////////////////////////////////////////////
//Funktionen
///////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////
        //Funktionseinheiten
        ///////////////////////////////////////////////////////////////////////////////////////

    function hndl_changeRoomto1(): void {
        localStorage.setItem("room", "1");
        location.reload();
    }

    function hndl_changeRoomto2(): void {
        localStorage.setItem("room", "2");
        location.reload();
    }

    function anmelden(): boolean {
        let einloggenGeklappt: boolean = true;
        let neuerBenutzername: string | null = window.prompt("Wie soll dein Chatname sein?");
        let neuespasswort: string | null = "";
        if (neuerBenutzername == null) {
            window.alert("du musst einen Benutzernamen eingeben!");
            anmelden();
        } else {
            neuespasswort = window.prompt("gebe dir ein Passwort welches du dir merken kannst!");
            while (neuespasswort == null) {
                neuespasswort = window.prompt("Gib dir ein Passwort! Mensch!!");
            }
        }
        if (comunicate_anmelden(neuerBenutzername, neuespasswort)) {
            einloggenGeklappt = false;
        } else {
            member_einschreiben(neuerBenutzername, neuespasswort);
            localStorage.setItem("login", "" + neuerBenutzername);
        }
        return einloggenGeklappt;
    }

    function einloggen(): boolean {
        let einloggenGeklappt: boolean = true;
        let alterBenutzername: string | null = window.prompt("Wie ist dein Chatname?");
        let altespasswort: string | null;
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

    function converter(_nachricht: Chatting[]): void {
        for (let i: number = _nachricht.length - 1; i > 0; i--) {
            let a: Nachricht = new Nachricht (_nachricht[i].id, _nachricht[i].login, _nachricht[i].nachricht);
            a.anzeigen(i);
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
        if (aktuelleNachricht != null ) {
            communicate("send", aktuelleNachricht);
            console.log(aktuelleNachricht, localStorage.getItem("login"));
        }
    }

    async function send(_url: string): Promise<void> {
        //let url: string = "http://localhost:8101/send/" + _chatroom;
        //url += "?login=" + "" + _login + "&nachricht=" + "" + _aktuelleNachricht ;
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

    async function comunicate_anmelden(_neuerBenutzer: string | null, _neuesPasswort: string | null): Promise <boolean> {
        let benutzerVorhanden: boolean = false;
        let url: string = "http://localhost:8101/signIn";
        console.log("es wird angemeldet");
        url += "?login=" + "" + _neuerBenutzer + "&passwort=" + "" + _neuesPasswort ;
        let antwort: Response = await fetch(url);
        let antwortString: string = await antwort.text();
        let antwortanUser: Members[] = await JSON.parse(antwortString);
        console.log(antwort);
        for (let i: number = 0; i < antwortanUser.length; i++) {
            if (antwortanUser[i].login == _neuerBenutzer && antwortanUser[i].passwort == _neuesPasswort)
                benutzerVorhanden = true;
        }
        console.log(benutzerVorhanden);
        return benutzerVorhanden;
        
    }
        
    async function comunicate_einloggen(_alterBenutzer: string | null, _altesPasswort: string | null): Promise <boolean>  {
        let validierung: boolean = false;
        let url: string = "http://localhost:8101/verifizieren";
        console.log("es wird verifiziert");
        url += "?login=" + "" + _alterBenutzer + "&passwort=" + "" + _altesPasswort;

        let antwort: Response = await fetch(url);
        let antwortString: string = await antwort.text();
        let antwortanUser: Members[] = await JSON.parse(antwortString);
        for (let i: number = 0; i < antwortanUser.length; i++) {
            if (antwortanUser[i].login == _alterBenutzer && antwortanUser[i].passwort != _altesPasswort)
                validierung = false;
            else if (antwortanUser[i].login == _alterBenutzer && antwortanUser[i].passwort == _altesPasswort) {
                validierung = true;
                break;
            } else {
                validierung = false;
            }
        }
        return validierung;
    }

    async function member_einschreiben(_alterBenutzer: string | null, _altesPasswort: string | null): Promise <void>  {
        //window.alert("Wilkommen zurück " + _alterBenutzer + " dein Passwort ist " +  _altesPasswort);
        let url: string = "http://localhost:8101/einschreiben";
        console.log("es wird verifiziert");
        url += "?login=" + "" + _alterBenutzer + "&passwort=" + "" + _altesPasswort;

        let antwort: Response = await fetch(url);
        let antwortString: string = await antwort.text();
        console.log(antwortString);
    }

    function communicate (_function: string, _chatroomNachricht: string): void {
        let url: string = "http://localhost:8101";
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
            case "einloggen":
                break;
            case "anmelden":
                break;
            default:
                console.log("diese kommunikations-funktion gibt es nicht");
                break;
        }

    }
}