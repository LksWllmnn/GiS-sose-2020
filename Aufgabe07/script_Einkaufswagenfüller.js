"use strict";
var A07;
(function (A07) {
    class ImEinkaufsWagen {
        constructor(_preis, _name) {
            this.preis = _preis;
            this.name = _name;
        }
        einTrag() {
            let einkauf = document.createElement("tr");
            let großvater = document.getElementById("derEinkaufBeginne");
            großvater.appendChild(einkauf);
            let storno = document.createElement("td");
            let stornoButton = document.createElement("button");
            storno.appendChild(stornoButton);
            let name = document.createElement("td");
            name.innerHTML = this.name;
            let preis = document.createElement("td");
            preis.innerHTML = "" + this.preis + "€";
            einkauf.appendChild(storno);
            einkauf.appendChild(name);
            einkauf.appendChild(preis);
        }
    }
    A07.ImEinkaufsWagen = ImEinkaufsWagen;
})(A07 || (A07 = {}));
//# sourceMappingURL=script_Einkaufswagenfüller.js.map