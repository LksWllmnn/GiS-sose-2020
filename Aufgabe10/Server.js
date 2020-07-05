"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A10 = void 0;
const Http = require("http");
const Url = require("url");
var A10;
(function (A10) {
    let server = Http.createServer();
    let port = Number(process.env.PORT);
    if (!port)
        port = 8101;
    //server.addListener("listening", handleListen);
    //mongodb+srv://username:<passwort>@lukas-gis-cluster-k6xk7.mongodb.net/<Lukas-Gis-Cluster>?retryWrites=true&w=majority
    //https://mongodbnetbrowser.herokuapp.com/?u=testuser&p=123456_testuser&a=lukas-gis-cluster-k6xk7.mongodb.net/%3CLukas-Gis-Cluster%3E?retryWrites=true&w=majority&n=Test&c=Students
    console.log("i'm alive!");
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("'ssss geeeht?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            console.log(path);
            if (path == "//html") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br>");
                }
                _response.end();
            }
            if (path == "//Aufgabe08") {
                _response.write(_request.url);
                _response.end();
            }
            if (path == "//json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                _response.end();
            }
            if (path == "/") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br>");
                }
                _response.write("|");
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
            }
        }
        //_response.write("Fuck OFF!!!");
        _response.end();
    }
})(A10 = exports.A10 || (exports.A10 = {}));
//# sourceMappingURL=Server.js.map