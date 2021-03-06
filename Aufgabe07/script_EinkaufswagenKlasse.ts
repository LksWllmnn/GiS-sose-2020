namespace A07 {
    export class ImEinkaufsWagen {
        preis: number;
        name: string;
        position: number;
        bild: string;
        anzahl: number;
        
        constructor(_preis: number, _name: string, _bild: string) {
            this.preis = _preis;
            this.name = _name;
            this.bild = _bild;
            this.anzahl = 1;
        }

        einTrag(_position: number): void {
            this.position = _position;
            let einkauf: HTMLElement = document.createElement("tr");
            einkauf.id = "" + this.position;
            let großvater: HTMLElement = <HTMLElement>document.getElementById("derEinkaufBeginne");
            if (großvater)
                großvater.appendChild(einkauf);
            
            let storno: HTMLElement = document.createElement("td");
            einkauf.appendChild(storno);
            let stornoButton: HTMLElement = document.createElement("button");
            storno.appendChild(stornoButton);
            stornoButton.innerHTML = "weg d'mit!";
            stornoButton.setAttribute("Position", "" + _position);
            stornoButton.addEventListener("click", this.hndl_entfernen.bind(this));

            let stück: HTMLElement = document.createElement("td");
            einkauf.appendChild(stück);
            let stückinp: HTMLElement = document.createElement("input");
            stückinp.id = "value" + _position; 
            stück.appendChild(stückinp);
            stückinp.setAttribute("placeholder", "" + this.anzahl);
            stückinp.addEventListener("input", this.hndl_anzahlVerändern.bind(this));

            let bildRahmen: HTMLElement = document.createElement("td");
            bildRahmen.setAttribute("class", "einkaufBildRahmen");
            einkauf.appendChild(bildRahmen);
            let bild: HTMLElement = document.createElement("img");
            bildRahmen.appendChild(bild);
            bild.setAttribute("src", "Bilder/" + this.bild);
            bild.setAttribute("class", "einkaufBild");
            bild.setAttribute("alt", "" + this.bild);
            
            let name: HTMLElement = document.createElement("td");
            name.innerHTML = this.name;
            
            let preis: HTMLElement = document.createElement("td");
            preis.innerHTML = "" + this.preis * this.anzahl + "€";

            einkauf.appendChild(name);
            einkauf.appendChild(preis);
        }

        hndl_entfernen(_event: Event): void {
            localStorage.removeItem("" + this.preis);
            let liElem: HTMLElement = <HTMLElement> document.getElementById("" + this.position);
            liElem.remove();
            gesamtpreis -= Number(this.preis.toFixed(2));
            listeBeenden(gesamtpreis);
            location.reload();
        }

        hndl_anzahlVerändern(_event: Event): void {
            let newAnzahlContainer: HTMLElement = <HTMLElement> document.getElementById("value" + this.position);
            if (newAnzahlContainer) {
                let newAnzahl: number = Number(newAnzahlContainer.nodeValue);
                if (newAnzahl)
                this.anzahl = newAnzahl;
            }
        }
    }
}