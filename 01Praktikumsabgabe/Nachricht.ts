namespace P01 {
    export class Nachricht {
        id: string;
        absender: string  | null;
        nachricht: string;

        constructor(_id: string, _absender: string | null, _nachricht: string ) {
            this.id = _id;
            this.absender = _absender;
            this.nachricht = _nachricht;
        }

        anzeigen(_id: number): void {
            let einsChat: HTMLDivElement = <HTMLDivElement>document.getElementById("ChatVerlauf");
            let platzhalterNachricht: HTMLDivElement = document.createElement("div");
            let memberName: HTMLDivElement = document.createElement("div");
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
            platzhalterNachricht.appendChild(memberName);
        }
    }
}