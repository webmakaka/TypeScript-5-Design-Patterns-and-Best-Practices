"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var one = "one";
var two = false;
var three = 3;
var four = null;
var five = 5;
var six = 6;
var seven = Symbol("seven");
// 'never' is typically used for functions that don't return anything (void) or throw an error.
function neverReturningFunction() {
    throw new Error("This function never returns");
}
neverReturningFunction();
// let eight: never; // This wouldn't work as you can't assign a value to 'never'.
