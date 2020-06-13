namespace A07 {
    export let gesamtpreis: number = 0;
    export let aufgezählt: ImEinkaufsWagen[] = [];

    //Ablauf
    listeBeginnen();
    auflisten();

    function auflisten(): void {
        for (let i: number = 0; i < localStorage.length; i++) {
            let aufbau: string = <string>localStorage.getItem(<string>localStorage.key(i));
            let aufbauString: string[] = aufbau.split(",");
            let name: string = aufbauString[0];
            let bild: string = aufbauString[1];
            let a: ImEinkaufsWagen = new ImEinkaufsWagen (Number(localStorage.key(i)), name, bild );
            gesamtpreis += a.preis;
            aufgezählt.push(a);
            a.einTrag(i);
        }
        listeBeenden(gesamtpreis);
        befindetSichBereitsWasImEinkaufswagenfürAlleAnderen()
    }
    

    function listeBeginnen(): void {
        let ersteZeile: HTMLElement = document.createElement("tr");
        ersteZeile.id = "anfang";
        let großvater: HTMLElement = <HTMLElement>document.getElementById("derEinkaufBeginne");
        if (großvater)
        großvater.appendChild(ersteZeile);
        let stornoÜberschrift: HTMLElement = document.createElement("th");
        stornoÜberschrift.innerHTML = "Storno";
        
        let bild: HTMLElement = document.createElement("th");
        bild.innerHTML = "Bild";

        let name: HTMLElement = document.createElement("th");
        name.innerHTML = "Artikel";
            
        let preis: HTMLElement = document.createElement("th");
        preis.innerHTML = "Preis";

        ersteZeile.appendChild(stornoÜberschrift);
        ersteZeile.appendChild(bild);
        ersteZeile.appendChild(name);
        ersteZeile.appendChild(preis);
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
            
        let platzhalter: HTMLElement = document.createElement("td");
        platzhalter.innerHTML = "";

        let name: HTMLElement = document.createElement("th");
        name.innerHTML = "Gesamtpreis:";
            
        let preis: HTMLElement = document.createElement("th");

        preis.innerHTML = "" + _gesamtpreis + " €";

        letzteZeile.appendChild(stornoAlle);
        letzteZeile.appendChild(platzhalter);
        letzteZeile.appendChild(name);
        letzteZeile.appendChild(preis);
    }

    function hndl_entfernenAlle(_event: Event): void {
        localStorage.clear();
        listeBeginnen();
        listeBeenden(0);
        location.reload();
    }

    function befindetSichBereitsWasImEinkaufswagenfürAlleAnderen(): void {
        if (localStorage.length > 0) {
            let elementListe: HTMLDivElement[] = <HTMLDivElement[]><unknown>document.getElementsByClassName("EinkaufswagenAnzeige");
            for (let i: number = 0; i < elementListe.length; i++) {
                if (elementListe[i]) {
                    elementListe[i].setAttribute("style", "visibility: visible");
                    elementListe[i].innerHTML = "" + localStorage.length;
                }
            }
        } else {
            let elementListe: HTMLDivElement[] = <HTMLDivElement[]><unknown>document.getElementsByClassName("EinkaufswagenAnzeige");
            for (let i: number = 0; i < elementListe.length; i++) {
                if (elementListe[i]) {
                    elementListe[i].setAttribute("style", "visibility: hidden");
                }
            }
        }
    }
}