namespace A11 {
    let formData: FormData;
    let versenden: HTMLElement = <HTMLButtonElement>document.getElementById("NachrichtSenden1");
    versenden.addEventListener("click", hndl_senden);

    let versenden2: HTMLElement = <HTMLButtonElement>document.getElementById("NachrichtSenden2");
    versenden2.addEventListener("click", hndl_senden_html);

    let allesLöschen: HTMLElement = <HTMLButtonElement>document.getElementById("terminieren");
    allesLöschen.addEventListener("click", hndl_terminieren);

    function hndl_senden(): void {
        serverf("https://testgissose2020lw.herokuapp.com/", "store");
        console.log(1.1);
    }

    function hndl_senden_html(): void {
        serverf("https://testgissose2020lw.herokuapp.com/", "retrive");
        console.log(2.1);
    }

    function hndl_terminieren(): void {
        serverf("https://testgissose2020lw.herokuapp.com/", "terminieren");
        console.log(3.1);
    }
    
    async function serverf(_url: RequestInfo, _path: string): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "" + _url;
        switch (_path) {
            case "store":
                url += "store";
                console.log(1);
                break;
            case "retrive":
                url += "retrive";
                console.log(2);
                break;
            case "terminieren":
                url += "terminieren";
                console.log(3);
                break;
            default:
                url += "store";
                break;
        }

        if (_path == "store") {
            // tslint:disable-next-line: no-any
            let query: URLSearchParams = new URLSearchParams(<any>formData);
            url += "?" + query.toString();

            let antwort: Response = await fetch(url);
            let antwortString: string = await antwort.text();
            //let what: string = JSON.parse(antwortString);
            console.log(antwort);
            console.log(antwortString);
            let ausgabeDiv: HTMLDivElement = <HTMLDivElement> document.getElementById("Ausgabe");
            let renew: HTMLFormElement = <HTMLFormElement> document.getElementById("Sprich");
            renew.reset();
            if (ausgabeDiv)
                ausgabeDiv.innerHTML = antwortString;

        } else if (_path == "retrive") {
            console.log("_path");
            let antwort: Response = await fetch(url);
            let antwortString: string = await antwort.text();
            //console.log(antwort);
            //console.log(antwortString);
            let antwortanUser: Formular[] = await JSON.parse(antwortString);
            if (antwortanUser) {
                console.log(antwortanUser);
                verschicker(antwortanUser);
                let ausgabeDiv: HTMLElement = <HTMLElement> document.getElementById("Ausgabe");
                if (ausgabeDiv)
                    ausgabeDiv.innerHTML = antwortString;
                //console.log(antwortString);
            }

        } else if (_path == "terminieren") {
            let antwort: Response = await fetch (url);
            let antwortString: string =  await antwort.text();
            console.log(antwortString);

        } else {
            console.log("Fehler");
        }
    }

    //https://testgissose2020lw.herokuapp.com/
    //https://gis-example.herokuapp.com/
    //http://localhost:8100

    /*function hndl_senden_url(): void {
    serverh("http://localhost:8101");
    }*/

    interface Formular {
        id: String;
        Anrede: String;
        Name: String;
        VorName: String;
        Nachricht: String;
        Kontakt: String;
    }
 
    function verschicker (_daten: Formular[]): void {
        console.log("weitergereicht");
        console.log(_daten.length);
        console.log(_daten[0].Anrede);
        for (let i: number = 0; i < _daten.length ; i++) {
            bestätigung(_daten[i]);
            console.log("weitergereicht:");
        }
    }


    function bestätigung(_antwort: Formular): void {
        console.log("in Methode");
        let kasten: HTMLElement = document.createElement("div");
        let großvater: HTMLDivElement = <HTMLDivElement>document.getElementById("Sprich1");
        if (großvater)
            großvater.appendChild(kasten);

        let tabelle: HTMLTableElement = document.createElement("table");
        kasten.appendChild(tabelle);

        let zeileÜ: HTMLElement = document.createElement("tr");
        tabelle.appendChild(zeileÜ);

        let überschr: HTMLElement = document.createElement("th");
        überschr.innerHTML = "Bestätigung";
        zeileÜ.appendChild(überschr);

        let überschr1: HTMLElement = document.createElement("th");
        überschr1.innerHTML = " ";
        zeileÜ.appendChild(überschr1);

        let zeile1: HTMLElement = document.createElement("tr");
        tabelle.appendChild(zeile1);

        let anrede: HTMLElement = document.createElement("td");
        anrede.innerHTML = "Anrede:";
        zeile1.appendChild(anrede);

        let anredeRückm: HTMLElement = document.createElement("td");
        anredeRückm.innerHTML = "" + _antwort.Anrede;
        zeile1.appendChild(anredeRückm);

        let zeile2: HTMLElement = document.createElement("tr");
        tabelle.appendChild(zeile2);

        let name: HTMLElement = document.createElement("td");
        name.innerHTML = "Name:";
        zeile2.appendChild(name);

        let nameRückm: HTMLElement = document.createElement("td");
        nameRückm.innerHTML = "" + _antwort.Name;
        zeile2.appendChild(nameRückm);

        let zeile3: HTMLElement = document.createElement("tr");
        tabelle.appendChild(zeile3);

        let vorname: HTMLElement = document.createElement("td");
        vorname.innerHTML = "Vorname:";
        zeile3.appendChild(vorname);

        let vornameRückm: HTMLElement = document.createElement("td");
        vornameRückm.innerHTML = "" + _antwort.VorName;
        zeile3.appendChild(vornameRückm);

        let zeile4: HTMLElement = document.createElement("tr");
        tabelle.appendChild(zeile4);

        let nachricht: HTMLElement = document.createElement("td");
        nachricht.innerHTML = "Ihre Nachricht an uns:";
        zeile4.appendChild(nachricht);

        let nachrichtRückm: HTMLElement = document.createElement("td");
        nachrichtRückm.innerHTML = "" + _antwort.Nachricht;
        zeile4.appendChild(nachrichtRückm);

        let zeile5: HTMLElement = document.createElement("tr");
        tabelle.appendChild(zeile5);

        let email: HTMLElement = document.createElement("td");
        email.innerHTML = "Ihr EMail:";
        zeile5.appendChild(email);

        let emailRückm: HTMLElement = document.createElement("td");
        emailRückm.innerHTML = "" + _antwort.Kontakt;
        zeile5.appendChild(emailRückm);
    }
} 