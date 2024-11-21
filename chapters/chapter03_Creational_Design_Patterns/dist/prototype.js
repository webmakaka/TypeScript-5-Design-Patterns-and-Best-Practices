"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = void 0;
var Dog = /** @class */ (function () {
    function Dog(breed, age) {
        Object.defineProperty(this, "breed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: breed
        });
        Object.defineProperty(this, "age", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: age
        });
        this.breed = breed;
        this.age = age;
    }
    Object.defineProperty(Dog.prototype, "clone", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var cloned = Object.create(this);
            return cloned;
        }
    });
    return Dog;
}());
exports.Dog = Dog;
var Cat = /** @class */ (function () {
    function Cat(furColor, weight) {
        Object.defineProperty(this, "furColor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: furColor
        });
        Object.defineProperty(this, "weight", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: weight
        });
        this.furColor = furColor;
        this.weight = weight;
    }
    Object.defineProperty(Cat.prototype, "clone", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var cloned = Object.create(this);
            return cloned;
        }
    });
    return Cat;
}());
exports.Cat = Cat;
var dog = new Dog("Boxer", 3);
var clonedDog = dog.clone();
console.log(clonedDog); // Output: Dog { breed: 'Boxer', age: 3 }
var cat = new Cat("Scott", 4.5);
var clonedCat = cat.clone();
console.log(clonedCat); // Output: Cat { furColor: 'Scott', weight: 4.5 }
