"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteStateB = exports.ConcreteStateA = exports.Context = void 0;
var Context = /** @class */ (function () {
    function Context(initialState) {
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.state = initialState;
    }
    Object.defineProperty(Context.prototype, "request", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            this.state.handle();
        }
    });
    Object.defineProperty(Context.prototype, "changeState", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (newState) {
            this.state = newState;
        }
    });
    Object.defineProperty(Context.prototype, "getState", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.state;
        }
    });
    return Context;
}());
exports.Context = Context;
var ConcreteStateA = /** @class */ (function () {
    function ConcreteStateA() {
    }
    Object.defineProperty(ConcreteStateA.prototype, "handle", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Handling request in ConcreteStateA");
        }
    });
    return ConcreteStateA;
}());
exports.ConcreteStateA = ConcreteStateA;
var ConcreteStateB = /** @class */ (function () {
    function ConcreteStateB() {
    }
    Object.defineProperty(ConcreteStateB.prototype, "handle", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Handling request in ConcreteStateB");
        }
    });
    return ConcreteStateB;
}());
exports.ConcreteStateB = ConcreteStateB;
var context = new Context(new ConcreteStateA());
context.request(); // Output: Handling request in ConcreteStateA
context.changeState(new ConcreteStateB());
context.request(); // Output: Handling request in ConcreteStateB
