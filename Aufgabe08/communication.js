"use strict";
var A08;
(function (A08) {
    //https://testgissose2020lw.herokuapp.com/
    //https://gis-example.herokuapp.com/
    //Server.js
    let formData;
    let versenden = document.getElementById("NachrichtSenden");
    versenden.addEventListener("click", hndl_senden);
    function hndl_senden() {
        serverf("https://testgissose2020lw.herokuapp.com/");
    }
    async function serverf(_url) {
        formData = new FormData(document.forms[0]);
        let url = "" + _url;
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += url + "?" + query.toString();
        let antwort = await fetch(url);
        let antwortanUser = await antwort.text();
        console.log(antwortanUser);
    }
})(A08 || (A08 = {}));
//# sourceMappingURL=communication.js.map