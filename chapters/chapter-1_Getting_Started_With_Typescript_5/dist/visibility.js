"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SSHUser = /** @class */ (function () {
    function SSHUser(privateKey, publicKey) {
        Object.defineProperty(this, "privateKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: privateKey
        });
        Object.defineProperty(this, "publicKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: publicKey
        });
        this.privateKey = privateKey;
        this.publicKey = publicKey;
    }
    Object.defineProperty(SSHUser.prototype, "getBase64", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return Buffer.from(this.publicKey).toString("base64");
        }
    });
    return SSHUser;
}());
