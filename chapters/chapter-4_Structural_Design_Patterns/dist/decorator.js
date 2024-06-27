"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompressionDecorator = exports.EncryptionDecorator = exports.FileReaderDecorator = exports.SimpleFileReader = void 0;
var tslib_1 = require("tslib");
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
    return SimpleFileReader;
}());
exports.SimpleFileReader = SimpleFileReader;
var FileReaderDecorator = /** @class */ (function () {
    function FileReaderDecorator(reader) {
        Object.defineProperty(this, "reader", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: reader
        });
    }
    Object.defineProperty(FileReaderDecorator.prototype, "read", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (filePath) {
            return this.reader.read(filePath);
        }
    });
    return FileReaderDecorator;
}());
exports.FileReaderDecorator = FileReaderDecorator;
var EncryptionDecorator = /** @class */ (function (_super) {
    tslib_1.__extends(EncryptionDecorator, _super);
    function EncryptionDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EncryptionDecorator.prototype, "read", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (filePath) {
            var content = _super.prototype.read.call(this, filePath);
            return this.encrypt(content);
        }
    });
    Object.defineProperty(EncryptionDecorator.prototype, "encrypt", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (content) {
            console.log("Encrypting content");
            return "Encrypted(".concat(content, ")");
        }
    });
    return EncryptionDecorator;
}(FileReaderDecorator));
exports.EncryptionDecorator = EncryptionDecorator;
var CompressionDecorator = /** @class */ (function (_super) {
    tslib_1.__extends(CompressionDecorator, _super);
    function CompressionDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CompressionDecorator.prototype, "read", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (filePath) {
            var content = _super.prototype.read.call(this, filePath);
            return this.compress(content);
        }
    });
    Object.defineProperty(CompressionDecorator.prototype, "compress", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (content) {
            console.log("Compressing content");
            return "Compressed(".concat(content, ")");
        }
    });
    return CompressionDecorator;
}(FileReaderDecorator));
exports.CompressionDecorator = CompressionDecorator;
var reader = new SimpleFileReader();
reader = new CompressionDecorator(reader);
reader = new EncryptionDecorator(reader);
var content = reader.read("example.txt");
console.log("Final content:", content);
