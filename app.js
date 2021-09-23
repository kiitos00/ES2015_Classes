// OO Challenge

// Part One
class Vehicle {
  constructor(make, model, year) {
    this.make = make,
      this.model = model,
      this.year = year
  }
  honk() {
    return "Beep.";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

// Part Two
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year),
      this.numWheel = 4;
  }
}

// Part Three

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year),
      this.numWheel = 2;
  }
  revEngine() {
    return "Vroom!!!";
  }
}

// Part Four
class Garage {
  constructor (parkCap) {
    this.vehicles = [];
    this.parkCap = parkCap;
  }
  add (newVehcles) {
    if(!(newVehcles instanceof Vehicle)) {
      return `Only vehicles are allowed in here!`;
    }
    if (this.vehicles.length >= this.parkCap){
      return "Sorry, we are full!"
    }
    this.vehicles.push(newVehcles);
    return `Vehicle added!`
  }
}