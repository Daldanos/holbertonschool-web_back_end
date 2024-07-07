export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    cloneCar() {
        const clonedCar = new Car(this._brand, this._motor, this._color);
        Object.setPrototypeOf(clonedCar, Object.getPrototypeOf(this));
        return clonedCar;
    }

    get brand() {
        return this._brand;
    }

    get motor() {
        return this._motor;
    }

    get color() {
        return this._color;
    }
}
