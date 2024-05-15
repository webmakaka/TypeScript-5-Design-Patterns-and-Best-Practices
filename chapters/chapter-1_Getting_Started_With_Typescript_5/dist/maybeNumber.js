"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// With strictNullChecks: error
var maybeNumber = null;
// let value = maybeNumber * 10
// Workaround: type guard or nullish coalescing operator
var value2;
if (maybeNumber !== null) {
    value2 = maybeNumber * 10;
}
else {
    value2 = 0;
}
var value3 = maybeNumber !== null && maybeNumber !== void 0 ? maybeNumber : 0;
