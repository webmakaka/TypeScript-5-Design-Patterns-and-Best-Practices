"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Object.defineProperty(Animal.prototype, "sleep", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () { }
    });
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    tslib_1.__extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Cat.prototype, "miaw", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () { }
    });
    return Cat;
}(Animal));
// function petAnimal<T>(value: T, getDefault: () => NoInfer<T>): T {
function petAnimal(value, getDefault) {
    // ... function logic ...
    return value || getDefault();
}
// This would compile without errors
petAnimal(new Cat(), function () { return new Animal(); });
