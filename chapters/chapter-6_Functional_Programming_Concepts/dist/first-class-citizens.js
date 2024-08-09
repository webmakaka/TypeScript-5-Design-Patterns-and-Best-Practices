"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet = function (name) {
    return `Hello, ${name}!`;
};
console.log(greet("Alice")); // Output: Hello, Alice!
function executeOperation(x, y, operation) {
    return operation(x, y);
}
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
console.log(executeOperation(5, 3, add)); // Output: 8
console.log(executeOperation(5, 3, multiply)); // Output: 15
function createMultiplier(factor) {
    return function (x) {
        return x * factor;
    };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
const mathOperations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};
console.log(mathOperations.add(10, 5)); // Output: 15
console.log(mathOperations.multiply(3, 4)); // Output: 12
