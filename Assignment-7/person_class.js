//Class Person with hold details
class person{
    constructor(name, age, gender, occupation, citizenship, height, weight) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.occupation = occupation;
      this.citizenship = citizenship;
      this.height = height;
      this.weight = weight;
    }
  }
  
  //Objects or instances created for the Person 
  let p1 = new person("Ajay", 28, "Male", "Software Developer", "Indian", "182 cms", "85 Kgs");
  let p2 = new person("Jess", 31, "Female", "iOS Developer", "American", "171 cms", "61 Kgs");
  let p3 = new person("Zoya", 24, "Female", "UI/UX Designer", "Indian", "156 cms", "52 Kgs");
  let p4 = new person("Andrei", 26, "Male", "Construction Engineer", "Russian", "190 cms", "79 Kgs");
  
  //Function created for filtering Indian citizens names from the above Person objects
  function getIndianCitizen (arr) {
    let result = "";
    for (let i in arr) {
      if (arr[i].citizenship == "Indian") {
        result += arr[i].name + " ";
      }
    }
    console.log(result.trim());
  }
  
  //Function call
  getIndianCitizen([p1, p2, p3, p4]);
  
  