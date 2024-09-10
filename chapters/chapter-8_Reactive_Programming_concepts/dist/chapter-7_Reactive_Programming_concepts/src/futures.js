"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Future {
    constructor(ex) {
        Object.defineProperty(this, "fn", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.fn = ex;
    }
    fork(reject, resolve) {
        return this.fn(resolve, reject);
    }
    static success(value) {
        return new Future((resolve) => {
            resolve(value);
            return () => { };
        });
    }
    static fail(error) {
        return new Future((_, reject) => {
            reject(error);
            return () => { };
        });
    }
    then(f) {
        return new Future((resolve, reject) => {
            return this.fn((value) => f(value).fork(reject, resolve), reject);
        });
    }
}
const delayedTask = new Future((resolve, reject) => {
    const timerId = setTimeout(() => resolve("Hello, Future!"), 1000);
    return () => clearTimeout(timerId); // Cancellation function
});
// Chain operations
const uppercaseTask = delayedTask.then((value) => Future.success(value.toUpperCase()));
// Execute the Future
const cancelTask = uppercaseTask.fork((error) => console.error("Task failed:", error), (result) => console.log("Task succeeded:", result));
// If needed, cancel the task
// cancelTask();
