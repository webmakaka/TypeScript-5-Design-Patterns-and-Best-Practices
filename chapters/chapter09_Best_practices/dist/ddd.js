"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Domain Event
class UserRegisteredEvent {
    constructor(userId, email) {
        Object.defineProperty(this, "userId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: userId
        });
        Object.defineProperty(this, "email", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: email
        });
    }
}
class EventDispatcher {
    constructor() {
        Object.defineProperty(this, "listeners", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    dispatch(event) {
        this.listeners.forEach(listener => listener(event));
    }
}
// User Service
class UserService {
    constructor(eventDispatcher) {
        Object.defineProperty(this, "eventDispatcher", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.eventDispatcher = eventDispatcher;
    }
    registerUser(userId, email) {
        // User registration logic here...
        console.log(`User registered: ${userId}`);
        // Dispatch domain event
        const event = new UserRegisteredEvent(userId, email);
        this.eventDispatcher.dispatch(event);
    }
}
// Event Handlers
function sendWelcomeEmail(event) {
    console.log(`Sending welcome email to ${event.email}`);
}
function notifyAdminOfNewUser(event) {
    console.log(`Notifying admin of new user: ${event.userId}`);
}
// Usage
const dispatcher = new EventDispatcher();
const userService = new UserService(dispatcher);
dispatcher.addListener(sendWelcomeEmail);
dispatcher.addListener(notifyAdminOfNewUser);
userService.registerUser('user123', 'user@example.com');
