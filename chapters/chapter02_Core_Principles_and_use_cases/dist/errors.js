"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var DatabaseConnectionError = /** @class */ (function (_super) {
    tslib_1.__extends(DatabaseConnectionError, _super);
    function DatabaseConnectionError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "DatabaseConnectionError";
        return _this;
    }
    return DatabaseConnectionError;
}(Error));
var UserNotFoundError = /** @class */ (function (_super) {
    tslib_1.__extends(UserNotFoundError, _super);
    function UserNotFoundError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "UserNotFoundError";
        return _this;
    }
    return UserNotFoundError;
}(Error));
try {
    throw new DatabaseConnectionError("Unable to connect to the database.");
}
catch (error) {
    if (error instanceof DatabaseConnectionError) {
        console.error(error.message); // Output: Unable to connect to the database.
    }
}
function divide(dividend, divisor) {
    if (divisor === 0) {
        return { success: false, error: "Cannot divide by zero." };
    }
    return { success: true, value: dividend / divisor };
}
var result = divide(10, 0);
if (result.success) {
    console.log("Division result:", result.value);
}
else {
    console.error("Division error:", result.error); // Output: Division error: Cannot divide by zero.
}
