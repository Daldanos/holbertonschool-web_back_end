// 10-car.js
const brand = Symbol('brand');
const motor = Symbol('motor');
const color = Symbol('color');

export default class Car {
    constructor(brand, motor, color) {
        this[brand] = brand;
        this[motor] = motor;
        this[color] = color;
    }

    cloneCar() {
        return new Car(this[brand], this[motor], this[color]);
    }
}
