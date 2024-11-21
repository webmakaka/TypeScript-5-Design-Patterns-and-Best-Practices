const greet = function(name: string): string {
    return `Hello, ${name}!`;
};

console.log(greet("Alice")); // Output: Hello, Alice!

function executeOperation(x: number, y: number, operation: (a: number, b: number) => number): number {
    return operation(x, y);
}
const add = (a: number, b: number) => a + b;
const multiply = (a: number, b: number) => a * b;

console.log(executeOperation(5, 3, add));      // Output: 8
console.log(executeOperation(5, 3, multiply)); // Output: 15

function createMultiplier(factor: number): (x: number) => number {
    return function(x: number): number {
        return x * factor;
    };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

const mathOperations = {
    add: (a: number, b: number) => a + b,
    subtract: (a: number, b: number) => a - b,
    multiply: (a: number, b: number) => a * b,
    divide: (a: number, b: number) => a / b
};
console.log(mathOperations.add(10, 5));      // Output: 15
console.log(mathOperations.multiply(3, 4));  // Output: 12