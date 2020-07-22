"use strict";
var Test;
(function (Test) {
    let auswahlmodus = "";
    let abmeldenknopf = document.getElementById("abmelden");
    abmeldenknopf.addEventListener("click", hndl_abmelden);
    main();
    function main() {
        if (localStorage.getItem("name") == null)
            promptersatz();
    }
    ////////////////////////////////////////////////////////////////////////////////////////////
    function promptersatz() {
        console.log("wir sind in der funktion");
        let großvater = document.getElementById("Background");
        let schutz = document.createElement("div");
        schutz.id = "schutz";
        if (großvater)
            großvater.appendChild(schutz);
        if (localStorage.getItem("Name") == null) {
            schutz.setAttribute("display", "block");
        }
        else {
            schutz.setAttribute("display", "hidden");
        }
        let auswahl = document.createElement("div");
        auswahl.id = "asuwahlFlex";
        schutz.appendChild(auswahl);
        if (auswahlmodus == "anmelden") {
            schutz.style.backgroundColor = "rgb(150, 76, 42)";
        }
        if (auswahlmodus == "einloggen") {
            schutz.style.backgroundColor = "rgb(0, 253, 114)";
        }
        if (auswahlmodus == "") {
            schutz.style.backgroundColor = "aqua";
        }
        let anmeldenDiv = document.createElement("div");
        anmeldenDiv.id = "anmeldenDiv";
        anmeldenDiv.innerHTML = "hier klicken zum anmelden";
        anmeldenDiv.className = "auswahl";
        anmeldenDiv.addEventListener("click", hndl_anmelden);
        let einloggenDiv = document.createElement("div");
        einloggenDiv.id = "einloggenDiv";
        einloggenDiv.innerHTML = "hier klicken zum ersten mal einloggen";
        einloggenDiv.className = "auswahl";
        einloggenDiv.addEventListener("click", hndl_einloggen);
        auswahl.appendChild(anmeldenDiv);
        auswahl.appendChild(einloggenDiv);
        let info = document.createElement("p");
        info.id = "info";
        if (auswahlmodus == "")
            info.innerHTML = "Wollen sie sich anmelden oder einloggen?";
        if (auswahlmodus != "")
            info.innerHTML = "Du willst dich gerade: " + auswahlmodus;
        schutz.appendChild(info);
        let eingabeDiv = document.createElement("div");
        eingabeDiv.id = "EingabeDiv";
        schutz.appendChild(eingabeDiv);
        let eingabeName = document.createElement("input");
        eingabeName.id = "eingabeName";
        eingabeName.setAttribute("placeholder", "Name!");
        let eingabepasswort = document.createElement("input");
        eingabepasswort.id = "eingabePasswort";
        eingabepasswort.setAttribute("placeholder", "Passwort!");
        let eingabeReinkommen = document.createElement("button");
        eingabeReinkommen.innerHTML = "lass mich Rein!";
        eingabeDiv.appendChild(eingabeName);
        eingabeDiv.appendChild(eingabepasswort);
        eingabeDiv.appendChild(eingabeReinkommen);
        eingabeReinkommen.addEventListener("click", hndl_einlasscheck);
    }
    function hndl_anmelden() {
        auswahlmodus = "anmelden";
        console.log(auswahlmodus);
        let background = document.getElementById("Background");
        let schutz = document.getElementById("schutz");
        background.removeChild(schutz);
        promptersatz();
    }
    function hndl_einloggen() {
        auswahlmodus = "einloggen";
        console.log(auswahlmodus);
        let background = document.getElementById("Background");
        let schutz = document.getElementById("schutz");
        background.removeChild(schutz);
        promptersatz();
    }
    function hndl_einlasscheck() {
        let nameInput = document.getElementById("eingabeName");
        let name = "" + nameInput.value;
        let passwortInput = document.getElementById("eingabePasswort");
        let passwort = "" + passwortInput.value;
        console.log(name);
        console.log(auswahlmodus);
        console.log(passwort);
        localStorage.setItem("name", name);
        console.log(localStorage.getItem("name"));
        location.reload();
    }
    function hndl_abmelden() {
        localStorage.removeItem("name");
        location.reload();
    }
})(Test || (Test = {}));
//# sourceMappingURL=test.js.map