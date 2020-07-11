import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace A11 {
    //let gespeicherteNachrichten: Nachrichten;
    let databaseUrl: string;
    
    //local oder remote
    let args: string[] = process.argv.slice(2);
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
            console.log("Path: default" );
            break;
    }

    export let nachrichten: Mongo.Collection;

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
        nachrichten = mongoClient.db("Formular").collection("Nachrichten");
        console.log("Database connection izz da!", nachrichten != undefined);
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
                case "/retrive":
                    console.log("im case");
                    nachrichten.find().toArray( function(err: Mongo.MongoError, speicher: string[]): void {
                        if (err)
                          throw err; 
                        speicherString += "[";
                        for (let i: number = 0; i < speicher.length; i++) {

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
                    nachrichten.insertOne(url.query);
                    console.log("gespeichert");
                    _response.write("gespeichert");
                    _response.end();
                    break;

                case "/terminieren":
                    nachrichten.find().toArray(function(err: Mongo.MongoError, speicher: String[]): void {
                        if (err)
                        throw err;
                        for (let i: number = 0; i < speicher.length; i++) {
                            speicherString += JSON.stringify(nachrichten.deleteOne(speicher[i]));
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
}

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