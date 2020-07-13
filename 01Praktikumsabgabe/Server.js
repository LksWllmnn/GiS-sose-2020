"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P01 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var P01;
(function (P01) {
    let databaseUrl;
    let args = process.argv.slice(2);
    switch (args[0]) {
        case "local":
            databaseUrl = "mongodb://localhost:27017";
            console.log("Path:" + args[0]);
            break;
        case "remote":
            databaseUrl = "mongodb+srv://lukasichlwmann:auJbZYGmsCCePLSm@lukas-gis-cluster-k6xk7.mongodb.net/HFUChat?retryWrites=true&w=majority";
            console.log("Path:" + args[0]);
            break;
        default:
            databaseUrl = "mongodb://localhost:27017";
            console.log("Path: default");
            break;
    }
    let chatNachrichten;
    let chatNachrichten2;
    let membersData;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8101;
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("i'm alive!");
        server.addListener("request", handleRequest);
        server.listen(port);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        chatNachrichten = mongoClient.db("HFUChat").collection("Chatroom1");
        chatNachrichten2 = mongoClient.db("HFUChat").collection("Chatroom2");
        membersData = mongoClient.db("HFUChat").collection("Members");
        console.log("Database connection izz da!", chatNachrichten != undefined);
    }
    P01.connectToDatabase = connectToDatabase;
    function handleRequest(_request, _response) {
        console.log("'ssss geeeht?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            console.log(path);
            let speicherString = "";
            switch (path) {
                case "/signIn":
                    membersData.find().toArray(function (err, speicher) {
                        if (err)
                            throw err;
                        let neuerName = "";
                        let neuesPasswort = "";
                        speicherString += "[";
                        for (let i = 0; i < speicher.length; i++) {
                            speicherString += JSON.stringify(speicher[i]);
                            if (i < speicher.length - 1)
                                speicherString += ",";
                        }
                        speicherString += "]";
                        for (let key in url.query) {
                            if (key == "login")
                                neuerName = url.query[key];
                            if (key == "passwort")
                                neuesPasswort = url.query[key];
                        }
                        if (anmeldenAbgleichen(speicherString, neuerName, neuesPasswort))
                            _response.write("Name schon vergeben");
                        else {
                            _response.write("Anmeldung akzeptiert");
                            membersData.insertOne(url.query);
                            console.log("Neuer Member angelegt");
                        }
                        _response.end();
                    });
                    break;
                case "/verifizieren":
                    membersData.find().toArray(function (err, speicher) {
                        if (err)
                            throw err;
                        let alterName = "";
                        let altesPasswort = "";
                        speicherString += "[";
                        for (let i = 0; i < speicher.length; i++) {
                            speicherString += JSON.stringify(speicher[i]);
                            if (i < speicher.length - 1)
                                speicherString += ",";
                        }
                        speicherString += "]";
                        for (let key in url.query) {
                            if (key == "login")
                                alterName = url.query[key];
                            if (key == "passwort")
                                altesPasswort = url.query[key];
                        }
                        if (!einloggenAbgleich(speicherString, alterName, altesPasswort))
                            _response.write("da passt was nicht");
                        else {
                            _response.write("Erfolgreich eingeloggt");
                        }
                        _response.end();
                    });
                    break;
                case "/send/1":
                    chatNachrichten.insertOne(url.query);
                    console.log("gespeichert");
                case "/load/1":
                    console.log("im case");
                    chatNachrichten.find().toArray(function (err, speicher) {
                        if (err)
                            throw err;
                        speicherString += "[";
                        for (let i = 0; i < speicher.length; i++) {
                            speicherString += JSON.stringify(speicher[i]);
                            if (i < speicher.length - 1)
                                speicherString += ",";
                        }
                        speicherString += "]";
                        //console.log(speicherString);
                        _response.write(speicherString);
                        _response.end();
                    });
                    console.log(speicherString);
                    break;
                case "/send/2":
                    chatNachrichten2.insertOne(url.query);
                    console.log("gespeichert");
                case "/load/2":
                    console.log("im case");
                    chatNachrichten2.find().toArray(function (err, speicher) {
                        if (err)
                            throw err;
                        speicherString += "[";
                        for (let i = 0; i < speicher.length; i++) {
                            speicherString += JSON.stringify(speicher[i]);
                            if (i < speicher.length - 1)
                                speicherString += ",";
                        }
                        speicherString += "]";
                        //console.log(speicherString);
                        _response.write(speicherString);
                        _response.end();
                    });
                    console.log(speicherString);
                    break;
                default:
                    _response.write("Fehler");
                    break;
            }
        }
    }
    function anmeldenAbgleichen(_inDatenbankvorhanden, _nameClient, _passwortClient) {
        let vorhanden = false;
        console.log(_nameClient);
        let abgleich = JSON.parse(_inDatenbankvorhanden);
        for (let i = 0; i < abgleich.length; i++) {
            if (abgleich[i].login == _nameClient && _nameClient != "") {
                vorhanden = true;
            }
        }
        return vorhanden;
    }
    function einloggenAbgleich(_inDatenbankvorhanden, _nameClient, _passwortClient) {
        let passt = false;
        let abgleich = JSON.parse(_inDatenbankvorhanden);
        for (let i = 0; i < abgleich.length; i++) {
            if (abgleich[i].login == _nameClient && abgleich[i].passwort == _passwortClient) {
                passt = true;
                break;
            }
        }
        return passt;
    }
})(P01 = exports.P01 || (exports.P01 = {}));
//# sourceMappingURL=Server.js.map