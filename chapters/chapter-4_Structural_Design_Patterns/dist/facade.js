"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facade = exports.ConcreteSubsystemB = exports.ConcreteSubsystemA = void 0;
var ConcreteSubsystemA = /** @class */ (function () {
    function ConcreteSubsystemA() {
    }
    Object.defineProperty(ConcreteSubsystemA.prototype, "operationA1", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("SubsystemA: Performing operation A1");
        }
    });
    Object.defineProperty(ConcreteSubsystemA.prototype, "operationA2", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("SubsystemA: Performing operation A2");
        }
    });
    return ConcreteSubsystemA;
}());
exports.ConcreteSubsystemA = ConcreteSubsystemA;
var ConcreteSubsystemB = /** @class */ (function () {
    function ConcreteSubsystemB() {
    }
    Object.defineProperty(ConcreteSubsystemB.prototype, "operationB1", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("SubsystemB: Performing operation B1");
        }
    });
    Object.defineProperty(ConcreteSubsystemB.prototype, "operationB2", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("SubsystemB: Performing operation B2");
        }
    });
    return ConcreteSubsystemB;
}());
exports.ConcreteSubsystemB = ConcreteSubsystemB;
var Facade = /** @class */ (function () {
    function Facade(subsystemA, subsystemB) {
        Object.defineProperty(this, "subsystemA", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "subsystemB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.subsystemA = subsystemA;
        this.subsystemB = subsystemB;
    }
    Object.defineProperty(Facade.prototype, "simplifiedOperation1", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Facade: Coordinating operations in simplifiedOperation1");
            this.subsystemA.operationA1();
            this.subsystemB.operationB1();
        }
    });
    Object.defineProperty(Facade.prototype, "simplifiedOperation2", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Facade: Coordinating operations in simplifiedOperation2");
            this.subsystemA.operationA2();
            this.subsystemB.operationB2();
            this.subsystemA.operationA1();
        }
    });
    return Facade;
}());
exports.Facade = Facade;
// Client code
function clientCode(facade) {
    console.log("Client: Calling simplifiedOperation1");
    facade.simplifiedOperation1();
    console.log("\nClient: Calling simplifiedOperation2");
    facade.simplifiedOperation2();
}
// Usage
var subsystemA = new ConcreteSubsystemA();
var subsystemB = new ConcreteSubsystemB();
var facade = new Facade(subsystemA, subsystemB);
clientCode(facade);
