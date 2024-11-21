"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const R = tslib_1.__importStar(require("ramda"));
const log = (s) => () => console.log(s);
function main() {
    return R.compose(log, sumList, getArgs)(11, 4);
}
function sumList(numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}
function getArgs(a, b) {
    return [a, b];
}
console.log(main()()); // 15
function sortList(list) {
    return list.sort((a, b) => a - b);
}
let originalList = [3, 1, 4, 1, 5, 9];
let sortedList = sortList(originalList);
console.log(sortedList); // [1, 1, 3, 4, 5, 9]
console.log(originalList); // [1, 1, 3, 4, 5, 9] - Original list is mutated!
function pureSort(list) {
    return [...list].sort((a, b) => a - b);
}
let numbers = [3, 1, 4, 1, 5, 9];
let sorted1 = pureSort(numbers);
let sorted2 = pureSort(numbers);
console.log(sorted1); // [1, 1, 3, 4, 5, 9]
console.log(sorted2); // [1, 1, 3, 4, 5, 9]
console.log(numbers); // [3, 1, 4, 1, 5, 9] - Original list remains unchanged
function memoize(originalMethod, _context) {
    let cache = new Map();
    if (typeof originalMethod !== "function") {
        throw new Error("Memoize decorator can only be used on functions");
    }
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = originalMethod.apply(this, args);
        cache.set(key, result);
        return result;
    };
}
const process = (n) => {
    console.log(`Processing ${n}...`);
    return n * n;
};
const memoizedCalculation = memoize(process);
console.log(memoizedCalculation(4)); // Logs: Processing for 4... / Output: 16
console.log(memoizedCalculation(4)); // Output: 16 from cache
console.log(memoizedCalculation(5)); // Logs: Processing for 5... / Output: 25
