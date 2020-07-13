import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export interface Members {
    id: string;
    login: string;
    passwort: string;
}

export namespace P01 {
    let databaseUrl: string;

    let args: string[] = process.argv.slice(2);
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
            console.log("Path: default" );
            break;
    }

    let chatNachrichten: Mongo.Collection;
    let chatNachrichten2: Mongo.Collection;
    let membersData: Mongo.Collection;

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8101;
    
    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer (_port: number | string): void {
        let server: Http.Server = Http.createServer();
        console.log("i'm alive!");
        server.addListener("request", handleRequest);
        server.listen(port);
    }

    export async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        chatNachrichten = mongoClient.db("HFUChat").collection("Chatroom1");
        chatNachrichten2 = mongoClient.db("HFUChat").collection("Chatroom2");
        membersData = mongoClient.db("HFUChat").collection("Members");
        console.log("Database connection izz da!", chatNachrichten != undefined);
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("'ssss geeeht?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
    
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: string | null = url.pathname;
            console.log(path);
            let speicherString: string = "";
        
            switch (path) {
                case "//signIn":
                    membersData.find().toArray( function(err: Mongo.MongoError, speicher: string[]): void {
                        if (err)
                          throw err; 
                        let neuerName: string|string[]|undefined = "";
                        let neuesPasswort: string|string[]|undefined = "";
                        speicherString += "[";
                        for (let i: number = 0; i < speicher.length; i++) {

                            speicherString += JSON.stringify(speicher[i]);
                            if (i < speicher.length - 1)
                            speicherString += ",";
                        }
                        speicherString += "]";
                        for (let key in url.query ) {
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
                case "//verifizieren":
                    membersData.find().toArray( function(err: Mongo.MongoError, speicher: string[]): void {
                        if (err)
                          throw err;
                        let alterName: string|string[]|undefined = "";
                        let altesPasswort: string|string[]|undefined = "";
                        speicherString += "[";
                        for (let i: number = 0; i < speicher.length; i++) {

                            speicherString += JSON.stringify(speicher[i]);
                            if (i < speicher.length - 1)
                            speicherString += ",";
                        }
                        speicherString += "]";

                        for (let key in url.query ) {
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
                case "//send/1":
                    chatNachrichten.insertOne(url.query);
                    console.log("gespeichert");
                case "//load/1":
                    console.log("im case");
                    chatNachrichten.find().toArray( function(err: Mongo.MongoError, speicher: string[]): void {
                        if (err)
                          throw err; 
                        speicherString += "[";
                        for (let i: number = 0; i < speicher.length; i++) {

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
                    case "//send/2":
                        chatNachrichten2.insertOne(url.query);
                        console.log("gespeichert");
                    case "//load/2":
                    console.log("im case");
                    chatNachrichten2.find().toArray( function(err: Mongo.MongoError, speicher: string[]): void {
                        if (err)
                          throw err; 
                        speicherString += "[";
                        for (let i: number = 0; i < speicher.length; i++) {

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

    function anmeldenAbgleichen(_inDatenbankvorhanden: string, _nameClient: string|string[]|undefined, _passwortClient: string|string[]|undefined): boolean {
        let vorhanden: boolean = false;
        console.log(_nameClient);
        let abgleich: Members[] = JSON.parse(_inDatenbankvorhanden);
        for (let i: number = 0; i < abgleich.length; i++) {
            if (abgleich[i].login == _nameClient && _nameClient != "") {
                vorhanden = true;
            }
        }
        return vorhanden;
    }

    function einloggenAbgleich(_inDatenbankvorhanden: string, _nameClient: string|string[]|undefined, _passwortClient: string|string[]|undefined): boolean {
        let passt: boolean = false;
        let abgleich: Members[] = JSON.parse(_inDatenbankvorhanden);
        for (let i: number = 0; i < abgleich.length ; i++) {
            if (abgleich[i].login == _nameClient && abgleich[i].passwort == _passwortClient) {
                passt = true;
                break;
            }
        }
        return passt;
    }
}