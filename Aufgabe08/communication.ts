namespace A08 {
    //https://testgissose2020lw.herokuapp.com/
    //https://gis-example.herokuapp.com/
    //Server.js
    let formData: FormData;
    let versenden: HTMLElement = <HTMLButtonElement>document.getElementById("NachrichtSenden");
    versenden.addEventListener("click", hndl_senden);

    function hndl_senden(): void {
        serverf("https://testgissose2020lw.herokuapp.com/");
    }

    async function serverf(_url: RequestInfo): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "" + _url;
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += url + "?" + query.toString();
        let antwort: Response = await fetch(url);
        let antwortanUser: String = await antwort.text();
        console.log(antwortanUser);
    
        
    }

    
} 