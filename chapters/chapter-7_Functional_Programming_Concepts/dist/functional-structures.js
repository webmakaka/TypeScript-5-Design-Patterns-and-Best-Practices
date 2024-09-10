"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class Box {
    constructor(value) {
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
        });
    }
    map(f) {
        return new Box(f(this.value));
    }
    toString() {
        return `Box(${this.value})`;
    }
}
const box = new Box(5);
const result = box.map((x) => x * 2).map((x) => x + 1);
console.log(result.toString()); // Box(11)
class Maybe {
    constructor(value) {
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
        });
    }
    static just(value) {
        return new Maybe(value);
    }
    static nothing() {
        return new Maybe(null);
    }
    map(f) {
        return this.value === null ? Maybe.nothing() : Maybe.just(f(this.value));
    }
    ap(f) {
        if (this.value === null || f.value === null) {
            return Maybe.nothing();
        }
        return Maybe.just(f.value(this.value));
    }
    apCurried(maybeFn, maybeA) {
        return maybeFn.ap(maybeA.map((a) => (fn) => fn(a)));
    }
    getOrElse(defaultValue) {
        return this.value !== null ? this.value : defaultValue;
    }
}
const function_1 = require("fp-ts/function");
const O = tslib_1.__importStar(require("fp-ts/Option"));
const Apply_1 = require("fp-ts/Apply");
const add = (a) => (b) => a + b;
const maybeNumber1 = O.some(5);
const maybeNumber2 = O.some(10);
const maybeAdd = O.some(add);
const result2 = (0, function_1.pipe)((0, Apply_1.sequenceT)(O.option)(maybeAdd, maybeNumber1, maybeNumber2), O.map(([fn, a, b]) => fn(a)(b)));
console.log(O.getOrElse(() => 0)(result2)); // Should output 15
class Sum {
    constructor(value) {
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
        });
    }
    concat(other) {
        return new Sum(this.value + other.value);
    }
}
class Str {
    constructor(value) {
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
        });
    }
    concat(other) {
        return new Str(this.value + other.value);
    }
}
// Generic function to combine a list of semigroups
function concatAll(xs) {
    return xs.reduce((acc, x) => acc.concat(x));
}
// Usage examples
const sums = [new Sum(1), new Sum(2), new Sum(3)];
console.log(concatAll(sums).value); // Output: 6
const strings = [new Str("Hello, "), new Str("functional "), new Str("programming!")];
console.log(concatAll(strings).value); // Output: "Hello, functional programming!"
