namespace A09 {
    //https://testgissose2020lw.herokuapp.com/
    //https://gis-example.herokuapp.com/
    //http://localhost:8100
    let formData: FormData;
    let versenden: HTMLElement = <HTMLButtonElement>document.getElementById("NachrichtSenden1");
    versenden.addEventListener("click", hndl_senden);

    let versenden2: HTMLElement = <HTMLButtonElement>document.getElementById("NachrichtSenden2");
    versenden2.addEventListener("click", hndl_senden_html);

    let versenden3: HTMLElement = <HTMLButtonElement>document.getElementById("NachrichtSenden3");
    versenden3.addEventListener("click", hndl_senden_url);

    function hndl_senden(): void {
        serverf("http://localhost:8101");
    }

    function hndl_senden_html(): void {
        serverg("http://localhost:8101");
    }

    function hndl_senden_url(): void {
        serverh("http://localhost:8101");
    }

    interface Formular {
        Anrede: String;
        Name: String;
        VorName: String;
        Nachricht: String;
        Kontakt: String;
    }
    
    async function serverf(_url: RequestInfo): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "" + _url;
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let antwort: Response = await fetch(url);
        let antwortString: String = await antwort.text();
        let split: string[] = antwortString.split("|");
        let antwortAlert: String = split[0];
        let antwortanUser: Formular = JSON.parse(split[1]);
        if (antwort)
            bestätigung(antwortanUser);
        console.log(antwortanUser);
        alert(antwortAlert);
    }

    async function serverg(_url: RequestInfo): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "" + _url;
        url += "/html";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let antwort: Response = await fetch(url);
        let antwortString: string = await antwort.text();
        let großvater: HTMLDivElement = <HTMLDivElement>document.getElementById("Sprich");
        let füllung: HTMLPreElement = document.createElement("pre");
        großvater.appendChild(füllung);
        füllung.innerHTML = antwortString;
    }

    async function serverh(_url: RequestInfo): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "" + _url;
        url += "/json";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let antwort: Response = await fetch(url);
        let antwortString: string = await antwort.json();
        console.log(antwortString);
    }

    function bestätigung(_antwort: Formular): void {
        let kasten: HTMLElement = document.createElement("div");
        let großvater: HTMLDivElement = <HTMLDivElement>document.getElementById("Sprich");
        if (großvater)
            großvater.appendChild(kasten);

        let tabelle: HTMLTableElement = document.createElement("table");
        kasten.appendChild(tabelle);

        let zeileÜ: HTMLElement = document.createElement("tr");
        tabelle.appendChild(zeileÜ);

        let überschr: HTMLElement = document.createElement("th");
        überschr.innerHTML = "Bestätigung";
        zeileÜ.appendChild(überschr);

        /*let überschr1: HTMLElement = document.createElement("th");
        überschr1.innerHTML = " ";
        zeileÜ.appendChild(überschr1);*/

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