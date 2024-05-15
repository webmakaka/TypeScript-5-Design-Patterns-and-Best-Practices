"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var QueryBuilder = /** @class */ (function () {
    function QueryBuilder() {
    }
    return QueryBuilder;
}());
var EmptyQueryBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(EmptyQueryBuilder, _super);
    function EmptyQueryBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EmptyQueryBuilder;
}(QueryBuilder));
var SearchService = /** @class */ (function () {
    function SearchService(_a) {
        var _b = _a.qb, qb = _b === void 0 ? new EmptyQueryBuilder() : _b, path = _a.path;
        Object.defineProperty(this, "queryBuilder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "path", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.queryBuilder = qb;
        this.path = path;
    }
    return SearchService;
}());
