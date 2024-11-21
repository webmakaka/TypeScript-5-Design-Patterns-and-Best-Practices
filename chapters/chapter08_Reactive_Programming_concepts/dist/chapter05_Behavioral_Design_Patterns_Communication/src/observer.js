"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
class Subject {
    constructor() {
        Object.defineProperty(this, "subscribers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    addSubscriber(s) {
        this.subscribers.push(s);
    }
    removeSubscriber(s) {
        const index = this.subscribers.indexOf(s);
        if (index !== -1) {
            this.subscribers.splice(index, 1);
        }
    }
    notify(message) {
        console.log("Notifying all subscribers");
        this.subscribers.forEach((s) => s.notify(message));
    }
}
exports.Subject = Subject;
class ConcreteSubject extends Subject {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.notify(this.state);
    }
}
class ConcreteSubscriber {
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
            value: void 0
        });
    }
    notify(message) {
        this.state = message;
        console.log(`ConcreteSubscriber: Received update with state: ${this.state}`);
    }
}
const subject = new ConcreteSubject();
const subscriberA = new ConcreteSubscriber(subject);
subject.addSubscriber(subscriberA);
const subscriberB = new ConcreteSubscriber(subject);
subject.addSubscriber(subscriberB);
subject.setState(19);
subject.removeSubscriber(subscriberB);
subject.setState(21);
// Output:
// Notifying all subscribers
// ConcreteSubscriber: Received update with state: 21
