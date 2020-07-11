"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A11 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var A11;
(function (A11) {
    //let gespeicherteNachrichten: Nachrichten;
    let databaseUrl;
    //local oder remote
    let args = process.argv.slice(2);
    switch (args[0]) {
        case "local":
            databaseUrl = "mongodb://localhost:27017";
            console.log("Path:" + args[0]);
            break;
        case "remote":
            databaseUrl = "mongodb+srv://lukasichlwmann:auJbZYGmsCCePLSm@lukas-gis-cluster-k6xk7.mongodb.net/Formular?retryWrites=true&w=majority";
            console.log("Path:" + args[0]);
            break;
        default:
            databaseUrl = "mongodb://localhost:27017";
            console.log("Path: default");
            break;
    }
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
        A11.nachrichten = mongoClient.db("Formular").collection("Nachrichten");
        console.log("Database connection izz da!", A11.nachrichten != undefined);
    }
    A11.connectToDatabase = connectToDatabase;
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
                case "/retrive":
                    console.log("im case");
                    A11.nachrichten.find().toArray(function (err, speicher) {
                        if (err)
                            throw err;
                        speicherString += "[";
                        for (let i = 0; i < speicher.length; i++) {
                            speicherString += JSON.stringify(speicher[i]);
                            if (i < speicher.length - 1)
                                speicherString += ",";
                        }
                        speicherString += "]";
                        console.log(speicherString);
                        _response.write(speicherString);
                        _response.end();
                    });
                    console.log(speicherString);
                    console.log("aus dem case");
                    break;
                case "/store":
                    A11.nachrichten.insertOne(url.query);
                    console.log("gespeichert");
                    _response.write("gespeichert");
                    _response.end();
                    break;
                case "/terminieren":
                    A11.nachrichten.find().toArray(function (err, speicher) {
                        if (err)
                            throw err;
                        for (let i = 0; i < speicher.length; i++) {
                            speicherString += JSON.stringify(A11.nachrichten.deleteOne(speicher[i]));
                        }
                    });
                    console.log("alles wird gelöscht!");
                    _response.write("terminiert");
                    _response.end();
                    break;
                default:
                    _response.write("Fehler!");
                    _response.end();
                    break;
            }
        }
    }
    /*function retriveOrders(_speicherString: string): string {
        
        nachrichten.find().toArray( function(err: Mongo.MongoError, speicher: string[]): void {
            if (err)
              throw err;
            
            for (let i: number = 0; i < speicher.length; i++) {
                _speicherString += JSON.stringify(speicher[i]);
                _speicherString += ",";
            }
            console.log(_speicherString);
        });
        return (_speicherString);
    }
    
    function deleteAll(_speicherString: string): string {
        
        
    }*/
})(A11 = exports.A11 || (exports.A11 = {}));
//server.addListener("listening", handleListen);
//mongodb+srv://username:<passwort>@lukas-gis-cluster-k6xk7.mongodb.net/<Lukas-Gis-Cluster>?retryWrites=true&w=majority
//https://mongodbnetbrowser.herokuapp.com/?u=testuser&p=123456_testuser&a=lukas-gis-cluster-k6xk7.mongodb.net/%3CLukas-Gis-Cluster%3E?retryWrites=true&w=majority&n=Test&c=Students
//mongodb+srv://<lukasichlwmann>:<auJbZYGmsCCePLSm>@lukas-gis-cluster-k6xk7.mongodb.net/<Lukas-Gis-Cluster>?retryWrites=true&w=majority
/*if (args[0] == "local")
    databaseUrl = "mongodb://localhost27017";
else
    databaseUrl = "mongodb+srv://<lukasichlwmann>:<auJbZYGmsCCePLSm>@lukas-gis-cluster-k6xk7.mongodb.net/<Formular>?retryWrites=true&w=majority";*/
/*interface Nachricht {
    [type: string]: string | string[] | undefined;
}*/ 
//# sourceMappingURL=Server.js.map