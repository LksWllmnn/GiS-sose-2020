namespace A07 {
    export class ArtikelClass {
        kathegorie: string;
        bild: string;
        name: string;
        beschreibung1: string;
        beschreibung2: string;
        beschreibung3: string;
        beschreibung4: string;
        preis: number;
        eigenerKaschten: HTMLElement;

        constructor (_kathegorie: string , _bild: string, _name: string, _beschreibung: string, _beschreibung2: string, _beschreibung3: string, _beschreibung4: string, _preis: number ) {
            this.kathegorie = _kathegorie;
            this.bild = _bild;
            this.name = _name;
            this.beschreibung1 = _beschreibung;
            this.beschreibung2 = _beschreibung2;
            this.beschreibung3 = _beschreibung3;
            this.beschreibung4 = _beschreibung4;
            this.preis = _preis;
        }

        div_erstellen(_kat: string, _i: number, _großVater: HTMLElement): void {
            let kasten: HTMLElement = document.createElement("div");
            
            if (_großVater)
                _großVater.appendChild(kasten);
            kasten.id = _kat + "_" + _i;
            kasten.setAttribute("class", "ag");
            this.eigenerKaschten = kasten;

            this.bild_erstellen(kasten, _i);
            this.name_erstellen(kasten);
            this.ul_erstellen(kasten);
            this.preis_erstellen(kasten);
            this.knopf_erstellen(kasten);
        }

        bild_erstellen (_vater: HTMLElement, _i: number): void {
            let bild: HTMLElement = document.createElement("img");
            bild.setAttribute("src", "Bilder/" + this.bild);
            bild.setAttribute("alt", "ag1_" + _i);
            _vater.appendChild(bild);
        }

        name_erstellen (_vater: HTMLElement): void {
            let artName: HTMLElement = document.createElement("h3");
            _vater.appendChild(artName);
            artName.innerHTML = "" + this.name;
        }

        ul_erstellen (_vater: HTMLElement): void {
            let liste: HTMLElement = document.createElement("ul");
            _vater.appendChild(liste);

            for (let i: number = 0; i <= 4; i++)
                this.beschreib_erstellen(liste, i);
        }

        beschreib_erstellen (_liste: HTMLElement, _i: number): void {
            let beschreib: HTMLElement = document.createElement("li");
            _liste.appendChild(beschreib);
            switch (_i) {
                case 1: beschreib.innerHTML = this.beschreibung1;
                        break;
                case 2: beschreib.innerHTML = this.beschreibung2;
                        break;
                case 3: beschreib.innerHTML = this.beschreibung3;
                        break;
                case 4: beschreib.innerHTML = this.beschreibung4;
                        break;
            }
        }

        preis_erstellen (_vater: HTMLElement): void {
            let price: HTMLElement = document.createElement("p");
            price.setAttribute("class", "Preis");
            _vater.appendChild(price);
            price.innerHTML = "" + this.preis + " €";
        }

        knopf_erstellen (_vater: HTMLElement): void {
            let knopf: HTMLElement = document.createElement("button");
            knopf.innerHTML = "In den Einkaufswagen";
            _vater.appendChild(knopf);
            knopf.addEventListener("click", this.hndl_Einkauf.bind(this));
        }

        //A06 Teilaufgabe 1
        hndl_Einkauf(_event: Event): void {
            if (window.confirm("bisch sicher dass '" + this.name + "' brauchsch?...")) {
                rollbandOver++;
                let einkaufsWagen: HTMLElement = <HTMLElement>document.getElementById("imEinkaufswagen");
                let einkaufsWagenII: HTMLElement = <HTMLElement>document.getElementById("imEinkaufswagenII");
            
                if (rollbandOver != 0) {
                    if (einkaufsWagen) {
                        einkaufsWagen.setAttribute("style", "visibility: visible");
                        einkaufsWagen.innerHTML = "" + rollbandOver;
                    }
                    if (einkaufsWagenII) {
                        einkaufsWagenII.setAttribute("style", "visibility: visible");
                        einkaufsWagenII.innerHTML = "" + rollbandOver;
                    }
                }

                window.alert("...na dann");
                einkUms += this.preis;
                localStorageSpeicher(this.name, this.preis, rollbandOver, einkUms);

                console.log("im Warenkorb befinden sich Artike im stabilen Wert von: " + einkUms + " €");
            } else {
                window.alert("besser is es!");
            } 
        }

        //A06 Teilaufgabe 2
        hndl_Hide(ansage: string): void {
            if (ansage == this.kathegorie)
                this.eigenerKaschten.setAttribute("style", "display: none");
            else
                this.eigenerKaschten.setAttribute("style", "display: block");
        }

        //A07 Teilaufgabe 2
    }
}