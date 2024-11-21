"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParametricSingleton = void 0;
var ParametricSingleton = /** @class */ (function () {
    function ParametricSingleton(param) {
        Object.defineProperty(this, "param", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: param
        });
        this.param = param;
    }
    Object.defineProperty(ParametricSingleton.prototype, "getParam", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.param;
        }
    });
    Object.defineProperty(ParametricSingleton, "getInstance", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (param) {
            if (!ParametricSingleton.instances.has(param)) {
                ParametricSingleton.instances.set(param, new ParametricSingleton(param));
            }
            return ParametricSingleton.instances.get(param);
        }
    });
    Object.defineProperty(ParametricSingleton, "instances", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: new Map()
    });
    return ParametricSingleton;
}());
exports.ParametricSingleton = ParametricSingleton;
var singletonA = ParametricSingleton.getInstance('/v1/users');
console.log(singletonA.getParam()); // Output: /v1/users
var singletonB = ParametricSingleton.getInstance('/v2/users');
console.log(singletonB.getParam()); // Output: /v2/users
var singletonC = ParametricSingleton.getInstance('/v1/users');
console.log(singletonA === singletonC); // Output: true
console.log(singletonA === singletonB); // Output: false
