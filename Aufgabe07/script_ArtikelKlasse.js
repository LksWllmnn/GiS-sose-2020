"use strict";
var A07;
(function (A07) {
    class ArtikelClass {
        constructor(_kathegorie, _bild, _name, _beschreibung, _beschreibung2, _beschreibung3, _beschreibung4, _preis) {
            this.kathegorie = _kathegorie;
            this.bild = _bild;
            this.name = _name;
            this.beschreibung1 = _beschreibung;
            this.beschreibung2 = _beschreibung2;
            this.beschreibung3 = _beschreibung3;
            this.beschreibung4 = _beschreibung4;
            this.preis = _preis;
        }
        div_erstellen(_kat, _i, _großVater) {
            let kasten = document.createElement("div");
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
        bild_erstellen(_vater, _i) {
            let bild = document.createElement("img");
            bild.setAttribute("src", "Bilder/" + this.bild);
            bild.setAttribute("alt", "ag1_" + _i);
            _vater.appendChild(bild);
        }
        name_erstellen(_vater) {
            let artName = document.createElement("h3");
            _vater.appendChild(artName);
            artName.innerHTML = "" + this.name;
        }
        ul_erstellen(_vater) {
            let liste = document.createElement("ul");
            _vater.appendChild(liste);
            for (let i = 0; i <= 4; i++)
                this.beschreib_erstellen(liste, i);
        }
        beschreib_erstellen(_liste, _i) {
            let beschreib = document.createElement("li");
            _liste.appendChild(beschreib);
            switch (_i) {
                case 1:
                    beschreib.innerHTML = this.beschreibung1;
                    break;
                case 2:
                    beschreib.innerHTML = this.beschreibung2;
                    break;
                case 3:
                    beschreib.innerHTML = this.beschreibung3;
                    break;
                case 4:
                    beschreib.innerHTML = this.beschreibung4;
                    break;
            }
        }
        preis_erstellen(_vater) {
            let price = document.createElement("p");
            price.setAttribute("class", "Preis");
            _vater.appendChild(price);
            price.innerHTML = "" + this.preis + " €";
        }
        knopf_erstellen(_vater) {
            let knopf = document.createElement("button");
            knopf.innerHTML = "In den Einkaufswagen";
            _vater.appendChild(knopf);
            knopf.addEventListener("click", this.hndl_Einkauf.bind(this));
        }
        //A06 Teilaufgabe 1
        hndl_Einkauf(_event) {
            if (window.confirm("bisch sicher dass '" + this.name + "' brauchsch?...")) {
                A07.rollbandOver++;
                let einkaufsWagen = document.getElementById("imEinkaufswagen");
                let einkaufsWagenII = document.getElementById("imEinkaufswagenII");
                if (A07.rollbandOver != 0) {
                    if (einkaufsWagen) {
                        einkaufsWagen.setAttribute("style", "visibility: visible");
                        einkaufsWagen.innerHTML = "" + A07.rollbandOver;
                    }
                    if (einkaufsWagenII) {
                        einkaufsWagenII.setAttribute("style", "visibility: visible");
                        einkaufsWagenII.innerHTML = "" + A07.rollbandOver;
                    }
                }
                window.alert("...na dann");
                A07.einkUms += this.preis;
                A07.localStorageSpeicher(this.name, this.preis, A07.rollbandOver, A07.einkUms);
                console.log("im Warenkorb befinden sich Artike im stabilen Wert von: " + A07.einkUms + " €");
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
    A07.ArtikelClass = ArtikelClass;
})(A07 || (A07 = {}));
//# sourceMappingURL=script_ArtikelKlasse.js.map