"use strict";
var P02;
(function (P02) {
    class Nachricht {
        constructor(_id, _absender, _nachricht) {
            this._id = _id;
            this.absender = _absender;
            this.nachricht = _nachricht;
        }
        anzeigen(_id) {
            let einsChat = document.getElementById("ChatVerlauf");
            let platzhalterNachricht = document.createElement("div");
            let memberName = document.createElement("div");
            platzhalterNachricht.className = "Chatnachricht";
            memberName.innerHTML = "" + this.absender;
            memberName.className = "Chatmember";
            if (localStorage.getItem("login") == this.absender)
                platzhalterNachricht.id = "eigeneNachricht";
            else
                platzhalterNachricht.id = "" + _id;
            platzhalterNachricht.innerHTML = " " + this.nachricht;
            if (einsChat)
                einsChat.appendChild(platzhalterNachricht);
            einsChat.insertBefore(platzhalterNachricht, einsChat.childNodes[0]);
            platzhalterNachricht.appendChild(memberName);
        }
    }
    P02.Nachricht = Nachricht;
})(P02 || (P02 = {}));
//# sourceMappingURL=Nachricht.js.map