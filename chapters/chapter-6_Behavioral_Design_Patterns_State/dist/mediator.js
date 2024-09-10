"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleTaskWorker = exports.BatchWorker = exports.Workhorse = exports.WorkerCenter = void 0;
var tslib_1 = require("tslib");
var WorkerCenter = /** @class */ (function () {
    function WorkerCenter(workerA, workerB) {
        Object.defineProperty(this, "workerA", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: workerA
        });
        Object.defineProperty(this, "workerB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: workerB
        });
        this.workerA.setMediator(this);
        this.workerB.setMediator(this);
    }
    Object.defineProperty(WorkerCenter.prototype, "triggerEvent", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (sender, message) {
            if (message.startsWith("single_job_completed")) {
                this.workerA.finalize();
            }
            if (message.startsWith("batch_job_completed")) {
                this.workerB.performWork();
            }
        }
    });
    return WorkerCenter;
}());
exports.WorkerCenter = WorkerCenter;
var Workhorse = /** @class */ (function () {
    function Workhorse(mediator) {
        Object.defineProperty(this, "mediator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.mediator = mediator;
    }
    Object.defineProperty(Workhorse.prototype, "setMediator", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (mediator) {
            this.mediator = mediator;
        }
    });
    return Workhorse;
}());
exports.Workhorse = Workhorse;
var BatchWorker = /** @class */ (function (_super) {
    tslib_1.__extends(BatchWorker, _super);
    function BatchWorker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BatchWorker.prototype, "performWork", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _a;
            console.log("Performing work in BatchWorker");
            (_a = this.mediator) === null || _a === void 0 ? void 0 : _a.triggerEvent(this, "batch_job_completed");
        }
    });
    Object.defineProperty(BatchWorker.prototype, "finalize", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _a;
            console.log("Performing final work in BatchWorker");
            (_a = this.mediator) === null || _a === void 0 ? void 0 : _a.triggerEvent(this, "final_job_completed");
        }
    });
    return BatchWorker;
}(Workhorse));
exports.BatchWorker = BatchWorker;
var SingleTaskWorker = /** @class */ (function (_super) {
    tslib_1.__extends(SingleTaskWorker, _super);
    function SingleTaskWorker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SingleTaskWorker.prototype, "performWork", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var _a;
            console.log("Performing work in SingleTaskWorker");
            (_a = this.mediator) === null || _a === void 0 ? void 0 : _a.triggerEvent(this, "single_job_completed");
        }
    });
    return SingleTaskWorker;
}(Workhorse));
exports.SingleTaskWorker = SingleTaskWorker;
