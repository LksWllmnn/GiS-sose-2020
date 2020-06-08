namespace A07 {

    export class ImEinkaufsWagen {
        preis: number;
        name: string;

        constructor(_preis: number, _name: string) {
            this.preis = _preis;
            this.name = _name;
        }

        einTrag(): void {
            let einkauf: HTMLElement = document.createElement("tr");
            let großvater: HTMLElement = <HTMLElement>document.getElementById("derEinkaufBeginne");
            großvater.appendChild(einkauf);
            
            let storno: HTMLElement = document.createElement("td");
            let stornoButton: HTMLElement = document.createElement("button");
            storno.appendChild(stornoButton);
            
            let name: HTMLElement = document.createElement("td");
            name.innerHTML = this.name;
            
            let preis: HTMLElement = document.createElement("td");
            preis.innerHTML = "" + this.preis + "€";

            einkauf.appendChild(storno);
            einkauf.appendChild(name);
            einkauf.appendChild(preis);
        }
    }
}