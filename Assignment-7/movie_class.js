//Movie Class
class movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
  //Object-1
  let film_1 = new movie();
  film_1.title = "Casino Royale";
  film_1.studio = "Eon Productions";
  film_1.rating = "PG13";
  
  //Object-2
  let film_2 = new movie();
  film_2.title = "King Kong";
  film_2.studio = "Warner Bros";
  film_2.rating = "PG";
  
  //Object-3
  let film_3 = new movie();
  film_3.title = "Maleficent";
  film_3.studio = "Walt Disney";
  film_3.rating = "PG";
  
  //Object-4
  let film_4 = new movie();
  film_4.title = "Finding Nemo";
  film_4.studio = "Pixar";
  film_4.rating = "U";
  
  //getPG Function definition
  function getPG (x) {
    let result = [];
    let j = 0;
    for (let i in x) {
      if (x[i].rating == "PG") {
        result[j] = x[i].title;
        j++
      }
    }
    return result;
  }
  
  //Result
  console.log(getPG([film_1, film_2, film_3, film_4]));