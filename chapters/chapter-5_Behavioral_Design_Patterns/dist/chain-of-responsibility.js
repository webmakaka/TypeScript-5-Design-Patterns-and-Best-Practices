"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnicalSupportHandler = exports.FrontDeskHandler = exports.SupportHandler = exports.CustomerSupportTicket = void 0;
var tslib_1 = require("tslib");
var CustomerSupportTicket = /** @class */ (function () {
    function CustomerSupportTicket(id, customer, issue, priority) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: id
        });
        Object.defineProperty(this, "customer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: customer
        });
        Object.defineProperty(this, "issue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: issue
        });
        Object.defineProperty(this, "priority", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: priority
        });
        Object.defineProperty(this, "resolution", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
    }
    Object.defineProperty(CustomerSupportTicket.prototype, "getId", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.id;
        }
    });
    Object.defineProperty(CustomerSupportTicket.prototype, "getCustomer", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.customer;
        }
    });
    Object.defineProperty(CustomerSupportTicket.prototype, "getIssue", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.issue;
        }
    });
    Object.defineProperty(CustomerSupportTicket.prototype, "getPriority", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.priority;
        }
    });
    Object.defineProperty(CustomerSupportTicket.prototype, "setResolution", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (resolution) {
            this.resolution = resolution;
        }
    });
    Object.defineProperty(CustomerSupportTicket.prototype, "getResolution", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.resolution;
        }
    });
    return CustomerSupportTicket;
}());
exports.CustomerSupportTicket = CustomerSupportTicket;
var SupportHandler = /** @class */ (function () {
    function SupportHandler() {
        Object.defineProperty(this, "nextHandler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
    }
    Object.defineProperty(SupportHandler.prototype, "setNext", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (handler) {
            this.nextHandler = handler;
            return handler;
        }
    });
    return SupportHandler;
}());
exports.SupportHandler = SupportHandler;
var FrontDeskHandler = /** @class */ (function (_super) {
    tslib_1.__extends(FrontDeskHandler, _super);
    function FrontDeskHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FrontDeskHandler.prototype, "handle", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (ticket) {
            if (ticket.getPriority() <= 1) {
                ticket.setResolution("Resolved by Front Desk: General inquiry handled");
                console.log("Ticket ".concat(ticket.getId(), " handled by Front Desk"));
            }
            else if (this.nextHandler) {
                this.nextHandler.handle(ticket);
            }
        }
    });
    return FrontDeskHandler;
}(SupportHandler));
exports.FrontDeskHandler = FrontDeskHandler;
var TechnicalSupportHandler = /** @class */ (function (_super) {
    tslib_1.__extends(TechnicalSupportHandler, _super);
    function TechnicalSupportHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TechnicalSupportHandler.prototype, "handle", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (ticket) {
            if (ticket.getPriority() <= 3) {
                ticket.setResolution("Resolved by Technical Support: Technical issue addressed");
                console.log("Ticket ".concat(ticket.getId(), " handled by Technical Support"));
            }
            else if (this.nextHandler) {
                this.nextHandler.handle(ticket);
            }
        }
    });
    return TechnicalSupportHandler;
}(SupportHandler));
exports.TechnicalSupportHandler = TechnicalSupportHandler;
