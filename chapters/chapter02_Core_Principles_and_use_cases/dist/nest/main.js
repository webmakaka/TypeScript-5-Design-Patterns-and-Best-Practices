"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core");
var app_module_1 = require("./app.module");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var app, _a, _b, _c;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, core_1.NestFactory.create(app_module_1.AppModule)];
                case 1:
                    app = _d.sent();
                    app.useGlobalPipes(new common_1.ValidationPipe());
                    return [4 /*yield*/, app.listen(3000)];
                case 2:
                    _d.sent();
                    _b = (_a = console).log;
                    _c = "Application is running on: ".concat;
                    return [4 /*yield*/, app.getUrl()];
                case 3:
                    _b.apply(_a, [_c.apply("Application is running on: ", [_d.sent()])]);
                    return [2 /*return*/];
            }
        });
    });
}
bootstrap();
