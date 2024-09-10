"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getCurrentTime = () => new Date().toISOString();
const logMessage = (message) => () => console.log(message);
const time = getCurrentTime();
console.log(time);
logMessage("Hello, World!")();
