"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = exports.QuickSort = exports.BubbleSort = void 0;
var tslib_1 = require("tslib");
var BubbleSort = /** @class */ (function () {
    function BubbleSort() {
    }
    Object.defineProperty(BubbleSort.prototype, "sort", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (data) {
            var _a;
            console.log("Sorting using bubble sort");
            // Bubble sort implementation
            var arr = tslib_1.__spreadArray([], data, true);
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
                    }
                }
            }
            return arr;
        }
    });
    return BubbleSort;
}());
exports.BubbleSort = BubbleSort;
var QuickSort = /** @class */ (function () {
    function QuickSort() {
    }
    Object.defineProperty(QuickSort.prototype, "sort", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (data) {
            console.log("Sorting using quick sort");
            var arr = tslib_1.__spreadArray([], data, true);
            if (arr.length <= 1)
                return arr;
            var pivot = arr[0];
            var left = arr.filter(function (x, i) { return x <= pivot && i !== 0; });
            var right = arr.filter(function (x) { return x > pivot; });
            return tslib_1.__spreadArray(tslib_1.__spreadArray(tslib_1.__spreadArray([], this.sort(left), true), [pivot], false), this.sort(right), true);
        }
    });
    return QuickSort;
}());
exports.QuickSort = QuickSort;
var Sorter = /** @class */ (function () {
    function Sorter(strategy) {
        Object.defineProperty(this, "strategy", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: strategy
        });
    }
    Object.defineProperty(Sorter.prototype, "setStrategy", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (strategy) {
            this.strategy = strategy;
        }
    });
    Object.defineProperty(Sorter.prototype, "sort", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (data) {
            return this.strategy.sort(data);
        }
    });
    return Sorter;
}());
exports.Sorter = Sorter;
var data = [64, 34, 25, 12, 22, 11, 90];
var sorter = new Sorter(new BubbleSort());
console.log("Original array:", data);
console.log("Sorted with bubble sort:", sorter.sort(data));
sorter.setStrategy(new QuickSort());
console.log("Sorted with quick sort:", sorter.sort(data));
