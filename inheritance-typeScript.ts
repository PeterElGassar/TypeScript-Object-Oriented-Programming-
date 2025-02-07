class Car {
  modelName: string;
  protected license: string = "abc-123";
  
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

  showLicense(): string {
    return this.license;
  }
}

class Toyota extends Car {
  constructor(name: string) {
    super(name);
  }

  move(distance: number = 10): string {
    return super.move(distance);
  }

  showLicense(): string {
   return this.license;
 }
}

const bmwCar = new BMW("Bmw 523i");
console.log(bmwCar.modelName);
console.log(bmwCar.move(20));
console.log(bmwCar);
