namespace A07_I {
    export interface Artikel {
        kathegorie: string;
        bild: string;
        name: string;
        beschreibung: string;
        beschreibeung2: string;
        beschreibung3: string;
        beschreibung4: string;
        preis: number;
    }

    export let list: Artikel[] = [
        { kathegorie: "Soziales",           bild: "Sand.PNG",           name: "Sand für Leute in der Wüste", beschreibung: "feinster Qualitätssand", beschreibeung2: "absolut unnötig", beschreibung3: "nicht nur im Alltag sondern auch in der Berufs-Edition", beschreibung4: "mit Sicherheit nicht hilfreich", preis: 50.00 } ,
        { kathegorie: "Soziales",           bild: "larry.PNG",          name: "furzender Larry", beschreibung: "ideal für Aufzüge", beschreibeung2: "garantierter Hass bei allen Mitarbeitern", beschreibung3: "mit extra Chilli-Flavour", beschreibung4: "ungeeignet für Leute die Fekal-Humor mögen", preis: 800.00 } ,
        { kathegorie: "Soziales",           bild: "Küche.PNG",          name: "unaufgeräumte Arbeitsküche", beschreibung: "wenn Sie das nicht sowieso schon haben", beschreibeung2: "Alle werden sich davor ekeln...und niemand wird es weg räumen", beschreibung3: "bei jeder Besprechung wird angesprochen warum es eigentlich so unordentlich ist", beschreibung4: "ein Spaß für das ganze Büro", preis: 200.00 },
        { kathegorie: "Soziales",           bild: "Käse.PNG",           name: "stinkender Käse", beschreibung: "ganzer Kühlschrank stinkt", beschreibeung2: "man vergisst es immer wieder bis man vorm Kühlschrank steht", beschreibung3: "man vergisst es nicht wenn der ganze flur stinkt", beschreibung4: "niemand räumt ihn weg", preis: 10.00 },
        { kathegorie: "Soziales",           bild: "Leistungstest.PNG",  name: "unnötiger Leistungstest", beschreibung: "wir bieten ihnen einen konzipierten Leistungstest auf den ihre Mitarbeiter bestimt kein Bock haben", beschreibeung2: "Sportübungen wie: handstand, Purzelbaum und Hochsprung", beschreibung3: "charakter-Tests: we schnell kann man einen liter bier trinken", beschreibung4: "nicht-lachen-Test bei try not to laugh challenges", preis: 50.00 },
        { kathegorie: "Soziales",           bild: "kein_Kaffee.PNG",    name: "kein Kaffee mehr", beschreibung: "lässt sich gut kombinieren mit unserem Produkt kalter kaffee aus der anderen Sparte", beschreibeung2: "kaffee ist explizit verboten", beschreibung3: "wer mag schon kaffee?", beschreibung4: "kakao-Pflicht", preis: 0.00 },
        { kathegorie: "Technik",            bild: "klo.PNG",            name: "verstopftes Klo", beschreibung: "...was soll man dazu groß sagen...", beschreibeung2: "wenn man halt denkt,", beschreibung3: "da liegt was in der luft...", beschreibung4: "is halt Kacke", preis: 50.00 },
        { kathegorie: "Technik",            bild: "Klimaanlage.PNG",    name: "kaputte Klimaanlage", beschreibung: "warm im sommer", beschreibeung2: "kalt im Winter...so wie es sein muss", beschreibung3: "Die Mitarbeiter werden sich freuen", beschreibung4: "sie können auch einen larry davor stellen...", preis: 29.00 },
        { kathegorie: "Technik",            bild: "Drucker.PNG",        name: "kaputter Drucker", beschreibung: "Von DPD geliefert", beschreibeung2: "garantiert ohne Garantie", beschreibung3: "Hausmeister hassen diesen Trick", beschreibung4: "Leute kaufen dazu gern den furzenden Larry", preis: 19.00 },
        { kathegorie: "Technik",            bild: "CD.PNG",             name: "alle USB-Sticks mit CDs austauschen", beschreibung: "back to the ...rolls", beschreibeung2: "endlich wieder handfester speicherplatz", beschreibung3: "ganz klar auf welchem rohling was ist...", beschreibung4: "warum beschriftet eigentlich niemand die dinger", preis: 69.00 },
        { kathegorie: "Technik",            bild: "Vista.PNG",          name: "Windows-Vista Update", beschreibung: "für effektives arbeiten", beschreibeung2: "eindeutiger fortschit in der übersichtlichkeit", beschreibung3: "garantiert kein problem bei den updates", beschreibung4: "beste erfindung von Microsoft für Ihren Arbeitsalltag...lul", preis: 299.00 },
        { kathegorie: "Technik",            bild: "Maus.PNG",           name: "keine Mäuse mehr", beschreibung: "alle arbeiter bekommen nurnoch joysticks oder laptop touchpats", beschreibeung2: "ich hab keine ahnung wies läuft, stell ich mir aber stressig vor", beschreibung3: "...gibts überhaupt noch joysticks?", beschreibung4: "controller sind auch ok", preis: 5.00 },
        { kathegorie: "eine Person",        bild: "Boden.PNG",          name: "klebender Boden", beschreibung: "ideal für Socken", beschreibeung2: "oder Barfuß", beschreibung3: "klebt sehr", beschreibung4: "am besten teppich drüber", preis: 50.00 },
        { kathegorie: "eine Person",        bild: "Techniker.PNG",      name: "nicht kommender Techniker", beschreibung: "kommt irgend wann zwischen 0 und 24 uhr", beschreibeung2: "kommt nicht zu früh oder zu spät sondern genau dann wann er nicht kommen will", beschreibung3: "hat sein werkzeug vergessen", beschreibung4: "aber macht pünktlich vesper pause", preis: 69.69 },
        { kathegorie: "eine Person",        bild: "Soße.PNG",           name: "tropfende Soße beim Döner-Essen", beschreibung: "riecht nach knoblauch", beschreibeung2: "die Jacke dann auch", beschreibung3: "passend für keinen Anlass", beschreibung4: "Döner schmeckt trotzdem", preis: 50.00 },
        { kathegorie: "eine Person",        bild: "Wasserhahn.PNG",     name: "alkohol im leitungswasser", beschreibung: "aus dem wasserhahn kommt nurnoch wasser mit 10% alkohol gehalt", beschreibeung2: "ungut für leute die direkt aus dem wasserhahn trinken", beschreibung3: "ungut für familien", beschreibung4: "...das geschirr ist immer schon desinfiziert...", preis: 24.7 },
        { kathegorie: "eine Person",        bild: "BBQ.PNG",            name: "alle duschgels mit BBQ soße ersetzen", beschreibung: "vielleicht gut für die Haare", beschreibeung2: "manche mögen den geruch", beschreibung3: "beim grillen weiß man nicht ob man in die hand beißen soll oder das fleisch", beschreibung4: "stell ich mir stressig vor", preis: 33.00 },
        { kathegorie: "eine Person",        bild: "Steintafel.PNG",     name: "alle Papierblöcke werden mit Steintafeln vertauscht", beschreibung: "gut für den Bizeps", beschreibeung2: "schlecht für den platz", beschreibung3: "evtl. schlecht für den Transport", beschreibung4: "könnte teuer werden", preis: 999.99 },
        { kathegorie: "mehrere Personen",   bild: "Sand.PNG",           name: "Sand für Leute in der Wüste", beschreibung: "feinster Qualitätssand", beschreibeung2: "absolut unnötig", beschreibung3: "der Klassiker", beschreibung4: "mit Sicherheit nicht hilfreich", preis: 14.99 },
        { kathegorie: "mehrere Personen",   bild: "Flasche.PNG",        name: "Leere Wasserflasche für Verdurstende", beschreibung: "passend zu 'Sand für Leute in der Wüste'", beschreibeung2: "die verschwindende Hoffnung raubt auch noch die letzte Kraft in der Wüste", beschreibung3: "vitalisiert das Gemüt, nicht", beschreibung4: "alles schmeckt süßer als nichts...ach kp", preis: 6.99 },
        { kathegorie: "mehrere Personen",   bild: "Kaffee.PNG",         name: "kalter Kaffe", beschreibung: "is kalt", beschreibeung2: "ungeeignet für leute die kalten kaffee mögen", beschreibung3: "ich hab eigentlich keine ahnung...", beschreibung4: "ich mag ja eig eh kein kaffee", preis: 50000.00 },
        { kathegorie: "mehrere Personen",   bild: "Vogel.PNG",          name: "aggressiver Vogel", beschreibung: "ein trainerter Vogel der eine spezielle person angreift", beschreibeung2: "ist aggressiv", beschreibung3: "het schlechte verdauung", beschreibung4: "bei aufpreis kann er reden", preis: 2004.00 },
        { kathegorie: "mehrere Personen",   bild: "linke_Schuhe.PNG",   name: "nurnoch linke schuhe", beschreibung: "alle rechten schuhe werden durch das gleiche modell aber eben der falschen seite ersetzt", beschreibeung2: "garantiert nervenaufreibend für leute die öfters zuspät kommen", beschreibung3: "garantiert nervenaufreibend für eigentlich so ziemlich jeden", beschreibung4: "...andererseits...wir haben dann lauter paare mit nurnoch rechten schuhen...", preis: 250.00 },
        { kathegorie: "mehrere Personen",   bild: "Handy_Vertrag.PNG",  name: "handy-vertrag kündigen", beschreibung: "wir kündigen für sie irgend wann ihren handyvertrag", beschreibeung2: "einfach so wenn sie nicht damit rechnen", beschreibung3: "am besten morgens vor dem aufstehen", beschreibung4: "und melden sie bei aldi talk an...gibts das noch?", preis: 66.00 }
    ];

    export let jSONListe: string = JSON.stringify(list);
    console.log(jSONListe);
}