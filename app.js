var Car = /** @class */ (function () {
    function Car(num) {
        this.lisens = num;
    }
    Car.prototype.move = function () {
        return this.lisens;
    };
    return Car;
}());
var myCar = new Car(120);
console.log(myCar.move());
