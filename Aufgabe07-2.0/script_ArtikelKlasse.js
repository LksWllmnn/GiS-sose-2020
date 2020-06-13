"use strict";
var A07_III;
(function (A07_III) {
    class ArtikelClass {
        constructor(_kathegorie, _bild, _name, _beschreibung, _beschreibung2, _beschreibung3, _beschreibung4, _preis, _position) {
            this.kathegorie = _kathegorie;
            this.bild = _bild;
            this.name = _name;
            this.beschreibung1 = _beschreibung;
            this.beschreibung2 = _beschreibung2;
            this.beschreibung3 = _beschreibung3;
            this.beschreibung4 = _beschreibung4;
            this.preis = _preis;
            this.anzahl = 0;
            this.position = _position;
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
                A07_III.einkUms += this.preis;
                this.anzahl++;
                localStorage.setItem("" + this.position, "" + this.anzahl);
                /*console.log("Anzahl " + this.anzahl);
                console.log("Storage " + localStorage.getItem("" + this.position));
                console.log(localStorage.key(0));
                console.log(localStorage.key(1));
                console.log(localStorage.length);
                //localStorage.clear();*/
                let einkaufsWagenII = document.getElementById("imEinkaufswagenII");
                if (localStorage.length != 0) {
                    if (einkaufsWagenII) {
                        einkaufsWagenII.setAttribute("style", "visibility: visible");
                        einkaufsWagenII.innerHTML = "" + localStorage.length;
                    }
                }
                window.alert("...na dann");
                console.log("im Warenkorb befinden sich Artike im stabilen Wert von: " + A07_III.einkUms + " €");
            }
            else {
                window.alert("besser is es!");
            }
        }
        //A06 Teilaufgabe 2
        hndl_Hide(_ansage) {
            if (_ansage == this.kathegorie || _ansage == "alle")
                this.eigenerKaschten.setAttribute("style", "display: flex-wrap");
            else
                this.eigenerKaschten.setAttribute("style", "display: none");
        }
    }
    A07_III.ArtikelClass = ArtikelClass;
})(A07_III || (A07_III = {}));
//# sourceMappingURL=script_ArtikelKlasse.js.map