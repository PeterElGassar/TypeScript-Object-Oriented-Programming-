class Animal {
  hunger: number;
  health: number;
  private coordX: number;
  private coordY: number;

  setCoorderX(value: number) {
    this.coordX = value;
  }

  setCoorderY(value: number) {
    this.coordY = value;
  }

  eat() {
    console.log("I'm eating");
  }

  sleep() {
    console.log("I'm sleep");
  }

  move() {
    console.log(`I'm moving from coord ${this.coordX}, ${this.coordY}`);
  }

  makeNoise() {
    console.log("Make noise..");
  }
}

class Canine extends Animal {}

class Dog extends Canine {
  // here I'm totaly override the makeNoise() method
  makeNoise() {
    console.log("Bark Bark Bark");
  }
  // but here I'm just extend it move()
  move() {
    console.log("getting up on all four paws");
    super.move(); //
  }
}

const dog = new Dog();
dog.makeNoise();
dog.setCoorderX(4);
dog.setCoorderY(56);
dog.move();
