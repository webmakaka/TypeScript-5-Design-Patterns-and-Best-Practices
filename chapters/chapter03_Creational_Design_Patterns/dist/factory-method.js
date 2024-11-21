"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruckFactory = exports.CarFactory = exports.Truck = exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car() {
    }
    Object.defineProperty(Car.prototype, "startEngine", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Starting car engine...");
        }
    });
    Object.defineProperty(Car.prototype, "stopEngine", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Stopping car engine...");
        }
    });
    return Car;
}());
exports.Car = Car;
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Object.defineProperty(Truck.prototype, "startEngine", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Starting truck engine...");
        }
    });
    Object.defineProperty(Truck.prototype, "stopEngine", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Stopping truck engine...");
        }
    });
    return Truck;
}());
exports.Truck = Truck;
var CarFactory = /** @class */ (function () {
    function CarFactory() {
    }
    Object.defineProperty(CarFactory.prototype, "createVehicle", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return new Car();
        }
    });
    return CarFactory;
}());
exports.CarFactory = CarFactory;
var TruckFactory = /** @class */ (function () {
    function TruckFactory() {
    }
    Object.defineProperty(TruckFactory.prototype, "createVehicle", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return new Truck();
        }
    });
    return TruckFactory;
}());
exports.TruckFactory = TruckFactory;
var carFactory = new CarFactory();
var truckFactory = new TruckFactory();
var factories = [carFactory, truckFactory, carFactory];
factories.forEach(function (factory) {
    var vehicle = factory.createVehicle();
    vehicle.startEngine();
    vehicle.stopEngine();
});
// Output:
// Starting car engine...
// Starting truck engine...
// Starting car engine...
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["CAR"] = 0] = "CAR";
    VehicleType[VehicleType["TRUCK"] = 1] = "TRUCK";
})(VehicleType || (VehicleType = {}));
var VehicleCreator = /** @class */ (function () {
    function VehicleCreator() {
    }
    Object.defineProperty(VehicleCreator.prototype, "create", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (vehicleType) {
            switch (vehicleType) {
                case VehicleType.CAR:
                    return new Car();
                case VehicleType.TRUCK:
                    return new Truck();
                default:
                    throw new Error("Invalid vehicle type");
            }
        }
    });
    return VehicleCreator;
}());
