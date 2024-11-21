"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyTextStore = exports.TextStore = void 0;
var TextStore = /** @class */ (function () {
    function TextStore() {
    }
    Object.defineProperty(TextStore.prototype, "save", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (data) {
            console.log("Called 'save' from TextStore with\n    data=".concat(data));
        }
    });
    return TextStore;
}());
exports.TextStore = TextStore;
var ProxyTextStore = /** @class */ (function () {
    function ProxyTextStore(textStore) {
        Object.defineProperty(this, "textStore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: textStore
        });
    }
    Object.defineProperty(ProxyTextStore.prototype, "save", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (data) {
            console.log("Called 'save' from ProxyTextStore with\n    data=".concat(data));
            if (!this.textStore) {
                console.log("Lazy init: textStore.");
                this.textStore = new TextStore();
            }
            this.textStore.save(data);
        }
    });
    return ProxyTextStore;
}());
exports.ProxyTextStore = ProxyTextStore;
function clientCode() {
    console.log("Client: Using TextStore directly:");
    var directStore = new TextStore();
    directStore.save("Direct data");
    console.log("\nClient: Using ProxyTextStore:");
    var proxyStore = new ProxyTextStore();
    proxyStore.save("Proxy data 1");
    console.log("\nClient: Using ProxyTextStore again:");
    proxyStore.save("Proxy data 2");
    console.log("\nClient: Using a new ProxyTextStore with pre-initialized TextStore:");
    var preInitStore = new ProxyTextStore(new TextStore());
    preInitStore.save("Pre-init data");
}
// Run the client code
clientCode();
