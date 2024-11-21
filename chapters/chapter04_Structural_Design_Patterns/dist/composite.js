"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directory = exports.File = void 0;
var File = /** @class */ (function () {
    function File(name) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
    }
    Object.defineProperty(File.prototype, "display", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return "File: ".concat(this.name);
        }
    });
    return File;
}());
exports.File = File;
var Directory = /** @class */ (function () {
    function Directory(name) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "components", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
        this.components = [];
    }
    Object.defineProperty(Directory.prototype, "add", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (component) {
            this.components.push(component);
        }
    });
    Object.defineProperty(Directory.prototype, "remove", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (component) {
            var index = this.components.indexOf(component);
            if (index !== -1) {
                this.components.splice(index, 1);
            }
        }
    });
    Object.defineProperty(Directory.prototype, "display", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var result = "Directory: ".concat(this.name, "\n");
            for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
                var component = _a[_i];
                result += "- ".concat(component.display(), "\n");
            }
            return result;
        }
    });
    return Directory;
}());
exports.Directory = Directory;
// Usage example
var root = new Directory("Root");
var file1 = new File("file1.txt");
var file2 = new File("file2.txt");
var subDir = new Directory("Subdirectory");
var file3 = new File("file3.txt");
subDir.add(file3);
root.add(file1);
root.add(file2);
root.add(subDir);
console.log(root.display());
