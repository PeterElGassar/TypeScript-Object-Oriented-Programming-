class Car {
  lisens: number;
  constructor(num: number) {
    this.lisens = num;
  }

  move(): number {
    return this.lisens;
  }
}
const myCar = new Car(120);
console.log(myCar.move());
