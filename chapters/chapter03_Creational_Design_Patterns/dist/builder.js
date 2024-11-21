"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteCarBuilder = exports.Car = exports.Wheels = exports.Interior = exports.BodyStyle = exports.Transmission = exports.Engine = void 0;
var Engine = /** @class */ (function () {
    function Engine() {
    }
    return Engine;
}());
exports.Engine = Engine;
var Transmission = /** @class */ (function () {
    function Transmission() {
    }
    return Transmission;
}());
exports.Transmission = Transmission;
var BodyStyle = /** @class */ (function () {
    function BodyStyle() {
    }
    return BodyStyle;
}());
exports.BodyStyle = BodyStyle;
var Interior = /** @class */ (function () {
    function Interior() {
    }
    return Interior;
}());
exports.Interior = Interior;
var Wheels = /** @class */ (function () {
    function Wheels() {
    }
    return Wheels;
}());
exports.Wheels = Wheels;
var Car = /** @class */ (function () {
    function Car(engine, transmission, bodyStyle, interior, wheels) {
        Object.defineProperty(this, "engine", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: engine
        });
        Object.defineProperty(this, "transmission", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: transmission
        });
        Object.defineProperty(this, "bodyStyle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: bodyStyle
        });
        Object.defineProperty(this, "interior", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: interior
        });
        Object.defineProperty(this, "wheels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: wheels
        });
    }
    return Car;
}());
exports.Car = Car;
var ConcreteCarBuilder = /** @class */ (function () {
    function ConcreteCarBuilder() {
        Object.defineProperty(this, "car", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.car = new Car();
    }
    Object.defineProperty(ConcreteCarBuilder.prototype, "reset", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.car = new Car();
        }
    });
    Object.defineProperty(ConcreteCarBuilder.prototype, "setEngine", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (engine) {
            this.car.engine = engine;
            return this;
        }
    });
    Object.defineProperty(ConcreteCarBuilder.prototype, "setTransmission", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (transmission) {
            this.car.transmission = transmission;
            return this;
        }
    });
    Object.defineProperty(ConcreteCarBuilder.prototype, "setBodyStyle", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (bodyStyle) {
            this.car.bodyStyle = bodyStyle;
            return this;
        }
    });
    Object.defineProperty(ConcreteCarBuilder.prototype, "setInterior", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (interior) {
            this.car.interior = interior;
            return this;
        }
    });
    Object.defineProperty(ConcreteCarBuilder.prototype, "setWheels", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (wheels) {
            this.car.wheels = wheels;
            return this;
        }
    });
    Object.defineProperty(ConcreteCarBuilder.prototype, "build", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var result = this.car;
            this.reset();
            return result;
        }
    });
    return ConcreteCarBuilder;
}());
exports.ConcreteCarBuilder = ConcreteCarBuilder;
// Generic builder implementation
var GenericBuilder = /** @class */ (function () {
    function GenericBuilder() {
        Object.defineProperty(this, "obj", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
    }
    Object.defineProperty(GenericBuilder.prototype, "set", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (key, value) {
            this.obj[key] = value;
            return this;
        }
    });
    Object.defineProperty(GenericBuilder.prototype, "build", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.obj;
        }
    });
    return GenericBuilder;
}());
