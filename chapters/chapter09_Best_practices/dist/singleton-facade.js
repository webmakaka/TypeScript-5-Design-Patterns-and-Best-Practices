"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SystemFacade {
    constructor(serviceA, serviceB) {
        Object.defineProperty(this, "serviceA", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: serviceA
        });
        Object.defineProperty(this, "serviceB", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: serviceB
        });
    }
    static getInstance(serviceA, serviceB) {
        if (!SystemFacade.instance) {
            SystemFacade.instance = new SystemFacade(serviceA, serviceB);
        }
        return SystemFacade.instance;
    }
    performComplexOperation() {
        this.serviceA.action();
        this.serviceB.action();
        // Additional coordinated actions...
    }
}
class ConcreteServiceA {
    action() {
        console.log('ConcreteServiceA action');
    }
}
class ConcreteServiceB {
    action() {
        console.log('ConcreteServiceB action');
    }
}
// Usage
const facade = SystemFacade.getInstance(new ConcreteServiceA(), new ConcreteServiceB());
facade.performComplexOperation();
