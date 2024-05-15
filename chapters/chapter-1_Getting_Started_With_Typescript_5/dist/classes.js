"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var User = /** @class */ (function () {
    function User(name) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
        this.name = name;
    }
    Object.defineProperty(User.prototype, "getName", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.name;
        }
    });
    return User;
}());
var user = new User("Theo");
console.log(user.getName()); // Output: "Theo"
var BaseApiClient = /** @class */ (function () {
    function BaseApiClient() {
    }
    Object.defineProperty(BaseApiClient.prototype, "performFetch", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (req) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fetch(req)];
                        case 1:
                            response = _a.sent();
                            if (response.ok) {
                                return [2 /*return*/, response.json()]; // Assuming JSON response
                            }
                            else {
                                throw new Error("API request failed with status ".concat(response.status));
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
    });
    return BaseApiClient;
}());
var UsersClient = /** @class */ (function (_super) {
    tslib_1.__extends(UsersClient, _super);
    function UsersClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UsersClient.prototype, "fetch", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (req) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var data;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.performFetch(req)];
                        case 1:
                            data = _a.sent();
                            return [2 /*return*/, data];
                    }
                });
            });
        }
    });
    return UsersClient;
}(BaseApiClient));
var client = new UsersClient();
client.fetch("/users");
