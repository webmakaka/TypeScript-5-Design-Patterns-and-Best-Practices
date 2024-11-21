"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeDuplicateChars(input) {
    var result = [];
    var seen = new Set();
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var c = input_1[_i];
        if (!seen.has(c)) {
            seen.add(c);
            result.push(c);
        }
    }
    return result;
}
console.log(removeDuplicateChars("aarfqwevzxcddd"));
var numbers = [];
numbers.push(1);
// TypeScript error: Argument of type '"two"' is not assignable to parameter of type 'number'.
// numbers.push("two")
