"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var tslib_1 = require("tslib");
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        (0, common_1.Module)({
            imports: [],
            controllers: [app_controller_1.AppController],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
