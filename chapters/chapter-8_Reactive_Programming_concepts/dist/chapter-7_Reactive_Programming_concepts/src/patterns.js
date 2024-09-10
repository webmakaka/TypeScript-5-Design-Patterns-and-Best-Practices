"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncPoll = void 0;
const tslib_1 = require("tslib");
function asyncPoll(fn_1) {
    return tslib_1.__awaiter(this, arguments, void 0, function* (fn, pollInterval = 5 * 1000, pollTimeout = 30 * 1000) {
        const endTime = new Date().getTime() + pollTimeout;
        const condition = (resolve, reject) => {
            Promise.resolve(fn())
                .then((result) => {
                const now = new Date().getTime();
                if (result.success) {
                    resolve(result.data);
                }
                else if (now < endTime) {
                    setTimeout(condition, pollInterval, resolve, reject);
                }
                else {
                    reject(new Error("Reached timeout. Exiting"));
                }
            })
                .catch((err) => {
                reject(err);
            });
        };
        return new Promise(condition);
    });
}
exports.asyncPoll = asyncPoll;
const result = asyncPoll(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Promise.resolve({ data: "Value" });
        if (result.data) {
            return Promise.resolve({
                success: true,
                data: result,
            });
        }
        else {
            return Promise.resolve({
                success: false,
            });
        }
    }
    catch (err) {
        return Promise.reject(err);
    }
}));
result.then((d) => {
    console.log(d.data); // Value
});
const observer_1 = require("../../chapter-5_Behavioral_Design_Patterns/src/observer");
class Producer extends observer_1.Subject {
    constructor(state) {
        super();
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.state = state;
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.notify();
    }
}
class Consumer {
    constructor(subject) {
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
            value: []
        });
    }
    notify() {
        this.state = this.subject.getState();
        for (let item of this.state) {
            console.log("Processing data:", item);
        }
    }
}
const producer = new Producer([]);
const consumerA = new Consumer(producer);
const consumerB = new Consumer(producer);
producer.addSubscriber(consumerA);
producer.addSubscriber(consumerB);
producer.setState(producer.getState().concat(Math.floor(Math.random() * 100)));
producer.setState(producer.getState().concat(Math.floor(Math.random() * 100)));
