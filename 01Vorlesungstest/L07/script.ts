namespace VorlesungsTest {

    console.log("Start");
    communicate("https://hs-furtwangen.github.io/GIS-SoSe-2020/L07/testjson.json");
    console.log("End");

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response", response);
        let antwort: string = await response.json();
        console.log(antwort);
      }

    interface Person {
    name: string;
    age: number;
    city: string;
    }

    let myObj: Person = {name: "John", age: 31, city: "New York"};
    let myJSON: string = JSON.stringify(myObj);
    let myObj2: Person = JSON.parse(myJSON);
    console.log(myObj2.name) ;
}