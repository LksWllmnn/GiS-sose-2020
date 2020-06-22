import * as Http from "http";
import * as Url from "url";

export namespace A09 {
    let server: Http.Server = Http.createServer();

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8101;

    //server.addListener("listening", handleListen);

    console.log("i'm alive!");
    server.listen(port);
    server.addListener("request", handleRequest);
    

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("'ssss geeeht?");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: string | null = url.pathname;
            console.log(path);
            if (path == "/html") {
                for (let key in url.query ) {
                    _response.write(key + ":" + url.query[key] + "<br>");
                }
                _response.end();
            }
            if (path == "/json") {
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
                _response.end();
            }
            if (path == "/") {
                for (let key in url.query ) {
                    _response.write(key + ":" + url.query[key] + "<br>");
                }
                _response.write("|");
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
            }
        }
        //_response.write("Fuck OFF!!!");
        _response.end();
    }
}