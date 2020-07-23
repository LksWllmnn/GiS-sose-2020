namespace P02 {
///////////////////////////////////////////////////////////////////////////////////////////////
//globale Variabeln
///////////////////////////////////////////////////////////////////////////////////////////////
    export interface Chatting {
        _id: string;
        login: string|null;
        nachricht: string;
    }
    export interface Members {
        id: string;
        login: string;
        passwort: string;
    }
    
    let auswahlmodus: string = "";

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
    zweiteÜberschrift.innerHTML = "Chatroom " + localStorage.getItem("room");

///////////////////////////////////////////////////////////////////////////////////////////////
//Ablauf
///////////////////////////////////////////////////////////////////////////////////////////////
    main();
    function main(): void {
        if (localStorage.getItem("login") == null) {
            promptersatz(); 
        }

        if (localStorage.getItem("room") == null)
            localStorage.setItem("room", "1");
        if (localStorage.getItem("login") != null && localStorage.getItem("login") != "" ) {
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

        //Einloggen/Anmelden vorgang
    function promptersatz(): void {
        
        console.log("wir sind in der funktion");
            
        let großvater: HTMLElement = <HTMLElement>document.getElementById("Background");
        let schutz: HTMLDivElement = document.createElement("div");
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
        if ( auswahlmodus == "") {
            schutz.style.backgroundColor = "rgba(0, 255, 255, 0.8)";
        }
    
        let auswahl: HTMLDivElement = document.createElement("div");
        auswahl.id = "asuwahlFlex";
        schutz.appendChild(auswahl);
    
        let anmeldenDiv: HTMLDivElement = document.createElement("div");
        anmeldenDiv.id = "anmeldenDiv";
        anmeldenDiv.innerHTML = "hier klicken zum Erstenmal anmelden";
        anmeldenDiv.className = "auswahl";
        anmeldenDiv.addEventListener("click", hndl_anmelden);
    
    
        let einloggenDiv: HTMLDivElement = document.createElement("div");
        einloggenDiv.id = "einloggenDiv";
        einloggenDiv.innerHTML = "hier klicken zum einloggen";
        einloggenDiv.className = "auswahl";
        einloggenDiv.addEventListener("click", hndl_einloggen);
    
        auswahl.appendChild(anmeldenDiv);
        auswahl.appendChild(einloggenDiv);
    
        let info: HTMLParagraphElement = document.createElement("p");
        info.id = "info";
        if (auswahlmodus == "")
            info.innerHTML = "Wollen sie sich anmelden oder einloggen?";
        if (auswahlmodus != "")
            info.innerHTML = "Du willst dich gerade: " + auswahlmodus;
        schutz.appendChild(info);
    
        let eingabeDiv: HTMLDivElement = document.createElement("div");
        eingabeDiv.id = "EingabeDiv";
        schutz.appendChild(eingabeDiv);
        let eingabeName: HTMLInputElement = document.createElement("input"); 
        eingabeName.id = "eingabeName";
        eingabeName.setAttribute("placeholder", "Name!");
        let eingabepasswort: HTMLInputElement = document.createElement("input"); 
        eingabepasswort.id = "eingabePasswort";
        eingabepasswort.setAttribute("placeholder", "Passwort!");
        let eingabeReinkommen: HTMLButtonElement = document.createElement("button");
        eingabeReinkommen.innerHTML = "lass mich Rein!";
        
        eingabeDiv.appendChild(eingabeName);
        eingabeDiv.appendChild(eingabepasswort);
        eingabeDiv.appendChild(eingabeReinkommen);
    
        eingabeReinkommen.addEventListener("click", hndl_einlasscheck);
    }
    
    function hndl_anmelden(): void {
        auswahlmodus = "anmelden";
        console.log(auswahlmodus);
        let background: HTMLDivElement = <HTMLDivElement>document.getElementById("Background");
        let schutz: HTMLDivElement = <HTMLDivElement>document.getElementById("schutz");
        //alter Schutz div wird gelöscht, neuer drüber gelegt
        background.removeChild(schutz);
        promptersatz();
    }
    
    function hndl_einloggen(): void {
        auswahlmodus = "einloggen";
        console.log(auswahlmodus);
        let background: HTMLDivElement = <HTMLDivElement>document.getElementById("Background");
        let schutz: HTMLDivElement = <HTMLDivElement>document.getElementById("schutz");
        //alter Schutz div wird gelöscht, neuer drüber gelegt
        background.removeChild(schutz);
        promptersatz();
    }
    
    function hndl_einlasscheck(): void {
        let nameInput: HTMLInputElement = <HTMLInputElement>document.getElementById("eingabeName");
        let name: string = nameInput.value;
        let passwortInput: HTMLInputElement = <HTMLInputElement>document.getElementById("eingabePasswort");
        let passwort: string = passwortInput.value;        
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

        ///////////////////////////////////////////////////////////////////////////////////////
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
            //converterPlatzhalter([{"_id": "000", "login": "keinChat", "nachricht": "noch hat niemand was geschrieben"}]);
        } else {
            if (antwortanUser.length > angezeigteNachrichten.length) {
                let altelänge: number = angezeigteNachrichten.length;
                for (let i: number = angezeigteNachrichten.length; i < antwortanUser.length; i++)
                    angezeigteNachrichten.push(antwortanUser[i]);
                for (let i: number = altelänge; i <= antwortanUser.length; i++) {      //let i: number = angezeigteNachrichten.length - 1; i >= angezeigteNachrichten.length - dazukommend; i--
                    let a: Nachricht = new Nachricht (angezeigteNachrichten[i]._id, angezeigteNachrichten[i].login, angezeigteNachrichten[i].nachricht);
                    a.anzeigen(i);
                }
            }
        }
    }

    async function comunicate_anmelden(_url: string, _benutzer: string | null): Promise <void> {
        let antwort: Response = await fetch(_url);
        let antwortString: string = await antwort.text();
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
        
    async function comunicate_einloggen(_url: string, _benutzer: string | null): Promise <void>  {
        let antwort: Response = await fetch(_url);
        let antwortString: string = await antwort.text();
        
        if (antwortString == "Erfolgreich eingeloggt") {
            console.log("wir sind drin");
            localStorage.setItem("login", "" + _benutzer);
            location.reload();
            communicate("load", "", "", "");
        } else {
            console.log("Einloggen nicht geklappt");
            window.alert("schau nochmal deinen benutzernamen und dein passwort nach");
            location.reload();
        }
    }

    //hier werden alle URLs gebildet
    function communicate (_function: string, _chatroomNachricht: string, _benutzer: string | null, _passwort: string | null): void {
        //http://localhost:8101 | https://testgissose2020lw.herokuapp.com
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
}