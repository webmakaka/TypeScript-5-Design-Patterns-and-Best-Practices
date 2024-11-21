"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processValue(value) {
    console.log(value.toUpperCase()); // This will throw an error if value is not a string
}
processValue("hello"); // Works fine
processValue(123); // Runtime error: value.toUpperCase is not a function
const stringCallback = {
    onEvent: (a) => console.log(a.toUpperCase()), // Accepts only strings
};
const numberCallback = {
    onEvent: (n) => console.log(n * 2), // Accepts only numbers
};
stringCallback.onEvent("hello"); // Works fine
numberCallback.onEvent(5); // Works fine
// stringCallback.onEvent(5);      // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
