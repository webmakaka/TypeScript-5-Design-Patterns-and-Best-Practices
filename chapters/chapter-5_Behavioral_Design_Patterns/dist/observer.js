"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Subject = /** @class */ (function () {
    function Subject() {
        Object.defineProperty(this, "subscribers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    Object.defineProperty(Subject.prototype, "addSubscriber", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (s) {
            this.subscribers.push(s);
        }
    });
    Object.defineProperty(Subject.prototype, "removeSubscriber", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (s) {
            var index = this.subscribers.indexOf(s);
            if (index !== -1) {
                this.subscribers.splice(index, 1);
            }
        }
    });
    Object.defineProperty(Subject.prototype, "notify", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (message) {
            console.log("Notifying all subscribers");
            this.subscribers.forEach(function (s) { return s.notify(message); });
        }
    });
    return Subject;
}());
var ConcreteSubject = /** @class */ (function (_super) {
    tslib_1.__extends(ConcreteSubject, _super);
    function ConcreteSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        Object.defineProperty(_this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        return _this;
    }
    Object.defineProperty(ConcreteSubject.prototype, "getState", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return this.state;
        }
    });
    Object.defineProperty(ConcreteSubject.prototype, "setState", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (state) {
            this.state = state;
            this.notify(this.state);
        }
    });
    return ConcreteSubject;
}(Subject));
var ConcreteSubscriber = /** @class */ (function () {
    function ConcreteSubscriber(subject) {
        Object.defineProperty(this, "subject", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: subject
        });
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    Object.defineProperty(ConcreteSubscriber.prototype, "notify", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (message) {
            this.state = message;
            console.log("ConcreteSubscriber: Received update with state: ".concat(this.state));
        }
    });
    return ConcreteSubscriber;
}());
var subject = new ConcreteSubject();
var subscriberA = new ConcreteSubscriber(subject);
subject.addSubscriber(subscriberA);
var subscriberB = new ConcreteSubscriber(subject);
subject.addSubscriber(subscriberB);
subject.setState(19);
subject.removeSubscriber(subscriberB);
subject.setState(21);
// Output:
// Notifying all subscribers
// ConcreteSubscriber: Received update with state: 21
