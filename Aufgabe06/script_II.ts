namespace A06_I {
    let rollband: number = 0;
    let einkUms: number = 0;
    for (let i: number = 0; i < list.length; i++) {

        let kasten: HTMLElement = document.createElement("div");
        kasten.setAttribute("class", "ag");
        if (list[i].kathegorie == "Soziales") {
            document.getElementById("soziales")?.appendChild(kasten);
        }
        if (list[i].kathegorie == "Technik") {
            document.getElementById("technik")?.appendChild(kasten);
        }
        if (list[i].kathegorie == "eine Person") {
            document.getElementById("person")?.appendChild(kasten);
        }
        if (list[i].kathegorie == "mehrere Personen") {
            document.getElementById("personen")?.appendChild(kasten);
        }

        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("src", "Bilder/" + list[i].bild);
        bild.setAttribute("alt", "ag1_" + i + 1);
        kasten.appendChild(bild);

        let aNam: HTMLElement = document.createElement("h3");
        kasten.appendChild(aNam);
        aNam.innerHTML = "" + list[i].name;

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
        price.innerHTML = "" + list[i].preis + ",00 €";

        let knopf: HTMLElement = document.createElement("button");
        knopf.innerHTML = "In den Einkaufswagen";
        kasten.appendChild(knopf);
        knopf.addEventListener("click", hndl);
    }

    function hndl(_event: Event): void {
        let geklickterKaschten: HTMLElement = <HTMLElement>_event.target;
        let prdNm: String = "";
        if (geklickterKaschten.previousSibling?.previousSibling?.previousSibling?.firstChild?.textContent)
        prdNm = "" + geklickterKaschten.previousSibling?.previousSibling?.previousSibling?.firstChild?.textContent;

        if (window.confirm("bisch sicher dass " + prdNm + " brauchsch?...")) {
            rollband++;
            let einkaufsWagen: HTMLElement | null = document.getElementById("imEinkaufswagen");
            let einkaufsWagenII: HTMLElement | null = document.getElementById("imEinkaufswagenII");
            
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
            
            if (geklickterKaschten.previousSibling?.firstChild?.nodeValue)
            einkUms += parseFloat(geklickterKaschten.previousSibling?.firstChild?.nodeValue);
            console.log("Stabile Ware im Wert von: " + einkUms + "€ im Warenkorb");

        } else {
            window.alert("besser is es!");
        } 
    }
}