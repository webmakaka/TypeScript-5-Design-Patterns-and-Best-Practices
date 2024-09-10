"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const pullFromApi = new Promise((resolve, reject) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return (0, node_fetch_1.default)("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => resolve(json));
}));
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield pullFromApi;
}))();
function delay(ms = 1000) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function failAfter(ms = 1000) {
    return new Promise((_, reject) => setTimeout(reject, ms));
}
const races = Promise.race([delay(1000), failAfter(500)]);
const all = Promise.all([delay(1000), failAfter(1500)]);
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    races
        .then((value) => {
        console.log(value);
    })
        .catch((_) => {
        console.log("Error");
    });
}))();
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    all
        .then((value) => {
        console.log(value);
    })
        .catch((_) => {
        console.log("Error");
    });
}))();
const settled = Promise.allSettled([delay(1000), failAfter(500)]);
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    settled
        .then((value) => {
        console.log(value);
    })
        .catch((_) => {
        console.log("Error");
    });
}))();
