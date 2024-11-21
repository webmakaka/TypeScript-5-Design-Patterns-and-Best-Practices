"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function memoize(originalMethod, _context) {
    var cache = new Map();
    if (typeof originalMethod !== "function") {
        throw new Error("Memoize decorator can only be used on functions");
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = originalMethod.apply(this, args);
        cache.set(key, result);
        return result;
    };
}
var MyClass = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _addNumbers_decorators;
    return _a = /** @class */ (function () {
            function MyClass() {
                tslib_1.__runInitializers(this, _instanceExtraInitializers);
            }
            Object.defineProperty(MyClass.prototype, "addNumbers", {
                enumerable: false,
                configurable: true,
                writable: true,
                value: function (x, y) {
                    console.log("Calculating ".concat(x, " + ").concat(y));
                    return x + y;
                }
            });
            return MyClass;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _addNumbers_decorators = [memoize];
            tslib_1.__esDecorate(_a, null, _addNumbers_decorators, { kind: "method", name: "addNumbers", static: false, private: false, access: { has: function (obj) { return "addNumbers" in obj; }, get: function (obj) { return obj.addNumbers; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var myClass = new MyClass();
var result1 = myClass.addNumbers(2, 3);
console.log(result1); // Output: 5
var result2 = myClass.addNumbers(2, 3);
console.log(result2); // Output: 5
function log(originalMethod, context) {
    function replacementMethod() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Calling ".concat(String(context.name)));
        return originalMethod.call.apply(originalMethod, tslib_1.__spreadArray([this], args, false));
    }
    return replacementMethod;
}
var Calculator = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _add_decorators;
    return _a = /** @class */ (function () {
            function Calculator() {
                tslib_1.__runInitializers(this, _instanceExtraInitializers);
            }
            Object.defineProperty(Calculator.prototype, "add", {
                enumerable: false,
                configurable: true,
                writable: true,
                value: function (x, y) {
                    return x + y;
                }
            });
            return Calculator;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _add_decorators = [log];
            tslib_1.__esDecorate(_a, null, _add_decorators, { kind: "method", name: "add", static: false, private: false, access: { has: function (obj) { return "add" in obj; }, get: function (obj) { return obj.add; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
new Calculator().add(2, 3);
