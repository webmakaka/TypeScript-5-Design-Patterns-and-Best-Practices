"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add2(x) {
    return x + 2;
}
function mul3(x) {
    return x * 3;
}
function safeDivide(x, y) {
    return y !== 0 ? x / y : null;
}
function safeSquareRoot(x) {
    if (x !== null) {
        return x >= 0 ? Math.sqrt(x) : null;
    }
    return null;
}
const result = safeSquareRoot(safeDivide(16, 4)); // Type: number | null
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
    map(fn) {
        return this.value === null ? Maybe.nothing() : Maybe.just(fn(this.value));
    }
    flatMap(fn) {
        return this.value === null ? Maybe.nothing() : fn(this.value);
    }
    equals(other, equalityFn) {
        if (this.value === null && other.value === null) {
            return true;
        }
        if (this.value === null || other.value === null) {
            return false;
        }
        if (equalityFn) {
            return equalityFn(this.value, other.value);
        }
        return this.value === other.value;
    }
}
class Either {
    constructor(left, right) {
        Object.defineProperty(this, "left", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: left
        });
        Object.defineProperty(this, "right", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: right
        });
    }
    static left(value) {
        return new Either(value, null);
    }
    static right(value) {
        return new Either(null, value);
    }
}
function divide(a, b) {
    return b === 0 ? Either.left("Division by zero") : Either.right(a / b);
}
function squareRoot(n) {
    return n < 0 ? Either.left("Cannot calculate square root of negative number") : Either.right(Math.sqrt(n));
}
// // Usage
// const result = divide(10, 2).flatMap(squareRoot)
// // Either contains the result or an error message
class State {
    constructor(run) {
        Object.defineProperty(this, "run", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: run
        });
    }
    static of(a) {
        return new State((s) => [a, s]);
    }
    map(f) {
        return new State((s) => {
            const [a, s1] = this.run(s);
            return [f(a), s1];
        });
    }
    flatMap(f) {
        return new State((s) => {
            const [a, s1] = this.run(s);
            return f(a).run(s1);
        });
    }
}
const increment = new State((s) => [undefined, s + 1]);
const getCount = new State((s) => [s, s]);
const program = increment.flatMap(() => increment).flatMap(() => getCount);
const [count, finalState] = program.run(0);
console.log(count, finalState); // 2, 2
// Left Identity
const a = 5;
const f = (x) => Maybe.just(x * 2);
console.log(Maybe.just(a).flatMap(f).equals(f(a))); // true
// Right Identity
const m = Maybe.just(3);
console.log(m.flatMap(Maybe.just).equals(m)); // true
// Associativity
const g = (x) => Maybe.just(x + 1);
const h = (x) => Maybe.just(x * 3);
const m1 = Maybe.just(2).flatMap(g).flatMap(h);
const m2 = Maybe.just(2).flatMap((x) => g(x).flatMap(h));
console.log(m1.equals(m2)); // true
