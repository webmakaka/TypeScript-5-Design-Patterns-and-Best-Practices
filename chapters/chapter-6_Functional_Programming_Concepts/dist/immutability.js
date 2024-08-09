"use strict";
var _ImmutablePerson_name, _ImmutablePerson_age;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const name = "Alice";
// name = "Bob"; // Error: Cannot assign to 'name' because it is a constant.
const numbers = [1, 2, 3];
numbers.push(4); // This is allowed and modifies the array
const user = {
    name: "Alice",
    age: 30
};
const dept = {
    name: "Engineering",
    employees: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
};
// dept.name = "Sales"; // Error
// dept.employees.push({id: 3, name: "Charlie"}); // Error
// dept.employees[0].name = "Alicia"; // Error
dept.name = "Sales";
class ImmutablePerson {
    constructor(name, age) {
        _ImmutablePerson_name.set(this, void 0);
        _ImmutablePerson_age.set(this, void 0);
        tslib_1.__classPrivateFieldSet(this, _ImmutablePerson_name, name, "f");
        tslib_1.__classPrivateFieldSet(this, _ImmutablePerson_age, age, "f");
    }
    get name() {
        return tslib_1.__classPrivateFieldGet(this, _ImmutablePerson_name, "f");
    }
    get age() {
        return tslib_1.__classPrivateFieldGet(this, _ImmutablePerson_age, "f");
    }
    withAge(newAge) {
        return new ImmutablePerson(tslib_1.__classPrivateFieldGet(this, _ImmutablePerson_name, "f"), newAge);
    }
}
_ImmutablePerson_name = new WeakMap(), _ImmutablePerson_age = new WeakMap();
const person1 = new ImmutablePerson("Alice", 30);
const person2 = person1.withAge(31);
console.log(person1.age); // 30
console.log(person2.age); // 31
const immutable_1 = tslib_1.__importDefault(require("immutable"));
const list1 = immutable_1.default.List([1, 2, 3]);
const list2 = list1.push(4);
console.log(list1.toArray()); // [1, 2, 3]
console.log(list2.toArray()); // [1, 2, 3, 4]
const map1 = immutable_1.default.Map({ a: 1, b: 2 });
const map2 = map1.set('b', 3);
console.log(map1.toObject()); // { a: 1, b: 2 }
console.log(map2.toObject()); // { a: 1, b: 3 }
list1.push(5);
console.log(list1.toArray()); // [ 1, 2, 3 ]
