namespace A08 {
    //https://testgissose2020lw.herokuapp.com/
    //https://gis-example.herokuapp.com/
    //http://localhost:8100
    let formData: FormData;
    let versenden: HTMLElement = <HTMLButtonElement>document.getElementById("NachrichtSenden");
    versenden.addEventListener("click", hndl_senden);

    function hndl_senden(): void {
        serverf("https://testgissose2020lw.herokuapp.com/");
    }

    async function serverf(_url: RequestInfo): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "" + _url;
        url += "/Aufgabe08";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let antwort: Response = await fetch(url);
        let antwortanUser: String = await antwort.text();
        console.log(antwortanUser);
    
        
    }
} 