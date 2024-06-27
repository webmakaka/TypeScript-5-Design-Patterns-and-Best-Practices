"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Person = /** @class */ (function () {
    function Person(name, age) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
        Object.defineProperty(this, "age", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: age
        });
    }
    Object.defineProperty(Person.prototype, "clone", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var cloned = Object.create(this);
            return cloned;
        }
    });
    return Person;
}());
// Usage
var person = new Person("John", 30);
var clonedPerson = person.clone();
// Type casting is required to access properties of Person
var clonedPersonName = clonedPerson.name;
console.log(clonedPersonName); // Output: 'John'
var BasePrototype = /** @class */ (function () {
    function BasePrototype() {
    }
    Object.defineProperty(BasePrototype.prototype, "clone", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var cloned = Object.create(this);
            return cloned;
        }
    });
    return BasePrototype;
}());
var Person2 = /** @class */ (function (_super) {
    tslib_1.__extends(Person2, _super);
    function Person2(name, age) {
        var _this = _super.call(this) || this;
        Object.defineProperty(_this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
        Object.defineProperty(_this, "age", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: age
        });
        return _this;
    }
    return Person2;
}(BasePrototype));
var Employee = /** @class */ (function (_super) {
    tslib_1.__extends(Employee, _super);
    function Employee(name, salary) {
        var _this = _super.call(this) || this;
        Object.defineProperty(_this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
        Object.defineProperty(_this, "salary", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: salary
        });
        return _this;
    }
    return Employee;
}(BasePrototype));
