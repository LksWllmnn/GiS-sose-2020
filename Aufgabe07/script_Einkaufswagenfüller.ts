namespace A07 {
    export let aufzählung: number = Number(localStorage.getItem("Einkaufswagen"));
    export let gesamtpreis: number = Number(localStorage.getItem("Gesamtpreis"));
    export let aufgezählt: ImEinkaufsWagen[] = [];
    
    //Ablauf
    listeBeginnen();
    auflisten();
    

    function listeBeginnen(): void {
        let ersteZeile: HTMLElement = document.createElement("tr");
        ersteZeile.id = "anfang";
        let großvater: HTMLElement = <HTMLElement>document.getElementById("derEinkaufBeginne");
        if (großvater)
        großvater.appendChild(ersteZeile);
        let stornoÜberschrift: HTMLElement = document.createElement("th");
        stornoÜberschrift.innerHTML = "Storno";
            
        let name: HTMLElement = document.createElement("th");
        name.innerHTML = "Artikel";
            
        let preis: HTMLElement = document.createElement("th");
        preis.innerHTML = "Preis";

        ersteZeile.appendChild(stornoÜberschrift);
        ersteZeile.appendChild(name);
        ersteZeile.appendChild(preis);
    }
    
    function auflisten(): void {
        for (let i: number = 1; i <= aufzählung; i++) {
            let a: ImEinkaufsWagen = new ImEinkaufsWagen(Number(localStorage.getItem("Preis" + i )), <string>localStorage.getItem("Artikel" + i ), i);
            a.einTrag(i);
            aufgezählt.push(a);
            console.log(aufgezählt);
        }
        listeBeenden(gesamtpreis);
    }

    export function listeBeenden(_gesamtpreis: number): void {
        let letzteZeile: HTMLElement = document.createElement("tr");
        letzteZeile.id = "ende";
        let großvater: HTMLElement = <HTMLElement>document.getElementById("derEinkaufBeginne");
        if (großvater)
        großvater.appendChild(letzteZeile);

        let stornoAlle: HTMLElement = document.createElement("td");
        let stornoButton: HTMLElement = document.createElement("button");
        stornoAlle.appendChild(stornoButton);
        stornoButton.addEventListener("click", hndl_entfernenAlle);
        stornoButton.innerHTML = "ALLE STORNOOOO!!";
            
        let name: HTMLElement = document.createElement("th");
        name.innerHTML = "Gesamtpreis:";
            
        let preis: HTMLElement = document.createElement("th");

        preis.innerHTML = "" + _gesamtpreis;

        letzteZeile.appendChild(stornoAlle);
        letzteZeile.appendChild(name);
        letzteZeile.appendChild(preis);
    }

    function hndl_entfernenAlle(_event: Event): void {
        for (let i: number = 0; i <= aufzählung; i++) {
            localStorage.removeItem("Gesamtpreis");
            localStorage.removeItem("Artikel" + i);
            localStorage.removeItem("Preis" + i);
            localStorage.removeItem("Einkaufswagen" + i);

            let listeLöschen: HTMLElement = <HTMLElement> document.getElementById("" + i);
            if (listeLöschen)
                listeLöschen.remove();
        }
        let ende: HTMLElement = <HTMLElement> document.getElementById("ende");
        if  (ende)
            ende.remove();
        let anfang: HTMLElement = <HTMLElement> document.getElementById("anfang");
        if (anfang)
            anfang.remove();
        listeBeginnen();
        listeBeenden(0);
    }
}