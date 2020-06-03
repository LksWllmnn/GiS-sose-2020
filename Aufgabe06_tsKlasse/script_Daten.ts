namespace A06_II {
    export class ArtikelClass {
        kathegorie: string;
        bild: string;
        name: string;
        beschreibung: string;
        beschreibung2: string;
        beschreibung3: string;
        beschreibung4: string;
        preis: number;
        eigenerKaschten: HTMLElement;

        constructor (kathegorie: string , bild: string, name: string, beschreibung: string, beschreibung2: string, beschreibung3: string, beschreibung4: string, preis: number ) {
            this.kathegorie = kathegorie;
            this.bild = bild;
            this.name = name;
            this.beschreibung = beschreibung;
            this.beschreibung2 = beschreibung2;
            this.beschreibung3 = beschreibung3;
            this.beschreibung4 = beschreibung4;
            this.preis = preis;
        }

        div_erstellen(kat: string, i: number): void {
            let kasten: HTMLElement = document.createElement("div");
            document.getElementById(kat)?.appendChild(kasten);
            kasten.id = kat + "_" + i;
            kasten.setAttribute("class", "ag");
            this.eigenerKaschten = kasten;

            this.bild_erstellen(kasten, i);
            this.name_erstellen(kasten);
            this.ul_erstellen(kasten);
            this.preis_erstellen(kasten);
            this.knopf_erstellen(kasten);
        }

        bild_erstellen (vater: HTMLElement, i: number): void {
            let bild: HTMLElement = document.createElement("img");
            bild.setAttribute("src", "Bilder/" + this.bild);
            bild.setAttribute("alt", "ag1_" + i);
            vater.appendChild(bild);
        }

        name_erstellen (vater: HTMLElement): void {
            let artName: HTMLElement = document.createElement("h3");
            vater.appendChild(artName);
            artName.innerHTML = "" + this.name;
        }

        ul_erstellen (vater: HTMLElement): void {
            let liste: HTMLElement = document.createElement("ul");
            vater.appendChild(liste);

            this.beschreib1_erstellen(liste);
            this.beschreib2_erstellen(liste);
            this.beschreib3_erstellen(liste);
            this.beschreib4_erstellen(liste);
        }

        beschreib1_erstellen (liste: HTMLElement): void {
            let beschreib1: HTMLElement = document.createElement("li");
            liste.appendChild(beschreib1);
            beschreib1.innerHTML = this.beschreibung;
        }

        beschreib2_erstellen (liste: HTMLElement): void {
            let beschreib2: HTMLElement = document.createElement("li");
            liste.appendChild(beschreib2);
            beschreib2.innerHTML = this.beschreibung2;
        }

        beschreib3_erstellen (liste: HTMLElement): void {
            let beschreib3: HTMLElement = document.createElement("li");
            liste.appendChild(beschreib3);
            beschreib3.innerHTML = this.beschreibung3;
        }

        beschreib4_erstellen (liste: HTMLElement): void {
            let beschreib4: HTMLElement = document.createElement("li");
            liste.appendChild(beschreib4);
            beschreib4.innerHTML = this.beschreibung4;
        }

        preis_erstellen (vater: HTMLElement): void {
            let price: HTMLElement = document.createElement("p");
            price.setAttribute("class", "Preis");
            vater.appendChild(price);
            price.innerHTML = "" + this.preis + " €";
        }

        knopf_erstellen (vater: HTMLElement): void {
            let knopf: HTMLElement = document.createElement("button");
            knopf.innerHTML = "In den Einkaufswagen";
            vater.appendChild(knopf);
            knopf.addEventListener("click", this.hndl_Einkauf.bind(this));
        }

        //A06 Teilaufgabe 1
        hndl_Einkauf(_event: Event): void {
            console.log(this);

            if (window.confirm("bisch sicher dass " + this.name + " brauchsch?...")) {
                rollband++;
                let einkaufsWagen: HTMLElement | null = document.getElementById("imEinkaufswagen");
                let einkaufsWagenII: HTMLElement | null = document.getElementById("imEinkaufswagenII");
            
                if (rollband != 0) {
                    if (einkaufsWagen) {
                        einkaufsWagen.setAttribute("style", "visibility: visible");
                        einkaufsWagen.innerHTML = "" + rollband;
                    }
                    if (einkaufsWagenII) {
                        einkaufsWagenII.setAttribute("style", "visibility: visible");
                        einkaufsWagenII.innerHTML = "" + rollband;
                    }
                }
                window.alert("...na dann");

                einkUms += this.preis;
                einkaufswagen_Meldung(einkUms);

            } else {
                window.alert("besser is es!");
            } 
        }

        hndl_Hide(ansage: string): void {
            if (ansage == this.kathegorie)
                this.eigenerKaschten.setAttribute("style", "display: none");
            else
                this.eigenerKaschten.setAttribute("style", "display: block");
        }

    }
 
}