"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Usage
const nested = {
    a: { b: { c: 42 } },
};
// Usage
const calc = {
    value: 0,
    add(n) {
        this.value += n;
    },
    subtract(n) {
        this.value -= n;
    },
};
calc.value = 10; // This is now allowed
