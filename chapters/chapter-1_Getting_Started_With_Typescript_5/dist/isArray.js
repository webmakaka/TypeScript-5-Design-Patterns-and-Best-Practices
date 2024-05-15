"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isArray(arg) {
    // Unknown argument, return narrowed type
    return Array.isArray(arg);
}
var myList = { item1: "apple", item2: "orange" };
console.log(isArray(myList));
