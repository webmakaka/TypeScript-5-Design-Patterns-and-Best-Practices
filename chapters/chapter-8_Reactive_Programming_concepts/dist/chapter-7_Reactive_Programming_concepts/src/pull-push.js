"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class Producer {
    constructor(storage) {
        Object.defineProperty(this, "storage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.storage = storage;
    }
    updateData(newData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.storage.save(newData);
            this.notifyConsumers();
        });
    }
    notifyConsumers() {
        // Notify consumers with the endpoint to pull data
        console.log("Data updated. Consumers can pull from /data-endpoint");
    }
}
class Consumer {
    constructor(collector) {
        Object.defineProperty(this, "collector", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.collector = collector;
    }
    pullData() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const data = yield this.collector.pullData();
            console.log("Data received:", data);
        });
    }
}
class Storage {
    constructor() {
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    save(newData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Simulate asynchronous saving of data
            return new Promise((resolve) => {
                setTimeout(() => {
                    this.data.push(newData);
                    resolve();
                }, 100); // Simulate a delay
            });
        });
    }
    getData() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Simulate asynchronous retrieval of data
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(this.data);
                }, 100); // Simulate a delay
            });
        });
    }
}
class Collector {
    constructor(storage) {
        Object.defineProperty(this, "storage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.storage = storage;
    }
    pullData() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.storage.getData();
        });
    }
}
// Example usage
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const storage = new Storage();
    const producer = new Producer(storage);
    const collector = new Collector(storage);
    const consumer = new Consumer(collector);
    // push data
    yield producer.updateData({ id: 1, value: "New Data" });
    // pull data
    yield consumer.pullData();
}))();
