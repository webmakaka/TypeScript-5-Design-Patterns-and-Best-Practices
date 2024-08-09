"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlyweightFactory = exports.ConcreteFlyweight = void 0;
// Concrete Flyweight
var ConcreteFlyweight = /** @class */ (function () {
    function ConcreteFlyweight(sharedState) {
        Object.defineProperty(this, "sharedState", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: sharedState
        });
    }
    Object.defineProperty(ConcreteFlyweight.prototype, "perform", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (customization) {
            console.log("ConcreteFlyweight: Shared (".concat(JSON.stringify(this.sharedState), ") and unique (").concat(customization.id, ") state."));
        }
    });
    return ConcreteFlyweight;
}());
exports.ConcreteFlyweight = ConcreteFlyweight;
var FlyweightFactory = /** @class */ (function () {
    function FlyweightFactory() {
        Object.defineProperty(this, "cache", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
    }
    Object.defineProperty(FlyweightFactory.prototype, "getFlyweight", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (sharedState) {
            var key = JSON.stringify(sharedState);
            if (!this.cache.has(key)) {
                console.log("FlyweightFactory: Can't find a flyweight, creating new one.");
                this.cache.set(key, new ConcreteFlyweight(sharedState));
            }
            else {
                console.log("FlyweightFactory: Reusing existing flyweight.");
            }
            return this.cache.get(key);
        }
    });
    Object.defineProperty(FlyweightFactory.prototype, "listFlyweights", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var count = this.cache.size;
            console.log("\nFlyweightFactory: I have ".concat(count, " flyweights:"));
            this.cache.forEach(function (_, key) {
                console.log(key);
            });
        }
    });
    return FlyweightFactory;
}());
exports.FlyweightFactory = FlyweightFactory;
// Client code
var factory = new FlyweightFactory();
function addCar(plates, owner, brand, model, color) {
    console.log("\nClient: Adding a car to database.");
    var flyweight = factory.getFlyweight({ brand: brand, model: model, color: color });
    flyweight.perform({ id: "".concat(plates, "_").concat(owner) });
}
addCar("CL234IR", "James Doe", "Chevrolet", "Camaro2018", "pink");
addCar("CL234IR", "James Doe", "BMW", "M5", "red");
addCar("CL234IR", "James Doe", "BMW", "X1", "red");
factory.listFlyweights();
