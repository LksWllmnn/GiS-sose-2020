"use strict";
var A06_II;
(function (A06_II) {
    class ArtikelClass {
        constructor(kathegorie, bild, name, beschreibung, beschreibung2, beschreibung3, beschreibung4, preis) {
            this.kathegorie = kathegorie;
            this.bild = bild;
            this.name = name;
            this.beschreibung = beschreibung;
            this.beschreibung2 = beschreibung2;
            this.beschreibung3 = beschreibung3;
            this.beschreibung4 = beschreibung4;
            this.preis = preis;
        }
        div_erstellen(kat, i, großVater) {
            let kasten = document.createElement("div");
            if (großVater)
                großVater.appendChild(kasten);
            kasten.id = kat + "_" + i;
            kasten.setAttribute("class", "ag");
            this.eigenerKaschten = kasten;
            this.bild_erstellen(kasten, i);
            this.name_erstellen(kasten);
            this.ul_erstellen(kasten);
            this.preis_erstellen(kasten);
            this.knopf_erstellen(kasten);
        }
        bild_erstellen(vater, i) {
            let bild = document.createElement("img");
            bild.setAttribute("src", "Bilder/" + this.bild);
            bild.setAttribute("alt", "ag1_" + i);
            vater.appendChild(bild);
        }
        name_erstellen(vater) {
            let artName = document.createElement("h3");
            vater.appendChild(artName);
            artName.innerHTML = "" + this.name;
        }
        ul_erstellen(vater) {
            let liste = document.createElement("ul");
            vater.appendChild(liste);
            this.beschreib1_erstellen(liste);
            this.beschreib2_erstellen(liste);
            this.beschreib3_erstellen(liste);
            this.beschreib4_erstellen(liste);
        }
        beschreib1_erstellen(liste) {
            let beschreib1 = document.createElement("li");
            liste.appendChild(beschreib1);
            beschreib1.innerHTML = this.beschreibung;
        }
        beschreib2_erstellen(liste) {
            let beschreib2 = document.createElement("li");
            liste.appendChild(beschreib2);
            beschreib2.innerHTML = this.beschreibung2;
        }
        beschreib3_erstellen(liste) {
            let beschreib3 = document.createElement("li");
            liste.appendChild(beschreib3);
            beschreib3.innerHTML = this.beschreibung3;
        }
        beschreib4_erstellen(liste) {
            let beschreib4 = document.createElement("li");
            liste.appendChild(beschreib4);
            beschreib4.innerHTML = this.beschreibung4;
        }
        preis_erstellen(vater) {
            let price = document.createElement("p");
            price.setAttribute("class", "Preis");
            vater.appendChild(price);
            price.innerHTML = "" + this.preis + " €";
        }
        knopf_erstellen(vater) {
            let knopf = document.createElement("button");
            knopf.innerHTML = "In den Einkaufswagen";
            vater.appendChild(knopf);
            knopf.addEventListener("click", this.hndl_Einkauf.bind(this));
        }
        //A06 Teilaufgabe 1
        hndl_Einkauf(_event) {
            if (window.confirm("bisch sicher dass '" + this.name + "' brauchsch?...")) {
                A06_II.rollband++;
                let einkaufsWagen = document.getElementById("imEinkaufswagen");
                let einkaufsWagenII = document.getElementById("imEinkaufswagenII");
                if (A06_II.rollband != 0) {
                    if (einkaufsWagen) {
                        einkaufsWagen.setAttribute("style", "visibility: visible");
                        einkaufsWagen.innerHTML = "" + A06_II.rollband;
                    }
                    if (einkaufsWagenII) {
                        einkaufsWagenII.setAttribute("style", "visibility: visible");
                        einkaufsWagenII.innerHTML = "" + A06_II.rollband;
                    }
                }
                window.alert("...na dann");
                A06_II.einkUms += this.preis;
                console.log("im Warenkorb befinden sich Artike im stabilen Wert von: " + A06_II.einkUms + " €");
            }
            else {
                window.alert("besser is es!");
            }
        }
        //A06 Teilaufgabe 2
        hndl_Hide(ansage) {
            if (ansage == this.kathegorie)
                this.eigenerKaschten.setAttribute("style", "display: none");
            else
                this.eigenerKaschten.setAttribute("style", "display: block");
        }
    }
    A06_II.ArtikelClass = ArtikelClass;
})(A06_II || (A06_II = {}));
//# sourceMappingURL=script_Daten.js.map