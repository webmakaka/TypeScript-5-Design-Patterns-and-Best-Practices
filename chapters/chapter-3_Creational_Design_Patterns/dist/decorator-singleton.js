"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function Singleton(constructor) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            if (!_this.constructor._instance) {
                ;
                _this.constructor._instance = _this;
            }
            return _this.constructor._instance;
        }
        return class_1;
    }(constructor));
}
var DecoratedSingleton = /** @class */ (function () {
    function DecoratedSingleton() {
        console.log("DecoratedSingleton instance created");
    }
    Object.defineProperty(DecoratedSingleton.prototype, "someMethod", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Some method called");
        }
    });
    DecoratedSingleton = tslib_1.__decorate([
        Singleton,
        tslib_1.__metadata("design:paramtypes", [])
    ], DecoratedSingleton);
    return DecoratedSingleton;
}());
// Usage example
var decoratedSingleton1 = new DecoratedSingleton();
decoratedSingleton1.someMethod(); // Output: Some method called
var decoratedSingleton2 = new DecoratedSingleton();
decoratedSingleton2.someMethod(); // Output: Some method called
console.log(decoratedSingleton1 === decoratedSingleton2); // Output: true
