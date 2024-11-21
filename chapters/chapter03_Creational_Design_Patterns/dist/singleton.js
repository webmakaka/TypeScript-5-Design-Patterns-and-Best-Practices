"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
var Singleton = /** @class */ (function () {
    // Prevents creation of new instances
    function Singleton() {
    }
    // Method to retrieve instance
    Object.defineProperty(Singleton, "getInstance", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (!Singleton.instance) {
                Singleton.instance = new Singleton();
            }
            return Singleton.instance;
        }
    });
    return Singleton;
}());
exports.Singleton = Singleton;
var UserService = /** @class */ (function () {
    function UserService() {
    }
    Object.defineProperty(UserService, "getInstance", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            if (!UserService.instance) {
                UserService.instance = new UserService();
            }
            return UserService.instance;
        }
    });
    Object.defineProperty(UserService.prototype, "getUsers", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return ["Alex", "John", "Sarah"];
        }
    });
    return UserService;
}());
// Usage
var userService = UserService.getInstance();
var users = userService.getUsers();
console.log(users); // Output: ['Alex', 'John', 'Sarah']
