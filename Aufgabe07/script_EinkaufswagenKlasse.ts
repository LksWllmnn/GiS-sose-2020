namespace A07 {
    export class ImEinkaufsWagen {
        preis: number;
        name: string;
        position: number;
        
        constructor(_preis: number, _name: string, _position: number) {
            this.preis = _preis;
            this.name = _name;
            this.position = _position;
        }

        einTrag(_position: number): void {
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
            
            let name: HTMLElement = document.createElement("td");
            name.innerHTML = this.name;
            
            let preis: HTMLElement = document.createElement("td");
            preis.innerHTML = "" + this.preis + "€";

            einkauf.appendChild(name);
            einkauf.appendChild(preis);
        }

        hndl_entfernen(_event: Event): void {
            localStorage.removeItem("Artikel" + this.position);
            localStorage.removeItem("Preis" + this.position);
            localStorage.removeItem("Einkaufswagen" + this.position);
            let liElem: HTMLElement = <HTMLElement> document.getElementById("" + this.position);
            liElem.remove();
            let ende: HTMLElement = <HTMLElement> document.getElementById("ende");
            ende.remove();
            gesamtpreis -= Number(this.preis.toFixed(2));
            listeBeenden(gesamtpreis);

            delete aufgezählt[this.position];
            console.log(aufgezählt);
        }
    }
}