"use strict";
var A07_III;
(function (A07_III) {
    class ImEinkaufsWagen {
        constructor(_preis, _name, _bild, _anzahl, _kennnummer) {
            this.preis = _preis * _anzahl;
            this.name = _name;
            this.bild = _bild;
            this.anzahl = _anzahl;
            this.kennnummer = _kennnummer;
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
            stückinp.addEventListener("change", this.hndl_anzahlVerändern.bind(this));
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
            preis.innerHTML = "" + this.preis + "€";
            einkauf.appendChild(name);
            einkauf.appendChild(preis);
        }
        hndl_entfernen(_event) {
            localStorage.removeItem("" + this.kennnummer);
            let liElem = document.getElementById("" + this.position);
            liElem.remove();
            A07_III.gesamtpreis -= Number(this.preis.toFixed(2));
            A07_III.listeBeenden(A07_III.gesamtpreis);
            location.reload();
        }
        hndl_anzahlVerändern(_event) {
            let newAnzahlContainer = _event.currentTarget;
            if (newAnzahlContainer) {
                let newAnzahl = Number(newAnzahlContainer.value);
                if (newAnzahl)
                    localStorage.setItem("" + this.kennnummer, "" + newAnzahl);
                location.reload();
            }
        }
    }
    A07_III.ImEinkaufsWagen = ImEinkaufsWagen;
})(A07_III || (A07_III = {}));
//# sourceMappingURL=script_EinkaufswagenKlasse.js.map