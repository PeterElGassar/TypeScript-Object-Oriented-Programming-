class Player {
  private _health: number;
  private _speed: number;

  setHealth(health: number) {
    if (health < 0) {
      console.log("You can't set health below 0");
      return;
    }
    this._health = health;
  }

  getHealth() {
    return this._health;
  }

  setSpeed(speed: number) {
    if (speed < 0) {
      console.log("You can't set speed below 0");
      return;
    }
    this._speed = speed;
  }

  getSpeed() {
    return this._speed;
  }
}


const mario = new Player();

mario.setHealth(-3);
mario.setHealth(5);
mario.setSpeed(1);

console.log(`Mario has ${mario.getHealth()}/10 health`);
console.log(`Mario has speed ${mario.getSpeed()}.`);

//Why Do We Need Encapsulation in OOP?
// Data Protection & Security – Prevents direct modification of object properties.

// Prevention of Unexpected Changes – Ensures only controlled modifications can be made to the object’s data.