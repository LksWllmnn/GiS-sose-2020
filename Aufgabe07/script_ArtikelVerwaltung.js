"use strict";
var A07;
(function (A07) {
    let list = [
        new A07.ArtikelClass("Soziales", "Sand.PNG", "Sand für Leute in der Wüste", "feinster Qualitätssand", "absolut unnötig", "nicht nur im Alltag sondern auch in der Berufs-Edition", "mit Sicherheit nicht hilfreich", 50.00),
        new A07.ArtikelClass("Soziales", "larry.PNG", "furzender Larry", "ideal für Aufzüge", "garantierter Hass bei allen Mitarbeitern", "mit extra Chilli-Flavour", "ungeeignet für Leute die Fekal-Humor mögen", 800.00),
        new A07.ArtikelClass("Soziales", "Küche.PNG", "unaufgeräumte Arbeitsküche", "wenn Sie das nicht sowieso schon haben", "Alle werden sich davor ekeln...und niemand wird es weg räumen", "bei jeder Besprechung wird angesprochen warum es eigentlich so unordentlich ist", "ein Spaß für das ganze Büro", 200.00),
        new A07.ArtikelClass("Soziales", "Käse.PNG", "stinkender Käse", "ganzer Kühlschrank stinkt", "man vergisst es immer wieder bis man vorm Kühlschrank steht", "man vergisst es nicht wenn der ganze flur stinkt", "niemand räumt ihn weg", 10.00),
        new A07.ArtikelClass("Soziales", "Leistungstest.PNG", "unnötiger Leistungstest", "wir bieten ihnen einen konzipierten Leistungstest auf den ihre Mitarbeiter bestimt kein Bock haben", "Sportübungen wie: handstand, Purzelbaum und Hochsprung", "charakter-Tests: we schnell kann man einen liter bier trinken", "nicht-lachen-Test bei try not to laugh challenges", 50.00),
        new A07.ArtikelClass("Soziales", "kein_Kaffee.PNG", "kein Kaffee mehr", "lässt sich gut kombinieren mit unserem Produkt kalter kaffee aus der anderen Sparte", "kaffee ist explizit verboten", "wer mag schon kaffee?", "kakao-Pflicht", 0.00),
        new A07.ArtikelClass("Technik", "klo.PNG", "verstopftes Klo", "...was soll man dazu groß sagen...", "wenn man halt denkt,", "da liegt was in der luft...", "is halt Kacke", 50.00),
        new A07.ArtikelClass("Technik", "Klimaanlage.PNG", "kaputte Klimaanlage", "warm im sommer", "kalt im Winter...so wie es sein muss", "Die Mitarbeiter werden sich freuen", "sie können auch einen larry davor stellen...", 29.00),
        new A07.ArtikelClass("Technik", "Drucker.PNG", "kaputter Drucker", "Von DPD geliefert", "garantiert ohne Garantie", "Hausmeister hassen diesen Trick", "Leute kaufen dazu gern den furzenden Larry", 19.00),
        new A07.ArtikelClass("Technik", "CD.PNG", "alle USB-Sticks mit CDs austauschen", "back to the ...rolls", "endlich wieder handfester speicherplatz", "ganz klar auf welchem rohling was ist...", "warum beschriftet eigentlich niemand die dinger", 69.00),
        new A07.ArtikelClass("Technik", "Vista.PNG", "Windows-Vista Update", "für effektives arbeiten", "eindeutiger fortschit in der übersichtlichkeit", "garantiert kein problem bei den updates", "beste erfindung von Microsoft für Ihren Arbeitsalltag...lul", 299.00),
        new A07.ArtikelClass("Technik", "Maus.PNG", "keine Mäuse mehr", "alle arbeiter bekommen nurnoch joysticks oder laptop touchpats", "ich hab keine ahnung wies läuft, stell ich mir aber stressig vor", "...gibts überhaupt noch joysticks?", "controller sind auch ok", 5.00),
        new A07.ArtikelClass("eine Person", "Boden.PNG", "klebender Boden", "ideal für Socken", "oder Barfuß", "klebt sehr", "am besten teppich drüber", 50.00),
        new A07.ArtikelClass("eine Person", "Techniker.PNG", "nicht kommender Techniker", "kommt irgend wann zwischen 0 und 24 uhr", "kommt nicht zu früh oder zu spät sondern genau dann wann er nicht kommen will", "hat sein werkzeug vergessen", "aber macht pünktlich vesper pause", 69.69),
        new A07.ArtikelClass("eine Person", "Soße.PNG", "tropfende Soße beim Döner-Essen", "riecht nach knoblauch", "die Jacke dann auch", "passend für keinen Anlass", "Döner schmeckt trotzdem", 50.00),
        new A07.ArtikelClass("eine Person", "Wasserhahn.PNG", "alkohol im leitungswasser", "aus dem wasserhahn kommt nurnoch wasser mit 10% alkohol gehalt", "ungut für leute die direkt aus dem wasserhahn trinken", "ungut für familien", "...das geschirr ist immer schon desinfiziert...", 24.7),
        new A07.ArtikelClass("eine Person", "BBQ.PNG", "alle duschgels mit BBQ soße ersetzen", "vielleicht gut für die Haare", "manche mögen den geruch", "beim grillen weiß man nicht ob man in die hand beißen soll oder das fleisch", "stell ich mir stressig vor", 33.00),
        new A07.ArtikelClass("eine Person", "Steintafel.PNG", "alle Papierblöcke werden mit Steintafeln vertauscht", "gut für den Bizeps", "schlecht für den platz", "evtl. schlecht für den Transport", "könnte teuer werden", 999.99),
        new A07.ArtikelClass("mehrere Personen", "Sand.PNG", "Sand für Leute in der Wüste", "feinster Qualitätssand", "absolut unnötig", "der Klassiker", "mit Sicherheit nicht hilfreich", 14.99),
        new A07.ArtikelClass("mehrere Personen", "Flasche.PNG", "Leere Wasserflasche für Verdurstende", "passend zu 'Sand für Leute in der Wüste'", "die verschwindende Hoffnung raubt auch noch die letzte Kraft in der Wüste", "vitalisiert das Gemüt, nicht", "alles schmeckt süßer als nichts...ach kp", 6.99),
        new A07.ArtikelClass("mehrere Personen", "Kaffee.PNG", "kalter Kaffe", "is kalt", "ungeeignet für leute die kalten kaffee mögen", "ich hab eigentlich keine ahnung...", "ich mag ja eig eh kein kaffee", 50000.00),
        new A07.ArtikelClass("mehrere Personen", "Vogel.PNG", "aggressiver Vogel", "ein trainerter Vogel der eine spezielle person angreift", "ist aggressiv", "het schlechte verdauung", "bei aufpreis kann er reden", 2004.00),
        new A07.ArtikelClass("mehrere Personen", "linke_Schuhe.PNG", "nurnoch linke schuhe", "alle rechten schuhe werden durch das gleiche modell aber eben der falschen seite ersetzt", "garantiert nervenaufreibend für leute die öfters zuspät kommen", "garantiert nervenaufreibend für eigentlich so ziemlich jeden", "...andererseits...wir haben dann lauter paare mit nurnoch rechten schuhen...", 250.00),
        new A07.ArtikelClass("mehrere Personen", "Handy_Vertrag.PNG", "handy-vertrag kündigen", "wir kündigen für sie irgend wann ihren handyvertrag", "einfach so wenn sie nicht damit rechnen", "am besten morgens vor dem aufstehen", "und melden sie bei aldi talk an...gibts das noch?", 66.00)
    ];
    let jSONListe = JSON.stringify(list);
    A07.liste = JSON.parse(jSONListe);
    A07.einkaufArtikel = [];
    let jSONListe2 = JSON.stringify(A07.einkaufArtikel);
    A07.einkaufArtikelAnzeige = JSON.parse(jSONListe2);
})(A07 || (A07 = {}));
//# sourceMappingURL=script_ArtikelVerwaltung.js.map