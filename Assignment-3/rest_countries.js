var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
    var data = JSON.parse(this.response);
    
    for (let i in data) {
        for (let j in data[i]) {
            if (j == "name" || j == "region" || j == "subregion" || j == "population") {
                console.log(j + ":" + data[i][j]);
            }
        }
        console.log("");
    }
};
xhr.send();