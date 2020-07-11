import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

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
                case "/signIn":
                    membersData.find().toArray( function(err: Mongo.MongoError, speicher: string[]): void {
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
                    break;
                case "/einschreiben":
                    membersData.insertOne(url.query);
                    console.log("Neuer Member angelegt");
                    break;
                case "/verifizieren":
                    membersData.find().toArray( function(err: Mongo.MongoError, speicher: string[]): void {
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
                    break;
                case "/send":
                    chatNachrichten.insertOne(url.query);
                    console.log("gespeichert");
                case "/load":
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
                    case "/load/Chat2":
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
                        console.log(speicherString);
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
}