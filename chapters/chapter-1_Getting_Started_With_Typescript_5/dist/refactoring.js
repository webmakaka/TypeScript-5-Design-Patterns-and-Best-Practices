"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function find(arr, predicate) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (predicate(item)) {
            return item;
        }
    }
    return undefined;
}
