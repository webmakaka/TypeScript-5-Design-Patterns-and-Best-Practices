"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const stream$ = (0, rxjs_1.interval)(1000).pipe((0, operators_1.take)(5), (0, operators_1.share)());
stream$.subscribe((v) => console.log("Value accepted from first subscriber: ", v));
setTimeout(() => {
    stream$.subscribe((v) => {
        console.log("Value accepted from second subscriber: ", v);
    });
}, 3000);
