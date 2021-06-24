//Uber ride class
class uberRide {
    constructor(d, t, m) {
      this.distance = d;
      this.time = t;
      this.typeOfRide = m;
    }
  
    //Get Price estimate of Uber ride based on inputs distance, starting time (24 hr format) and Type of ride (UberX or Uber Black)
    getPriceEstimate() {
      if (this.typeOfRide == "UberX") {
        this.baseFare = 40;
        this.costPerMinute = 3;
        this.costPerKm = 11;
        if ((this.time >= 9 && this.time <= 11) || (this.time >= 15 && time <= 19) || (this.time >= 15 && this.time <= 19)) {
          this.surgePrice = 3;
        } else {
          this.surgePrice = 1;
        }
        this.bookingFee = 10;
        console.log(this.baseFare + ((this.costPerMinute * (this.distance * 5)) + (this.costPerKm * this.distance) * this.surgePrice) + this.bookingFee);
      } else if (this.typeOfRide == "Uber Black") {
        this.baseFare = 40;
        this.costPerMinute = 4;
        this.costPerKm = 14;
        if ((this.time >= 9 && this.time <= 11) || (this.time >= 15 && time <= 19) || (this.time >= 15 && this.time <= 19)) {
          this.surgePrice = 4;
        } else {
          this.surgePrice = 1;
        }
        this.bookingFee = 25;
        console.log(this.baseFare + ((this.costPerMinute * (this.distance * 5)) + (this.costPerKm * this.distance) * this.surgePrice) + this.bookingFee);
      }
    }
  
  }
  
  //Object instance of the uberRide class specifying the distance, starting time (24 hr format) and Type of ride (UberX or Uber Black)
  let ride = new uberRide(14, 9, "Uber Black");
  //Getting the price estimate for the ride by invoking price estimate function
  ride.getPriceEstimate();