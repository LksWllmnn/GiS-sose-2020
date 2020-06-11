"use strict";
var A07;
(function (A07) {
    class ImEinkaufsWagen {
        constructor(_preis, _name, _bild) {
            this.preis = _preis;
            this.name = _name;
            this.bild = _bild;
        }
        einTrag(_position) {
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
            localStorage.removeItem("" + this.preis);
            let liElem = document.getElementById("" + this.position);
            liElem.remove();
            A07.gesamtpreis -= Number(this.preis.toFixed(2));
            A07.listeBeenden(A07.gesamtpreis);
            location.reload();
        }
    }
    A07.ImEinkaufsWagen = ImEinkaufsWagen;
})(A07 || (A07 = {}));
//# sourceMappingURL=script_EinkaufswagenKlasse.js.map