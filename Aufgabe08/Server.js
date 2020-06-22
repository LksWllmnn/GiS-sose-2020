"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
    //starten des servers
    console.log("Starting server");
    //festlegen unter welchem port für localhost server erreichbar ist
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    //erstellen des servers
    let server = Http.createServer();
    //hinzufügen einer funktion um anfragen abzufangen
    server.addListener("request", handleRequest);
    //hinzufügen einer funktion um zuzuhören (geht glaub auch ohne die funktion)
    server.addListener("listening", handleListen);
    //ab jetzt wird zugehört
    server.listen(port);
    function handleListen() {
        //sobald zugehrt wird kommen diese kommentage (ohne das jemand auf den server zugreift)
        console.log("Listening");
        console.log("...still Listening");
        console.log("...i bims eins konsole log vom 22.06 nachdem ich ne schelle bekommen habe ...lul");
    }
    function handleRequest(_request, _response) {
        //sobald was reinkommt melden sich die beiden ersten kommentare, parameter ind einmal die url die reinkommt und die url die raus geht
        console.log("I hear voices!");
        console.log("...i bims eins konsole log vom 22.06 nachdem ich ne schelle bekommen habe ...lul");
        //verarbeitung
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //beschreibung der rausgehenden url (kommunikation mit client wird erstellt)
        _response.write(_request.url);
        //antwort wird hier abgeschickt
        _response.end();
        //!kommentare und conole log sind erst am 22.06 dazu gekommen als pw den hinweis geschrieben hatte!
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=Server.js.map