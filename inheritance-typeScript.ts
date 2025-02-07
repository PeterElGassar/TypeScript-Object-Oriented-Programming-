class Car {
  modelName: string;
  constructor(brand: string) {
    this.modelName = brand;
  }

  move(distance: number): string {
    return `${this.modelName}: Move ${distance} Kilo`;
  }
}

class BMW extends Car {
  constructor(name: string) {
    super(name);
  }

  move(distance: number = 10): string {
    return super.move(distance);
  }
}

class Toyota extends Car {
  constructor(name: string) {
    super(name);
  }

  move(distance: number = 10): string {
    return super.move(distance);
  }
}

const bmwCar = new BMW("Bmw 523i");
console.log(bmwCar.modelName);
console.log(bmwCar.move(20));

const toyotaCar = new Toyota("Land Cruiser");
console.log(toyotaCar.modelName);
console.log(toyotaCar.move(130));
