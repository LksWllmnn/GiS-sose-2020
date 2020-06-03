namespace A06_II {
    
    export let rollband: number = 0;
    export let einkUms: number = 0;

    let list: ArtikelClass[] = [
    new ArtikelClass ("Soziales", "Sand.PNG", "Sand für Leute in der Wüste",  "feinster Qualitätssand", "absolut unnötig", "nicht nur im Alltag sondern auch in der Berufs-Edition", "mit Sicherheit nicht hilfreich",  50.00 ),
    new ArtikelClass ("Soziales", "larry.PNG", "furzender Larry", "ideal für Aufzüge", "garantierter Hass bei allen Mitarbeitern", "mit extra Chilli-Flavour",  "ungeeignet für Leute die Fekal-Humor mögen", 800.00 ),
    new ArtikelClass ("Soziales", "Küche.PNG", "unaufgeräumte Arbeitsküche", "wenn Sie das nicht sowieso schon haben", "Alle werden sich davor ekeln...und niemand wird es weg räumen",  "bei jeder Besprechung wird angesprochen warum es eigentlich so unordentlich ist",  "ein Spaß für das ganze Büro", 200.00),
    new ArtikelClass ( "Soziales", "Käse.PNG", "stinkender Käse", "ganzer Kühlschrank stinkt", "man vergisst es immer wieder bis man vorm Kühlschrank steht",  "man vergisst es nicht wenn der ganze flur stinkt", "niemand räumt ihn weg", 10.00 ),
    new ArtikelClass ( "Soziales", "Leistungstest.PNG", "unnötiger Leistungstest", "wir bieten ihnen einen konzipierten Leistungstest auf den ihre Mitarbeiter bestimt kein Bock haben", "Sportübungen wie: handstand, Purzelbaum und Hochsprung", "charakter-Tests: we schnell kann man einen liter bier trinken", "nicht-lachen-Test bei try not to laugh challenges", 50.00),
    new ArtikelClass ( "Soziales", "kein_Kaffee.PNG", "kein Kaffee mehr", "lässt sich gut kombinieren mit unserem Produkt kalter kaffee aus der anderen Sparte",  "kaffee ist explizit verboten",  "wer mag schon kaffee?", "kakao-Pflicht",  0.00),
    new ArtikelClass ( "Technik", "klo.PNG", "verstopftes Klo", "...was soll man dazu groß sagen...",  "wenn man halt denkt,",  "da liegt was in der luft...",  "is halt Kacke", 50.00),
    new ArtikelClass ( "Technik", "Klimaanlage.PNG", "kaputte Klimaanlage",  "warm im sommer",  "kalt im Winter...so wie es sein muss",  "Die Mitarbeiter werden sich freuen",  "sie können auch einen larry davor stellen...",  29.00 ),
    new ArtikelClass ( "Technik", "Drucker.PNG", "kaputter Drucker",  "Von DPD geliefert",  "garantiert ohne Garantie",  "Hausmeister hassen diesen Trick", "Leute kaufen dazu gern den furzenden Larry",  19.00 ),
    new ArtikelClass ( "Technik", "CD.PNG", "alle USB-Sticks mit CDs austauschen",  "back to the ...rolls",  "endlich wieder handfester speicherplatz",  "ganz klar auf welchem rohling was ist...",  "warum beschriftet eigentlich niemand die dinger",  69.00 ),
    new ArtikelClass ( "Technik", "Vista.PNG", "Windows-Vista Update", "für effektives arbeiten",  "eindeutiger fortschit in der übersichtlichkeit",  "garantiert kein problem bei den updates", "beste erfindung von Microsoft für Ihren Arbeitsalltag...lul",  299.00),
    new ArtikelClass ("Technik", "Maus.PNG", "keine Mäuse mehr",  "alle arbeiter bekommen nurnoch joysticks oder laptop touchpats",  "ich hab keine ahnung wies läuft, stell ich mir aber stressig vor", "...gibts überhaupt noch joysticks?", "controller sind auch ok",  5.00),
    new ArtikelClass ( "eine Person", "Boden.PNG", "klebender Boden", "ideal für Socken", "oder Barfuß",  "klebt sehr", "am besten teppich drüber", 50.00),
    new ArtikelClass ( "eine Person", "Techniker.PNG", "nicht kommender Techniker",  "kommt irgend wann zwischen 0 und 24 uhr",  "kommt nicht zu früh oder zu spät sondern genau dann wann er nicht kommen will", "hat sein werkzeug vergessen", "aber macht pünktlich vesper pause", 69.69 ),
    new ArtikelClass ( "eine Person", "Soße.PNG", "tropfende Soße beim Döner-Essen",  "riecht nach knoblauch",  "die Jacke dann auch",  "passend für keinen Anlass",  "Döner schmeckt trotzdem",  50.00),
    new ArtikelClass ( "eine Person", "Wasserhahn.PNG", "alkohol im leitungswasser",  "aus dem wasserhahn kommt nurnoch wasser mit 10% alkohol gehalt",  "ungut für leute die direkt aus dem wasserhahn trinken",  "ungut für familien",  "...das geschirr ist immer schon desinfiziert...", 24.7 ),
    new ArtikelClass ( "eine Person", "BBQ.PNG", "alle duschgels mit BBQ soße ersetzen",  "vielleicht gut für die Haare",  "manche mögen den geruch",  "beim grillen weiß man nicht ob man in die hand beißen soll oder das fleisch", "stell ich mir stressig vor", 33.00 ),
    new ArtikelClass ( "eine Person", "Steintafel.PNG", "alle Papierblöcke werden mit Steintafeln vertauscht",  "gut für den Bizeps",  "schlecht für den platz",  "evtl. schlecht für den Transport",  "könnte teuer werden", 999.99 ),
    new ArtikelClass ( "mehrere Personen", "Sand.PNG",  "Sand für Leute in der Wüste",  "feinster Qualitätssand",  "absolut unnötig",  "der Klassiker",  "mit Sicherheit nicht hilfreich", 14.99),
    new ArtikelClass ( "mehrere Personen", "Flasche.PNG",  "Leere Wasserflasche für Verdurstende",  "passend zu 'Sand für Leute in der Wüste'",  "die verschwindende Hoffnung raubt auch noch die letzte Kraft in der Wüste",  "vitalisiert das Gemüt, nicht", "alles schmeckt süßer als nichts...ach kp", 6.99),
    new ArtikelClass ( "mehrere Personen", "Kaffee.PNG",  "kalter Kaffe",  "is kalt",  "ungeeignet für leute die kalten kaffee mögen",  "ich hab eigentlich keine ahnung...",  "ich mag ja eig eh kein kaffee", 50000.00 ),
    new ArtikelClass ( "mehrere Personen", "Vogel.PNG", "aggressiver Vogel",  "ein trainerter Vogel der eine spezielle person angreift",  "ist aggressiv",  "het schlechte verdauung", "bei aufpreis kann er reden", 2004.00),
    new ArtikelClass ( "mehrere Personen", "linke_Schuhe.PNG", "nurnoch linke schuhe", "alle rechten schuhe werden durch das gleiche modell aber eben der falschen seite ersetzt",  "garantiert nervenaufreibend für leute die öfters zuspät kommen", "garantiert nervenaufreibend für eigentlich so ziemlich jeden",  "...andererseits...wir haben dann lauter paare mit nurnoch rechten schuhen...", 250.00),
    new ArtikelClass ( "mehrere Personen", "Handy_Vertrag.PNG", "handy-vertrag kündigen", "wir kündigen für sie irgend wann ihren handyvertrag", "einfach so wenn sie nicht damit rechnen",  "am besten morgens vor dem aufstehen", "und melden sie bei aldi talk an...gibts das noch?", 66.00)
    ];

    for (let i: number = 0; i < list.length; i++) {
        if (list[i].kathegorie == "Soziales") {
            const großVater: HTMLElement = document.getElementById("soziales") as HTMLElement;
            list[i].div_erstellen("soziales", i, großVater);
        }
        if (list[i].kathegorie == "Technik") {
            const großVater: HTMLElement = document.getElementById("technik") as HTMLElement;
            list[i].div_erstellen("technik", i, großVater);
        }
        if (list[i].kathegorie == "eine Person") {
            const großVater: HTMLElement = document.getElementById("person") as HTMLElement;
            list[i].div_erstellen("person", i, großVater);
        }
        if (list[i].kathegorie == "mehrere Personen") {
            const großVater: HTMLElement = document.getElementById("personen") as HTMLElement;
            list[i].div_erstellen("personen", i, großVater);
        }
    }

    //A06 Teil 2
    let hideI: HTMLElement | null = document.getElementById("hideTechnik");
    if (hideI)
    hideI.addEventListener("click", hndl_hide);

    let hideII: HTMLElement | null = document.getElementById("hideSoziales");
    if (hideII)
    hideII.addEventListener("click", hndlII_hide);

    let hideIII: HTMLElement | null = document.getElementById("hidePerson");
    if (hideIII)
    hideIII.addEventListener("click", hndlIII_hide);

    let hideIIII: HTMLElement | null = document.getElementById("hidePersonen");
    if (hideIIII)
    hideIIII.addEventListener("click", hndlIIII_hide);

    let showAllI: HTMLElement | null = document.getElementById("renew_I");
    if (showAllI)
    showAllI.addEventListener("click", hndl_showAll);
    let showAllII: HTMLElement | null = document.getElementById("renew_II");
    if (showAllII)
    showAllII.addEventListener("click", hndl_showAll);

    function hndl_hide(_event: Event): void {
        for (let i: number = 0; i < list.length; i++) 
            list[i].hndl_Hide("Technik");
    }

    function hndlII_hide(_event: Event): void {
        for (let i: number = 0; i < list.length; i++) 
            list[i].hndl_Hide("Soziales");
    }

    function hndlIII_hide(_event: Event): void {
        for (let i: number = 0; i < list.length; i++) 
            list[i].hndl_Hide("eine Person");
    }

    function hndlIIII_hide(_event: Event): void {
        for (let i: number = 0; i < list.length; i++) 
            list[i].hndl_Hide("mehrere Personen");
    }

    function hndl_showAll(_event: Event): void {
        for (let i: number = 0; i < list.length; i++) 
            list[i].hndl_Hide("alle sind da...jipieieieie!!");
    }
}