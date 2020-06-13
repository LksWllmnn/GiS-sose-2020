namespace A07_III {
    export let gesamtpreis: number = 0;
    export let aufgezählt: ImEinkaufsWagen[] = [];
    let liste: Artikel[] = [];
    

    //Ablauf
    listeBeginnen();

    communicate("Liste.json");
    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        liste = await response.json();
        befindetSichBereitsWasImEinkaufswagenfürAlleAnderen();
        converter(liste);
    }

    function converter(_liste: Artikel[]): void {
        for (let i: number = 0; i < localStorage.length; i++) {
            let number: number = Number(localStorage.key(i));
            let a: ImEinkaufsWagen = new ImEinkaufsWagen (_liste[number].preis, _liste[number].name, _liste[number].bild, Number(localStorage.getItem(<string>localStorage.key(i))), number );
            gesamtpreis += a.preis;
            a.einTrag(i);
            aufgezählt.push(a);
        }
        listeBeenden(gesamtpreis);
    }
    

    function listeBeginnen(): void {
        let ersteZeile: HTMLElement = document.createElement("tr");
        ersteZeile.id = "anfang";
        let großvater: HTMLElement = <HTMLElement>document.getElementById("derEinkaufBeginne");
        if (großvater)
        großvater.appendChild(ersteZeile);
        let stornoÜberschrift: HTMLElement = document.createElement("th");
        stornoÜberschrift.innerHTML = "Storno";

        let stück: HTMLElement = document.createElement("th");
        stück.innerHTML = "Anzahl";
        
        let bild: HTMLElement = document.createElement("th");
        bild.innerHTML = "Bild";

        let name: HTMLElement = document.createElement("th");
        name.innerHTML = "Artikel";
            
        let preis: HTMLElement = document.createElement("th");
        preis.innerHTML = "€€€Preis€€€";

        ersteZeile.appendChild(stornoÜberschrift);
        ersteZeile.appendChild(stück);
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
          
        let platzhalterI: HTMLElement = document.createElement("td");
        platzhalterI.innerHTML = "";

        let platzhalterII: HTMLElement = document.createElement("td");
        platzhalterII.innerHTML = "";

        let name: HTMLElement = document.createElement("th");
        name.innerHTML = "Gesamtpreis:";
            
        let preis: HTMLElement = document.createElement("th");

        preis.innerHTML = "" + _gesamtpreis + " €";

        letzteZeile.appendChild(stornoAlle);
        letzteZeile.appendChild(platzhalterI);
        letzteZeile.appendChild(platzhalterII);
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