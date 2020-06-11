namespace A07 {
    export let rollband: number = 0;
    export let einkUms: number = 0;
    export let rollbandOver: number = 0;
    let liste: Artikel[] = [];
    let listFinal: ArtikelClass[] = [];

    communicate("Liste.json");

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        liste = await response.json();
        converter(liste);
    }

    function converter(_liste: Artikel[]): void {
        
        for (let i: number = 0; i < liste.length; i++) {
            let a: ArtikelClass = new ArtikelClass (_liste[i].kathegorie, _liste[i].bild, _liste[i].name, _liste[i].beschreibung , _liste[i].beschreibeung2, _liste[i].beschreibung3, _liste[i].beschreibung4, _liste[i].preis);
            listFinal.push(a);
        }
        aufbau(listFinal);
    }

    function aufbau(_liste: ArtikelClass[]): void {
        for (let i: number = 0; i < _liste.length; i++) {
            if (_liste[i].kathegorie == "Soziales") {
                const großVater: HTMLElement = document.getElementById("soziales") as HTMLElement;
                _liste[i].div_erstellen("soziales", i, großVater);
            }
            if (_liste[i].kathegorie == "Technik") {
                const großVater: HTMLElement = document.getElementById("technik") as HTMLElement;
                _liste[i].div_erstellen("technik", i, großVater);
            }
            if (_liste[i].kathegorie == "eine Person") {
                const großVater: HTMLElement = document.getElementById("person") as HTMLElement;
                _liste[i].div_erstellen("person", i, großVater);
            }
            if (_liste[i].kathegorie == "mehrere Personen") {
                const großVater: HTMLElement = document.getElementById("personen") as HTMLElement;
                _liste[i].div_erstellen("personen", i, großVater);
            }
        }
    }

    //A06 Teil 2
    let hideI: HTMLElement = <HTMLElement>document.getElementById("hideTechnik");
    if (hideI)
    hideI.addEventListener("click", hndl_hide);

    let hideII: HTMLElement = <HTMLElement>document.getElementById("hideSoziales");
    if (hideII)
    hideII.addEventListener("click", hndlII_hide);

    let hideIII: HTMLElement = <HTMLElement>document.getElementById("hidePerson");
    if (hideIII)
    hideIII.addEventListener("click", hndlIII_hide);

    let hideIIII: HTMLElement = <HTMLElement>document.getElementById("hidePersonen");
    if (hideIIII)
    hideIIII.addEventListener("click", hndlIIII_hide);

    let showAllI: HTMLElement = <HTMLElement>document.getElementById("renew_I");
    if (showAllI)
    showAllI.addEventListener("click", hndl_showAll);
    let showAllII: HTMLElement = <HTMLElement>document.getElementById("renew_II");
    if (showAllII)
    showAllII.addEventListener("click", hndl_showAll);

    function hndl_hide(_event: Event): void {
        for (let i: number = 0; i < listFinal.length; i++) 
            listFinal[i].hndl_Hide("Technik");
    }

    function hndlII_hide(_event: Event): void {
        for (let i: number = 0; i < listFinal.length; i++) 
            listFinal[i].hndl_Hide("Soziales");
    }

    function hndlIII_hide(_event: Event): void {
        for (let i: number = 0; i < listFinal.length; i++) 
            listFinal[i].hndl_Hide("eine Person");
    }

    function hndlIIII_hide(_event: Event): void {
        for (let i: number = 0; i < listFinal.length; i++) 
            listFinal[i].hndl_Hide("mehrere Personen");
    }

    function hndl_showAll(_event: Event): void {
        for (let i: number = 0; i < listFinal.length; i++) 
            listFinal[i].hndl_Hide("alle sind da...jipieieieie!!");
    }

    
    export function localStorageSpeicher(_name: string, _preis: number, _bild: string): void {
        localStorage.setItem("" + _preis, "" + _name + "," + _bild);
        console.log(localStorage.length);
    }
}