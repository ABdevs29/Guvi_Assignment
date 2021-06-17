var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
    var data = JSON.parse(this.response);
    
    for (let i in data) {
        for (let j in data[i]) {
            if (j == "flag") {
                console.log(data[i][j]);
            }
        }
    }
};
xhr.send();
