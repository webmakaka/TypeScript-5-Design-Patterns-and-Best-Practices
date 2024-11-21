"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = void 0;
var isObject = function (value) {
    // Type guard using type assertion
    return typeof value === "object" && value !== null && !Array.isArray(value);
};
exports.isObject = isObject;
