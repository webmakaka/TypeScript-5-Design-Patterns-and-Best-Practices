"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var BaseClient = /** @class */ (function () {
    function BaseClient(baseUrl) {
        Object.defineProperty(this, "baseUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: baseUrl
        });
        this.baseUrl = baseUrl;
    }
    Object.defineProperty(BaseClient.prototype, "getBaseUrl", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.baseUrl;
        }
    });
    return BaseClient;
}());
var UsersApiClient = /** @class */ (function (_super) {
    tslib_1.__extends(UsersApiClient, _super);
    function UsersApiClient(baseUrl) {
        return _super.call(this, baseUrl) || this;
    }
    Object.defineProperty(UsersApiClient.prototype, "getUsers", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            console.log("Fetching users from ".concat(this.getBaseUrl(), "/users"));
        }
    });
    return UsersApiClient;
}(BaseClient));
