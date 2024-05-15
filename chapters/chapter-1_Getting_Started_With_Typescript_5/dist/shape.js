"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Shape = /** @class */ (function () {
    function Shape(color) {
        Object.defineProperty(this, "color", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: color
        });
    }
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    tslib_1.__extends(Square, _super);
    function Square(sideLength, color) {
        var _this = _super.call(this, color) || this;
        Object.defineProperty(_this, "sideLength", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: sideLength
        });
        _this.sideLength = sideLength;
        return _this;
    }
    Object.defineProperty(Square.prototype, "getArea", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.sideLength * this.sideLength;
        }
    });
    return Square;
}(Shape));
