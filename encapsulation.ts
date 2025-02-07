class Car {
  private _name: string;

  constructor(brand: string) {
    this._name = brand;
  }

  move(distance: number): string {
    return `${this._name}: Move ${distance} Kilo`;
  }

  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name
  }
}

class BMW extends Car {
  constructor(name: string) {
    super(name);
  }
}

const bmwCar = new BMW("");
bmwCar.name ='Bmw 320i';
console.log(bmwCar.name);