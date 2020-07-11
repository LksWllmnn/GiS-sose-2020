"use strict";
var Test;
(function (Test) {
    main();
    function main() {
        let anfang = window.confirm("bist du neu hier?");
        if (anfang)
            anmelden();
        else
            einloggen();
    }
    ////////////////////////////////////////////////////////////////////////////////////////////
    function anmelden() {
        let neuerBenutzername = window.prompt("Wie soll dein Chatname sein?");
        let neuespasswort = "";
        if (neuerBenutzername == null) {
            window.alert("du musst einen Benutzernamen eingeben!");
            anmelden();
        }
        else {
            neuespasswort = window.prompt("gebe dir ein Passwort welches du dir merken kannst!");
            while (neuespasswort == null) {
                neuespasswort = window.prompt("Gib dir ein Passwort! Mensch!!");
            }
        }
        comunicate_anmelden(neuerBenutzername, neuespasswort);
    }
    function einloggen() {
        let alterBenutzername = window.prompt("Wie ist dein Chatname?");
        let altespasswort;
        while (alterBenutzername == null) {
            alterBenutzername = window.prompt("Safe nicht dein Benutzername...gib dein Benutzername ein!");
        }
        altespasswort = window.prompt("passwort!");
        while (altespasswort == null) {
            altespasswort = window.prompt("Wo ist dein Passwort? Des war es sicher nicht...gib mir dein Passwort jetzt!");
        }
        comunicate_einloggen(alterBenutzername, altespasswort);
    }
    function comunicate_anmelden(_neuerBenutzer, _neuesPasswort) {
        window.alert("Hallo " + _neuerBenutzer + " dein Passwort ist" + _neuesPasswort);
    }
    function comunicate_einloggen(_alterBenutzer, _altesPasswort) {
        window.alert("Wilkommen zurück " + _alterBenutzer + " dein Passwort ist " + _altesPasswort);
    }
})(Test || (Test = {}));
//# sourceMappingURL=test.js.map