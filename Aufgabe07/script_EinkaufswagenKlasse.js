"use strict";
var A07;
(function (A07) {
    class ImEinkaufsWagen {
        constructor(_preis, _name, _bild) {
            this.preis = _preis;
            this.name = _name;
            this.bild = _bild;
            this.anzahl = 1;
        }
        einTrag(_position) {
            this.position = _position;
            let einkauf = document.createElement("tr");
            einkauf.id = "" + this.position;
            let großvater = document.getElementById("derEinkaufBeginne");
            if (großvater)
                großvater.appendChild(einkauf);
            let storno = document.createElement("td");
            einkauf.appendChild(storno);
            let stornoButton = document.createElement("button");
            storno.appendChild(stornoButton);
            stornoButton.innerHTML = "weg d'mit!";
            stornoButton.setAttribute("Position", "" + _position);
            stornoButton.addEventListener("click", this.hndl_entfernen.bind(this));
            let stück = document.createElement("td");
            einkauf.appendChild(stück);
            let stückinp = document.createElement("input");
            stückinp.id = "value" + _position;
            stück.appendChild(stückinp);
            stückinp.setAttribute("placeholder", "" + this.anzahl);
            stückinp.addEventListener("input", this.hndl_anzahlVerändern.bind(this));
            let bildRahmen = document.createElement("td");
            bildRahmen.setAttribute("class", "einkaufBildRahmen");
            einkauf.appendChild(bildRahmen);
            let bild = document.createElement("img");
            bildRahmen.appendChild(bild);
            bild.setAttribute("src", "Bilder/" + this.bild);
            bild.setAttribute("class", "einkaufBild");
            bild.setAttribute("alt", "" + this.bild);
            let name = document.createElement("td");
            name.innerHTML = this.name;
            let preis = document.createElement("td");
            preis.innerHTML = "" + this.preis * this.anzahl + "€";
            einkauf.appendChild(name);
            einkauf.appendChild(preis);
        }
        hndl_entfernen(_event) {
            localStorage.removeItem("" + this.preis);
            let liElem = document.getElementById("" + this.position);
            liElem.remove();
            A07.gesamtpreis -= Number(this.preis.toFixed(2));
            A07.listeBeenden(A07.gesamtpreis);
            location.reload();
        }
        hndl_anzahlVerändern(_event) {
            let newAnzahlContainer = document.getElementById("value" + this.position);
            if (newAnzahlContainer) {
                let newAnzahl = Number(newAnzahlContainer.nodeValue);
                if (newAnzahl)
                    this.anzahl = newAnzahl;
            }
        }
    }
    A07.ImEinkaufsWagen = ImEinkaufsWagen;
})(A07 || (A07 = {}));
//# sourceMappingURL=script_EinkaufswagenKlasse.js.map