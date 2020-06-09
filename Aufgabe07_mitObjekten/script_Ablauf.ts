namespace A07_I {
    let rollband: number = 0;
    let einkUms: number = 0;

    communicate("Liste.json");

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response", response);
      }
    
    for (let i: number = 0; i < list.length; i++) {

        let kasten: HTMLElement = document.createElement("div");
        kasten.setAttribute("class", "ag");
        if (list[i].kathegorie == "Soziales") {
            const großVater: HTMLElement = <HTMLElement>document.getElementById("soziales");
            if (großVater)
                großVater.appendChild(kasten);
            kasten.id = "soziales_" + i;
        }
        if (list[i].kathegorie == "Technik") {
            const großVater: HTMLElement = <HTMLElement>document.getElementById("technik");
            if (großVater)
                großVater.appendChild(kasten);
            kasten.id = "technik_" + i;
        }
        if (list[i].kathegorie == "eine Person") {
            const großVater: HTMLElement = <HTMLElement>document.getElementById("person");
            if (großVater)
                großVater.appendChild(kasten);
            kasten.id = "person_" + i;
        }
        if (list[i].kathegorie == "mehrere Personen") {
            const großVater: HTMLElement = <HTMLElement>document.getElementById("personen");
            if (großVater)
                großVater.appendChild(kasten);
            kasten.id = "personen_" + i;
        }

        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("src", "Bilder/" + list[i].bild);
        bild.setAttribute("alt", "ag1_" + i);
        kasten.appendChild(bild);

        let artName: HTMLElement = document.createElement("h3");
        kasten.appendChild(artName);
        artName.innerHTML = "" + list[i].name;

        let liste: HTMLElement = document.createElement("ul");
        kasten.appendChild(liste);

        let beschreib1: HTMLElement = document.createElement("li");
        liste.appendChild(beschreib1);
        beschreib1.innerHTML = list[i].beschreibung;

        let beschreib2: HTMLElement = document.createElement("li");
        liste.appendChild(beschreib2);
        beschreib2.innerHTML = list[i].beschreibeung2;

        let beschreib3: HTMLElement = document.createElement("li");
        liste.appendChild(beschreib3);
        beschreib3.innerHTML = list[i].beschreibung3;

        let beschreib4: HTMLElement = document.createElement("li");
        liste.appendChild(beschreib4);
        beschreib4.innerHTML = list[i].beschreibung4;

        let price: HTMLElement = document.createElement("p");
        price.setAttribute("class", "Preis");
        kasten.appendChild(price);
        price.innerHTML = "" + list[i].preis + " €";

        let knopf: HTMLElement = document.createElement("button");
        knopf.innerHTML = "In den Einkaufswagen";
        kasten.appendChild(knopf);
        knopf.addEventListener("click", hndl_Einkauf);
    }

    //A06 Teil 1
    function hndl_Einkauf(_event: Event): void {
        let geklickterKaschten: HTMLElement = <HTMLElement>_event.target;
        let nameMeldung: String = "";

        if (geklickterKaschten.previousSibling)
            if (geklickterKaschten.previousSibling.previousSibling)
                if (geklickterKaschten.previousSibling.previousSibling.previousSibling)
                    if (geklickterKaschten.previousSibling.previousSibling.previousSibling.firstChild)
                        nameMeldung = "" + <String>geklickterKaschten.previousSibling.previousSibling.previousSibling.firstChild.textContent;

        if (window.confirm("bisch sicher dass " + nameMeldung + " brauchsch?...")) {
            rollband++;
            let einkaufsWagen: HTMLElement = <HTMLElement>document.getElementById("imEinkaufswagen");
            let einkaufsWagenII: HTMLElement = <HTMLElement>document.getElementById("imEinkaufswagenII");
            
            if (rollband != 0) {
                    if (einkaufsWagen) {
                    einkaufsWagen.setAttribute("style", "visibility: visible");
                    einkaufsWagen.innerHTML = "" + rollband;
                    }
                    if (einkaufsWagenII) {
                    einkaufsWagenII.setAttribute("style", "visibility: visible");
                    einkaufsWagenII.innerHTML = "" + rollband;
                    }
            }
            window.alert("...na dann");
            
            if (geklickterKaschten.previousSibling)
            if (geklickterKaschten.previousSibling.firstChild)
            if (geklickterKaschten.previousSibling?.firstChild?.nodeValue)
            einkUms += parseFloat(geklickterKaschten.previousSibling.firstChild.nodeValue);
            console.log("Stabile Ware im Wert von: " + einkUms + "€ im Warenkorb");

        } else {
            window.alert("besser is es!");
        } 
    }

    //A06 Teil 2
    let hideI: HTMLElement = <HTMLElement>document.getElementById("hideTechnik");
    if (hideI)
        hideI.addEventListener("click", hndl_hide);

    let hideII: HTMLElement = <HTMLElement>document.getElementById("hideSoziales");
    if (hideII)
        hideII.addEventListener("click", hndlII_hide);

    let hideIII: HTMLElement = <HTMLElement>document.getElementById("hidePerson");
    if (hideIII)
        hideIII.addEventListener("click", hndlIII_hide);

    let hideIIII: HTMLElement = <HTMLElement>document.getElementById("hidePersonen");
    if (hideIIII)
        hideIIII.addEventListener("click", hndlIIII_hide);

    let showAllI: HTMLElement = <HTMLElement>document.getElementById("renew_I");
    if (showAllI)
        showAllI.addEventListener("click", hndl_showAll);

    let showAllII: HTMLElement = <HTMLElement>document.getElementById("renew_II");
    if (showAllII)
        showAllII.addEventListener("click", hndl_showAll);

    function hndl_hide(_event: Event): void {
        let kastenId: string;
        for (let i: number = 0; i < list.length; i++) {
           kastenId = "technik_" + i;
           if (document.getElementById(kastenId)) {
                let technikArt: HTMLElement = <HTMLElement>document.getElementById(kastenId);
                technikArt.setAttribute("style", "display: none");
            }
        }
        for (let i: number = 0; i < list.length; i++) {
            kastenId = "soziales_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt: HTMLElement = <HTMLElement>document.getElementById(kastenId);
                technikArt.setAttribute("style", "display: block");
             }
         }
    }

    function hndlII_hide(_event: Event): void {
        let kastenId: string;
        for (let i: number = 0; i < list.length; i++) {
           kastenId = "soziales_" + i;
           if (document.getElementById(kastenId)) {
                let technikArt: HTMLElement = <HTMLElement>document.getElementById(kastenId);
                technikArt.setAttribute("style", "display: none");
            }
        }
        for (let i: number = 0; i < list.length; i++) {
            kastenId = "technik_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt: HTMLElement = <HTMLElement>document.getElementById(kastenId);
                technikArt.setAttribute("style", "display: block");
             }
         }
    }

    function hndlIII_hide(_event: Event): void {
        let kastenId: string;
        for (let i: number = 0; i < list.length; i++) {
           kastenId = "person_" + i;
           if (document.getElementById(kastenId)) {
                let technikArt: HTMLElement = <HTMLElement>document.getElementById(kastenId);
                technikArt.setAttribute("style", "display: none");
            }
        }
        for (let i: number = 0; i < list.length; i++) {
            kastenId = "personen_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt: HTMLElement = <HTMLElement>document.getElementById(kastenId);
                technikArt.setAttribute("style", "display: block");
             }
         }
    }

    function hndlIIII_hide(_event: Event): void {
        let kastenId: string;
        for (let i: number = 0; i < list.length; i++) {
           kastenId = "personen_" + i;
           if (document.getElementById(kastenId)) {
                let technikArt: HTMLElement = <HTMLElement>document.getElementById(kastenId);
                technikArt.setAttribute("style", "display: none");
            }
        }
        for (let i: number = 0; i < list.length; i++) {
            kastenId = "person_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt: HTMLElement = <HTMLElement>document.getElementById(kastenId);
                technikArt.setAttribute("style", "display: block");
             }
         }
    }

    function hndl_showAll(_event: Event): void {
        let kastenId: string;
        for (let i: number = 0; i < list.length; i++) {
           kastenId = "personen_" + i;
           if (document.getElementById(kastenId)) {
                let technikArt: HTMLElement = <HTMLElement>document.getElementById(kastenId);
                technikArt.setAttribute("style", "display: block");
            }
        }
        for (let i: number = 0; i < list.length; i++) {
            kastenId = "person_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt: HTMLElement = <HTMLElement>document.getElementById(kastenId);
                technikArt.setAttribute("style", "display: block");
             }
        }

        for (let i: number = 0; i < list.length; i++) {
            kastenId = "technik_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt: HTMLElement = <HTMLElement>document.getElementById(kastenId);
                technikArt.setAttribute("style", "display: block");
            }
        }
        for (let i: number = 0; i < list.length; i++) {
            kastenId = "soziales_" + i;
            if (document.getElementById(kastenId)) {
                let technikArt: HTMLElement = <HTMLElement>document.getElementById(kastenId);
                technikArt.setAttribute("style", "display: block");
            }
        }
    }
}