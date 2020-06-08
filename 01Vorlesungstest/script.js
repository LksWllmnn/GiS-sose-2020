"use strict";
var VorlesungsTest;
(function (VorlesungsTest) {
    console.log("Start");
    communicate("https://hs-furtwangen.github.io/GIS-SoSe-2020/L07/testjson.json");
    console.log("End");
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        let antwort = await response.json();
        console.log(antwort);
    }
    let myObj = { name: "John", age: 31, city: "New York" };
    let myJSON = JSON.stringify(myObj);
    let myObj2 = JSON.parse(myJSON);
    console.log(myObj2.name);
})(VorlesungsTest || (VorlesungsTest = {}));
//# sourceMappingURL=script.js.map