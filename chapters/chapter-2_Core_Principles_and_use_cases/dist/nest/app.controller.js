"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
var tslib_1 = require("tslib");
var common_1 = require("@nestjs/common");
var AppController = /** @class */ (function () {
    function AppController() {
    }
    Object.defineProperty(AppController.prototype, "getHealth", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return "OK!";
        }
    });
    tslib_1.__decorate([
        (0, common_1.Get)("/health"),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], AppController.prototype, "getHealth", null);
    AppController = tslib_1.__decorate([
        (0, common_1.Controller)()
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
