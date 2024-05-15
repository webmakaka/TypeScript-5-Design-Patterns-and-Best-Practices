"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet() {
    var name = "Alice"; // Used
    var message; // Unused (error with noUnusedLocals)
    message = "Hello, " + name + "!";
    return message;
}
