//Get all the countries from Asia continent /region using Filter function
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
    var data = JSON.parse(this.response);
    
    var res = data.filter (el => {
        if (el.region == "Asia") {
            return el;
        }
    });
    console.log(res);
};
xhr.send();


//Get all the countries with a population of less than 2 lakhs using Filter function
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
    var data = JSON.parse(this.response);
    
    var res = data.filter (el => {
        if (el.population < 200000) {
            return el;
        }
    });
    console.log(res);
};
xhr.send();


//Print the following details name, capital, flag using forEach function
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
    var data = JSON.parse(this.response);
    
    data.forEach(element => {
        console.log(`name: ${element.name}, capital: ${element.capital}, flag: ${element.flag}`);
        console.log("");
    }); 
};
xhr.send();


//Print the total population of countries using reduce function 
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
    var data = JSON.parse(this.response);
    
    var res = data.reduce(function (total, el) {
        return total + parseInt(el.population);
    }, 0);
    console.log(res);
};
xhr.send();


//Print the country which use US Dollars as currency.
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
    var data = JSON.parse(this.response);
    
    var res = data.filter (el => {
        if (el.currencies[0].code == "USD") {
            return true;
        }
    });
    console.log(res);
};
xhr.send();
