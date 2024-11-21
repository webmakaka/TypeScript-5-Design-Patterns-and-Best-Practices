"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyBMotorcycle = exports.CompanyBCar = exports.CompanyBFactory = exports.CompanyAMotorcycle = exports.CompanyACar = exports.CompanyAFactory = void 0;
var CompanyAFactory = /** @class */ (function () {
    function CompanyAFactory() {
    }
    Object.defineProperty(CompanyAFactory.prototype, "createCar", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return new CompanyACar();
        }
    });
    Object.defineProperty(CompanyAFactory.prototype, "createMotorcycle", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return new CompanyAMotorcycle();
        }
    });
    return CompanyAFactory;
}());
exports.CompanyAFactory = CompanyAFactory;
var CompanyACar = /** @class */ (function () {
    function CompanyACar() {
    }
    Object.defineProperty(CompanyACar.prototype, "drive", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Driving a Company A car");
        }
    });
    return CompanyACar;
}());
exports.CompanyACar = CompanyACar;
var CompanyAMotorcycle = /** @class */ (function () {
    function CompanyAMotorcycle() {
    }
    Object.defineProperty(CompanyAMotorcycle.prototype, "ride", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Riding a Company A motorcycle");
        }
    });
    return CompanyAMotorcycle;
}());
exports.CompanyAMotorcycle = CompanyAMotorcycle;
var CompanyBFactory = /** @class */ (function () {
    function CompanyBFactory() {
    }
    Object.defineProperty(CompanyBFactory.prototype, "createCar", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return new CompanyBCar();
        }
    });
    Object.defineProperty(CompanyBFactory.prototype, "createMotorcycle", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return new CompanyBMotorcycle();
        }
    });
    return CompanyBFactory;
}());
exports.CompanyBFactory = CompanyBFactory;
var CompanyBCar = /** @class */ (function () {
    function CompanyBCar() {
    }
    Object.defineProperty(CompanyBCar.prototype, "drive", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Driving a Company B car");
        }
    });
    return CompanyBCar;
}());
exports.CompanyBCar = CompanyBCar;
var CompanyBMotorcycle = /** @class */ (function () {
    function CompanyBMotorcycle() {
    }
    Object.defineProperty(CompanyBMotorcycle.prototype, "ride", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Riding a Company B motorcycle");
        }
    });
    return CompanyBMotorcycle;
}());
exports.CompanyBMotorcycle = CompanyBMotorcycle;
function produceVehicles(factory) {
    var car = factory.createCar();
    var motorcycle = factory.createMotorcycle();
    car.drive();
    motorcycle.ride();
}
// Using Company A's factory
produceVehicles(new CompanyAFactory());
// Output:
// Driving a Company A car
// Riding a Company A motorcycle
// Using Company B's factory
produceVehicles(new CompanyBFactory());
// Output:
// Driving a Company B car
// Riding a Company B motorcycle
