namespace A07 {
    
    let rollband: number = 0;
    let myJSONRollband: string = JSON.stringify(rollband);
    export let rollbandOver: number = JSON.parse(myJSONRollband);
    
    export let einkUms: number = 0;

    for (let i: number = 0; i < liste.length; i++) {
        if (liste[i].kathegorie == "Soziales") {
            const großVater: HTMLElement = document.getElementById("soziales") as HTMLElement;
            liste[i].div_erstellen("soziales", i, großVater);
        }
        if (liste[i].kathegorie == "Technik") {
            const großVater: HTMLElement = document.getElementById("technik") as HTMLElement;
            liste[i].div_erstellen("technik", i, großVater);
        }
        if (liste[i].kathegorie == "eine Person") {
            const großVater: HTMLElement = document.getElementById("person") as HTMLElement;
            liste[i].div_erstellen("person", i, großVater);
        }
        if (liste[i].kathegorie == "mehrere Personen") {
            const großVater: HTMLElement = document.getElementById("personen") as HTMLElement;
            liste[i].div_erstellen("personen", i, großVater);
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
        for (let i: number = 0; i < liste.length; i++) 
            liste[i].hndl_Hide("Technik");
    }

    function hndlII_hide(_event: Event): void {
        for (let i: number = 0; i < liste.length; i++) 
            liste[i].hndl_Hide("Soziales");
    }

    function hndlIII_hide(_event: Event): void {
        for (let i: number = 0; i < liste.length; i++) 
            liste[i].hndl_Hide("eine Person");
    }

    function hndlIIII_hide(_event: Event): void {
        for (let i: number = 0; i < liste.length; i++) 
            liste[i].hndl_Hide("mehrere Personen");
    }

    function hndl_showAll(_event: Event): void {
        for (let i: number = 0; i < liste.length; i++) 
            liste[i].hndl_Hide("alle sind da...jipieieieie!!");
    }

    //A07 Teilaufgabe 2
    for (let i: number = 0; i < einkaufArtikelAnzeige.length; i++) {
        einkaufArtikelAnzeige[i].einTrag();
    }
}