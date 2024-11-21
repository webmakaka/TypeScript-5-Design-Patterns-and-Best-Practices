"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function Encrypt() {
    return function (constructor) {
        return /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(class_1.prototype, "read", {
                enumerable: false,
                configurable: true,
                writable: true,
                value: function (filePath) {
                    var content = _super.prototype.read.call(this, filePath);
                    console.log("Encrypting content");
                    return "Encrypted(".concat(content, ")");
                }
            });
            return class_1;
        }(constructor));
    };
}
function Compress() {
    return function (constructor) {
        return /** @class */ (function (_super) {
            tslib_1.__extends(class_2, _super);
            function class_2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(class_2.prototype, "read", {
                enumerable: false,
                configurable: true,
                writable: true,
                value: function (filePath) {
                    var content = _super.prototype.read.call(this, filePath);
                    console.log("Compressing content");
                    return "Compressed(".concat(content, ")");
                }
            });
            return class_2;
        }(constructor));
    };
}
var SimpleFileReader = /** @class */ (function () {
    function SimpleFileReader() {
    }
    Object.defineProperty(SimpleFileReader.prototype, "read", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (filePath) {
            console.log("Reading file from: ".concat(filePath));
            return "Content of ".concat(filePath);
        }
    });
    SimpleFileReader = tslib_1.__decorate([
        Compress(),
        Encrypt()
    ], SimpleFileReader);
    return SimpleFileReader;
}());
// Usage
var reader = new SimpleFileReader();
var content = reader.read("example.txt");
console.log("Final content:", content);
