//Circle Class 
class circle {
  constructor(r) {
    this.radius = r;
  }

  getArea() {
    console.log(Math.round(Math.PI * Math.pow(this.radius, 2)));
  }

  getCircumference(r) {
    console.log(Math.round(2 * Math.PI * this.radius));
  }
}

let c1 = new circle(10);

console.log(c1.radius); //Prints radius of circle
c1.getArea(); // Prints Area of circle
c1.getCircumference(); //Prints circumference of circle