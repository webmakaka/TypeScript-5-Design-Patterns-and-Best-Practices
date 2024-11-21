"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncPoll = void 0;
const tslib_1 = require("tslib");
function asyncPoll(fn_1) {
    return tslib_1.__awaiter(this, arguments, void 0, function* (fn, pollInterval = 5000, pollTimeout = 30000, abortSignal) {
        if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
            throw new Error("Polling aborted");
        }
        const endTime = new Date().getTime() + pollTimeout;
        const condition = (resolve, reject) => {
            if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
                reject(new Error("Polling aborted"));
                return;
            }
            Promise.resolve(fn())
                .then((result) => {
                const now = new Date().getTime();
                if (result.success) {
                    if (result.data === undefined) {
                        reject(new Error("Successful response must include data"));
                        return;
                    }
                    resolve(result.data);
                }
                else if (now < endTime) {
                    setTimeout(condition, pollInterval, resolve, reject);
                }
                else {
                    reject(new Error("Reached timeout. Exiting"));
                }
            })
                .catch(reject);
        };
        return new Promise(condition);
    });
}
exports.asyncPoll = asyncPoll;
// Example usage:
const pollingFn = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('some-api');
    const data = yield response.json();
    return {
        success: response.ok,
        data: data.value
    };
});
// Using with abort controller
const abortController = new AbortController();
asyncPoll(pollingFn, 1000, 10000, abortController.signal).catch(error => {
    if (error.message.includes("aborted")) {
        console.log("Polling was cancelled");
    }
});
// Cancel after 5 seconds
setTimeout(() => abortController.abort(), 5000);
const observer_1 = require("../../chapter05_Behavioral_Design_Patterns_Communication/src/observer");
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
